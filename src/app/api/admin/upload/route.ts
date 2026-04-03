import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    // Check for missing credentials explicitly
    if (!cloudName || !apiKey || !apiSecret) {
      const missing = { cloudName: !!cloudName, apiKey: !!apiKey, apiSecret: !!apiSecret };
      console.error("CLOUD_UPLOAD_ERROR: Missing:", missing);
      
      // Fallback: local storage for local dev environment ONLY
      if (process.env.NODE_ENV === "development") {
        console.log("DEV_MODE: Using local storage fallback since Cloudinary keys are missing.");
        const { writeFile, mkdir } = await import("fs/promises");
        const { join } = await import("path");
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const uploadDir = join(process.cwd(), "public", "uploads");
        try { await mkdir(uploadDir, { recursive: true }); } catch {}
        const uniqueId = Date.now() + "-" + Math.random().toString(36).substring(2, 9);
        const ext = file.name.split(".").pop();
        const fileName = `${uniqueId}.${ext}`;
        await writeFile(join(uploadDir, fileName), buffer);
        return NextResponse.json({ url: `/uploads/${fileName}` });
      }
      
      return NextResponse.json({ 
        error: "Cloud storage credentials not configured",
        debug: missing 
      }, { status: 500 });
    }

    // Configure Cloudinary inside the handler
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });

    // Upload to Cloudinary
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<any>((resolve, reject) => {
      const resourceType = file.type.startsWith("video/") ? "video" : "image";
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "sportsurf",
          resource_type: resourceType,
          transformation: resourceType === 'image' ? [{ quality: 'auto' }] : []
        },
        (error, result) => {
          if (error) {
            console.error("CLOUDINARY_STREAM_ERROR:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    return NextResponse.json({ url: result.secure_url });
  } catch (error: any) {
    console.error("CRITICAL UPLOAD API ERROR:", error);
    return NextResponse.json({ 
      error: error.message || "Upload failed",
      cloudinary_error: error 
    }, { status: 500 });
  }
}
