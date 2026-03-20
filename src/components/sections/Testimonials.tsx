"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials as fallbackTestimonials } from "../../data/testimonials";
import { Star, Quote } from "lucide-react";

export default function Testimonials({ testimonials }: { testimonials?: any[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const list = testimonials && testimonials.length ? testimonials : fallbackTestimonials;

  return (
    <section className="section-sm bg-ag-bg-alt border-t border-ag-border">
      <div className="container-retail">
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-ag-text-muted mb-1">Client Reviews</p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-ag-text">
              Trusted by <em className="text-ag-gold font-normal italic">Leading Institutions</em>
            </h2>
          </div>
          <div className="w-8 h-0.5 bg-ag-gold" />
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {list.map((t: any) => (
              <div key={t.id} className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_33%]">
                <div className="bg-white border border-ag-border h-full p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-0.5 text-[#B8972E]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                      </div>
                      <Quote className="text-ag-gold/20" size={28} />
                    </div>
                    <p className="font-body text-ag-text text-sm leading-relaxed">
                      &quot;{t.quote}&quot;
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-ag-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-ag-primary flex items-center justify-center font-heading font-bold text-white text-xs">
                      {t.avatar ? t.avatar : t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-ag-text text-sm">{t.name}</h4>
                      <p className="font-body text-ag-text-muted text-[10px] uppercase tracking-wider">{t.institution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
