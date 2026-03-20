"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { projects as fallbackProjects } from "@/data/projects";

export default function FeaturedProjects({ projects }: { projects?: any[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  
  const list = projects && projects.length ? projects : fallbackProjects;

  return (
    <section className="section-sm bg-white border-t border-ag-border">
      <div className="container-retail">
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-ag-text-muted mb-1">Our Work</p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-ag-text">
              Landmark <em className="text-ag-gold font-normal italic">Installations</em>
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => emblaApi?.scrollPrev()}
              className="w-8 h-8 border border-ag-border flex items-center justify-center text-ag-text hover:bg-ag-bg-alt transition-all">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => emblaApi?.scrollNext()}
              className="w-8 h-8 border border-ag-border flex items-center justify-center text-ag-text hover:bg-ag-bg-alt transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {list.map((project: any) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="flex-[0_0_100%] md:flex-[0_0_46%] lg:flex-[0_0_31%] group cursor-grab active:cursor-grabbing">
                <div className="img-overlay-card h-52">
                  <img src={project.imageUrl || project.image || "/images/sports/surface_sports.png"} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ag-text/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <MapPin size={14} className="text-ag-gold" />
                      <span className="text-xs font-body uppercase tracking-wider text-white/80">{project.city}, {project.state}</span>
                    </div>
                    <h3 className="font-heading font-black text-lg md:text-xl text-white leading-tight">{project.name}</h3>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs font-body text-white/70">Area: {project.area}</span>
                      <span className="text-[11px] font-body uppercase tracking-wider text-ag-gold group-hover:text-white transition-colors flex items-center gap-1">
                        Case Study <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
