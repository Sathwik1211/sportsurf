import { prisma } from "@/lib/prisma";
import { Section } from "@/components/ui/Section";
import FloatCard from "@/components/ui/FloatCard";
import * as LucideIcons from "lucide-react";

const DynamicIcon = ({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) => {
   const IconComponent = (LucideIcons as any)[name];
   if (!IconComponent) return <LucideIcons.HelpCircle size={size} className={className} />;
   return <IconComponent size={size} className={className} />;
};

export const dynamic = "force-dynamic";

export default async function AboutPage() {
   const settings = await prisma.siteSettings.findFirst() || {
     aboutText: "Founded in 2013, SportSurf was born from a singular vision: to bring world-class athletic infrastructure to India.",
     aboutOriginTitle: "THE ORIGIN",
     aboutOriginText: "Today, \"Antigravity\" represents our next evolution — a commitment to physics-driven design that minimizes injury risk and maximizes performance potential.",
     valuesJson: "[]",
     timelineJson: "[]"
   } as any;

  let values = [];
  try { values = JSON.parse(settings.valuesJson || "[]"); } catch { values = []; }
  if (values.length === 0) {
    values = [
      { title: "PRECISION", icon: "Target", text: "Every millimeter of our turf and flooring is tested for consistent ball bounce and player traction." },
      { title: "PEOPLE", icon: "Users", text: "A team of 50+ certified installers and sports engineers dedicated to zero-gravity performance." },
      { title: "PROTECTION", icon: "Shield", text: "Safety is not an afterthought. Our surfaces feature advanced shock absorption layers." }
    ];
  }

   let timeline = [];
   try { timeline = JSON.parse(settings.timelineJson || "[]"); } catch { timeline = []; }
   if (timeline.length === 0) {
     timeline = [
       { year: "2013", title: "Inception", text: "SportSurf India founded in Gurgaon." },
       { year: "2016", title: "FIFA Standards", text: "First FIFA-certified turf installation completed in Delhi." },
       { year: "2019", title: "Expansion", text: "Services extended to 10+ states across India." },
       { year: "2024", title: "Antigravity", text: "Relaunch of our advanced infrastructure brand." }
     ];
   }

   return (
     <div className="pt-12      bg-ag-bg min-h-screen  pb-32 overflow-hidden">
       <Section className="mb-32">
         <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto text-center space-y-6">
             <h1 className="font-display font-black text-ag-lunar text-4xl md:text-7xl uppercase leading-none">
               OUR <span className="text-ag-electric">STORY</span>
             </h1>
             <p className="font-heading font-medium text-ag-asteroid text-lg">
               {settings.aboutText}
             </p>
           </div>
         </div>
       </Section>

       <div className="container mx-auto px-6 space-y-32">
         {/* Core Narrative */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <h2 className="font-heading font-black text-ag-lunar text-3xl uppercase tracking-tight">
                  {settings.aboutOriginTitle?.split(' ')[0]} <span className="text-ag-neon italic">{settings.aboutOriginTitle?.split(' ').slice(1).join(' ')}</span>
               </h2>
               <div className="space-y-6 font-body text-ag-asteroid leading-relaxed text-lg">
                 <p>
                   {settings.aboutOriginText}
                 </p>
               </div>
            </div>
            <div className="aspect-video bg-ag-panel rounded-2xl border border-ag-electric/10 relative overflow-hidden flex items-center justify-center">
               <LucideIcons.History size={120} className="text-ag-electric/5" />
               <div className="absolute inset-x-8 bottom-8 flex gap-4">
                  <div className="badge-neon">Est. 2013</div>
                  <div className="badge-neon border-ag-plasma text-ag-plasma bg-ag-plasma/10">ISO Certified</div>
               </div>
            </div>
         </div>

         {/* Values */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val: any, i: number) => (
              <FloatCard key={i} delay={i * 0.2} className="text-center">
                 <div className="w-16 h-16 rounded-2xl bg-ag-electric/5 border border-ag-electric/20 flex items-center justify-center mx-auto mb-8">
                    <DynamicIcon name={val.icon} className="text-ag-neon" size={28} />
                 </div>
                 <h3 className="font-heading font-bold text-ag-lunar text-xl mb-4 uppercase tracking-widest">{val.title}</h3>
                 <p className="font-body text-ag-asteroid text-sm leading-relaxed">{val.text}</p>
              </FloatCard>
            ))}
         </div>

         {/* Timeline */}
         <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="font-heading font-black text-ag-lunar text-3xl uppercase tracking-tight text-center mb-16">
               OUR <span className="text-ag-plasma italic">TIMELINE</span>
            </h2>
            {timeline.map((item: any, i: number) => (
              <div key={i} className="flex gap-8 group">
                 <div className="font-display font-black text-ag-electric text-3xl md:text-5xl opacity-40 group-hover:opacity-100 transition-opacity">
                    {item.year}
                 </div>
                 <div className="pt-2">
                    <h4 className="font-heading font-bold text-ag-lunar text-lg uppercase mb-2">{item.title}</h4>
                    <p className="font-body text-ag-asteroid text-sm">{item.text}</p>
                 </div>
              </div>
            ))}
         </div>
       </div>
     </div>
   );
}
