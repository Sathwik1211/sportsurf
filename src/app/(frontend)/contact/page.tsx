import { prisma } from "@/lib/prisma";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const settings = await prisma.siteSettings.findFirst() || {
    contactEmail: "contact@sportsurf.in",
    contactPhone: "+91 (800) SPORTSURF",
    address: "123 Sports Arena Complex, Cyber City, Gurgaon, Haryana, India - 122002",
    officeHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    whatsappNumber: "+91800SPORTSURF",
    serviceArea: "Pan India Service Availability"
  };

  return (
    <div className="pt-12         bg-ag-bg min-h-screen  pb-32">
      <div className="container-retail">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="text-ag-primary font-extrabold text-[11px] uppercase tracking-widest">Connect with Us</span>
              <h1 className="font-heading font-extrabold text-3xl md:text-6xl text-ag-text uppercase tracking-tight leading-none">
                Contact <span className="text-ag-primary">Our Experts</span>
              </h1>
              <p className="font-body text-ag-text-muted max-w-xl text-lg">
                India&apos;s most trusted sports infrastructure team is ready to assist you.
              </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Contact Information (Left) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="retail-card p-8 space-y-8">
                <div className="space-y-6">
                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded bg-ag-bg-alt flex items-center justify-center text-ag-primary shrink-0 border border-ag-border">
                         <MapPin size={20} />
                      </div>
                      <div>
                         <h4 className="font-body font-bold text-ag-text text-sm uppercase tracking-wider mb-1">Corporate Office</h4>
                         <p className="font-body text-ag-text-muted text-sm leading-relaxed">
                           {settings.address}
                         </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded bg-ag-bg-alt flex items-center justify-center text-ag-primary shrink-0 border border-ag-border">
                         <Mail size={20} />
                      </div>
                      <div>
                         <h4 className="font-body font-bold text-ag-text text-sm uppercase tracking-wider mb-1">Email Inquiry</h4>
                         <p className="font-body text-ag-text-muted text-sm leading-relaxed font-bold">{settings.contactEmail}</p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded bg-ag-bg-alt flex items-center justify-center text-ag-primary shrink-0 border border-ag-border">
                         <Phone size={20} />
                      </div>
                      <div>
                         <h4 className="font-body font-bold text-ag-text text-sm uppercase tracking-wider mb-1">Sales Hotline</h4>
                         <p className="font-body text-ag-text-muted text-sm leading-relaxed font-bold">{settings.contactPhone}</p>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-ag-border space-y-4">
                   <div className="flex items-center gap-3 text-ag-text-muted">
                      <Clock size={16} className="text-ag-primary" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">{settings.officeHours}</span>
                   </div>
                   <div className="flex items-center gap-3 text-ag-text-muted">
                      <Globe size={16} className="text-ag-primary" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">{settings.serviceArea}</span>
                   </div>
                </div>
            </div>

            <div className="retail-card p-6 bg-ag-bg-alt flex items-center justify-between border-ag-primary/20">
               <div className="space-y-1">
                  <span className="text-[9px] font-extrabold text-ag-primary uppercase tracking-[0.2em]">Quick Help</span>
                  <p className="text-sm font-bold text-ag-text">WhatsApp Chat</p>
               </div>
               <a 
                 href={`https://wa.me/${settings.whatsappNumber?.replace(/\D/g, '')}`} 
                 className="btn btn-primary px-6 py-2 text-xs"
               >
                 START CHAT
               </a>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="lg:col-span-2 retail-card p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
