"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [surface, setSurface] = useState("Synthetic Football Turf");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, surface, message }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const text = await res.text();
        setError(text || "Failed to submit request.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-ag-bg min-h-screen pt-64 pb-20">
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
                           123 Sports Arena Complex, Cyber City, Gurgaon, Haryana, India - 122002
                         </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded bg-ag-bg-alt flex items-center justify-center text-ag-primary shrink-0 border border-ag-border">
                         <Mail size={20} />
                      </div>
                      <div>
                         <h4 className="font-body font-bold text-ag-text text-sm uppercase tracking-wider mb-1">Email Inquiry</h4>
                         <p className="font-body text-ag-text-muted text-sm leading-relaxed font-bold">contact@sportsurf.in</p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded bg-ag-bg-alt flex items-center justify-center text-ag-primary shrink-0 border border-ag-border">
                         <Phone size={20} />
                      </div>
                      <div>
                         <h4 className="font-body font-bold text-ag-text text-sm uppercase tracking-wider mb-1">Sales Hotline</h4>
                         <p className="font-body text-ag-text-muted text-sm leading-relaxed font-bold">+91 (800) SPORTSURF</p>
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-ag-border space-y-4">
                   <div className="flex items-center gap-3 text-ag-text-muted">
                      <Clock size={16} className="text-ag-primary" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Mon - Sat: 9:00 AM - 7:00 PM</span>
                   </div>
                   <div className="flex items-center gap-3 text-ag-text-muted">
                      <Globe size={16} className="text-ag-primary" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Pan India Service Availability</span>
                   </div>
                </div>
            </div>

            <div className="retail-card p-6 bg-ag-bg-alt flex items-center justify-between border-ag-primary/20">
               <div className="space-y-1">
                  <span className="text-[9px] font-extrabold text-ag-primary uppercase tracking-[0.2em]">Quick Help</span>
                  <p className="text-sm font-bold text-ag-text">WhatsApp Chat</p>
               </div>
               <a 
                 href="https://wa.me/91800SPORTSURF" 
                 className="btn btn-primary px-6 py-2 text-xs"
               >
                 START CHAT
               </a>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="lg:col-span-2 retail-card p-8 md:p-12">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-500 rounded-lg p-4 mb-6 text-sm text-center font-bold font-body">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Work Email</label>
                       <input 
                        required
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@institution.com"
                        className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Phone Number</label>
                       <input 
                        required
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Infrastructure Requirement</label>
                      <select 
                        value={surface}
                        onChange={(e) => setSurface(e.target.value)}
                        className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all appearance-none"
                      >
                        <option>Synthetic Football Turf</option>
                        <option>Athletic Running Track</option>
                        <option>Multi-Sport Flooring</option>
                        <option>Basketball/Tennis Court</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Message Detail</label>
                    <textarea 
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please tell us about your project location and estimated area..."
                      className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" disabled={loading} className="btn btn-primary w-full md:w-auto px-16 py-5 text-base flex items-center justify-center gap-3 shadow-xl shadow-ag-primary/20">
                      <Send size={18} />
                      {loading ? "Submitting..." : "Request Free Estimate"}
                    </button>
                    <p className="mt-4 text-[10px] text-ag-text-muted font-semibold uppercase tracking-widest text-center md:text-left">
                       No credit card required. Free technical assessment.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  className="py-20 text-center space-y-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 bg-ag-primary/10 rounded-full flex items-center justify-center text-ag-primary mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-heading font-extrabold text-ag-text text-3xl uppercase tracking-tighter">Inquiry Received</h3>
                  <p className="font-body text-ag-text-muted max-w-sm mx-auto text-sm leading-relaxed">
                    Our technical team has received your request. An expert will reach out within 24 hours to schedule a site visit.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-outline border-ag-primary text-ag-primary px-8 py-3 mt-4"
                  >
                    Send Another Response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
