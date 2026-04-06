"use client";

import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

export default function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-ag-primary transition-colors group cursor-pointer bg-transparent border-none p-0"
    >
      <MoveLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
      {label}
    </button>
  );
}
