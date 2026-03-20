"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
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
  );
}
