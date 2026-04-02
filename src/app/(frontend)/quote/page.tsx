"use client";

import { useState } from "react";
import { Calculator, MapPin, Ruler, FileText, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [area, setArea] = useState<number>(0);
  const [sport, setSport] = useState("Football");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-12     bg-ag-bg min-h-screen  pb-32">
      <div className="container-retail">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="text-ag-primary font-extrabold text-[11px] uppercase tracking-widest">Precision Estimates</span>
              <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-ag-text uppercase tracking-tight leading-none">
                Get a <span className="text-ag-primary">Quote</span>
              </h1>
              <p className="font-body text-ag-text-muted max-w-xl text-lg">
                Receive a detailed technical and commercial proposal for your sports facility.
              </p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-ag-bg-alt border border-ag-border rounded-lg">
               <Calculator size={18} className="text-ag-primary" />
               <span className="text-[10px] font-bold text-ag-text uppercase tracking-widest">Instant Assessment</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Side */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="quote-form"
                    onSubmit={handleSubmit}
                    className="retail-card p-8 md:p-10 space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                         <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Project Category</label>
                         <select 
                           value={sport}
                           onChange={(e) => setSport(e.target.value)}
                           className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all appearance-none"
                         >
                           <option>Synthetic Football Turf</option>
                           <option>Athletic Running Track</option>
                           <option>Multi-Sport Indoor Court</option>
                           <option>Tennis/Basketball Acrylic</option>
                           <option>Box Cricket / Multi-Utility</option>
                         </select>
                      </div>

                      <div className="space-y-2">
                        <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Proposed Area (Sq. Ft.)</label>
                        <div className="relative">
                          <input 
                            required
                            type="number" 
                            placeholder="e.g. 5000"
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                          />
                          <div className="absolute right-4 top-1/2 -translated-y-1/2">
                             <Ruler size={16} className="text-ag-text-muted" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Project Location</label>
                        <div className="relative">
                          <input 
                            required
                            type="text" 
                            placeholder="City, State"
                            className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                          />
                          <div className="absolute right-4 top-1/2 -translated-y-1/2">
                             <MapPin size={16} className="text-ag-text-muted" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Urgency Level</label>
                        <select className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all appearance-none">
                          <option>Planning Phase (3+ Months)</option>
                          <option>Immediate (Within 1 Month)</option>
                          <option>Tender Process</option>
                          <option>Repair/Maintenance only</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Client Information</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Full Name" className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10" required />
                        <input type="tel" placeholder="Phone Number" className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Additional Project Details</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about sub-base conditions, site access, or specific brand requirements..."
                        className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full py-6 text-sm uppercase tracking-widest shadow-xl shadow-ag-primary/20 flex items-center justify-center gap-3">
                      <Send size={18} />
                      Generate Official Quote
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="retail-card p-12 text-center space-y-6"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <CheckCircle2 size={64} className="text-ag-primary mx-auto" />
                    <h2 className="font-heading font-black text-ag-text text-3xl uppercase tracking-tighter">Proposal Request Logged</h2>
                    <p className="font-body text-ag-text-muted text-base max-w-sm mx-auto">
                      Our engineering division is reviewing your data. A preliminary technical document will be sent to your email within 4 working hours.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="btn btn-outline px-10 py-3 text-xs uppercase tracking-widest">
                       Submit Different Scope
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Stats/Info */}
            <div className="lg:col-span-1 space-y-8">
               <div className="retail-card p-8 border-ag-primary/20 bg-ag-bg-alt">
                  <h3 className="font-body font-black text-ag-text text-lg uppercase tracking-tight mb-4 flex items-center gap-2">
                     <FileText size={20} className="text-ag-primary" />
                     Inclusions
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "Itemized Material Costs",
                       "Technical Cross-Sections",
                       "Logistics & Civil Estimates",
                       "Warranty Documentation",
                       "Project Timeline Map"
                     ].map((item, i) => (
                       <li key={i} className="flex gap-3 items-start">
                          <CheckCircle2 size={14} className="text-ag-primary mt-0.5" />
                          <span className="text-[11px] font-bold text-ag-text-muted uppercase tracking-wider">{item}</span>
                       </li>
                     ))}
                  </ul>
               </div>

               <div className="retail-card p-8 bg-ag-primary text-white space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                     <Calculator size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-xl uppercase leading-none">Why detailed metrics matter?</h4>
                  <p className="font-body text-white/80 text-xs leading-relaxed">
                     Providing accurate area dimensions allows our experts to specify the correct sub-base requirements, often saving up to 15% on civil construction costs.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
