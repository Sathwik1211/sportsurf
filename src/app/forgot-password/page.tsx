"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, KeyRound, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-ag-bg min-h-screen pt-64 pb-20">
      <div className="container-retail">
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <div className="space-y-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-ag-primary/5 border border-ag-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <KeyRound size={28} className="text-ag-primary" />
                </div>
                <h1 className="font-heading font-extrabold text-3xl text-ag-text uppercase tracking-tight">
                  Reset <span className="text-ag-primary">Password</span>
                </h1>
                <p className="font-body text-ag-text-muted mt-4 text-sm leading-relaxed">
                  Enter your registered work email and we&apos;ll send you instructions to reset your password.
                </p>
              </div>

              <div className="retail-card p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Work Email</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ag-text-muted">
                        <Mail size={18} />
                      </div>
                      <input 
                        required
                        type="email" 
                        placeholder="rahul@institution.com"
                        className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 pl-12 pr-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-full py-5 text-sm uppercase tracking-widest shadow-lg shadow-ag-primary/20">
                    Send Reset Link
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-ag-border text-center">
                  <Link href="/login" className="inline-flex items-center gap-2 font-body text-ag-text-muted text-[11px] font-bold uppercase tracking-widest hover:text-ag-primary transition-colors">
                    <ArrowLeft size={14} />
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 py-12">
               <div className="w-20 h-20 bg-ag-primary/10 rounded-full flex items-center justify-center text-ag-primary mx-auto">
                  <CheckCircle2 size={40} />
               </div>
               <h2 className="font-heading font-black text-ag-text text-3xl uppercase tracking-tighter">Check Your Email</h2>
               <p className="font-body text-ag-text-muted max-w-xs mx-auto text-sm leading-relaxed">
                  We&apos;ve sent a password reset link to your email address. Please check your inbox and spam folder.
               </p>
               <div className="pt-6">
                 <Link href="/login" className="btn btn-outline border-ag-primary text-ag-primary px-8 py-3 uppercase tracking-widest text-xs">
                    Return to Login
                 </Link>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
