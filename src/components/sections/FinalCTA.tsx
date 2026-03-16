import Link from "next/link";
import { MessageCircle, PhoneCall, Clock } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-10 md:py-16 bg-ag-primary border-t border-ag-border relative overflow-hidden">
      <div className="container-retail relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white/60">
              <Clock size={14} />
              <span className="text-[10px] font-body uppercase tracking-widest">Available 24/7 — Pan India</span>
            </div>
            <h2 className="font-heading font-bold text-white text-2xl md:text-3xl">
              Ready to <em className="text-ag-gold italic font-normal">Build?</em><br />
              Get a Free Site Visit.
            </h2>
            <p className="font-body text-white/60 text-sm max-w-md">
              Join 500+ institutional partners. Our team visits for detailed assessment & custom quote.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/contact" className="btn btn-gold px-10 py-3 text-[11px] rounded-none">
              REQUEST FREE ESTIMATE
            </Link>
            <a href="https://wa.me/918005678" className="btn btn-outline border-white/30 text-white hover:bg-white/10 px-10 py-3 text-[11px] rounded-none flex items-center justify-center gap-2">
              <MessageCircle size={14} /> WHATSAPP US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
