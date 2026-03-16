"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, Phone, CheckCircle2, UserPlus } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="bg-ag-bg min-h-screen pt-64 pb-20">
      <div className="container-retail">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-ag-primary font-extrabold text-[11px] uppercase tracking-widest">New Partnerships</span>
            <h1 className="font-heading font-extrabold text-4xl text-ag-text uppercase tracking-tight mt-2">
              Create an <span className="text-ag-primary">Account</span>
            </h1>
            <p className="font-body text-ag-text-muted mt-4 text-sm">
              Join India&apos;s most advanced sports infrastructure network.
            </p>
          </div>

          <div className="retail-card p-8 md:p-12">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ag-text-muted">
                      <User size={18} />
                    </div>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 pl-12 pr-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                    />
                  </div>
                </div>

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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Phone Number</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ag-text-muted">
                      <Phone size={18} />
                    </div>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 pl-12 pr-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">User Segment</label>
                  <select className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 px-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all appearance-none">
                    <option>Individual Developer</option>
                    <option>Institutional/School</option>
                    <option>Corporate Real Estate</option>
                    <option>Sports Academy Owner</option>
                    <option>Government Body</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Password</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ag-text-muted">
                      <Lock size={18} />
                    </div>
                    <input 
                      required
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 pl-12 pr-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ag-text-muted">
                      <Lock size={18} />
                    </div>
                    <input 
                      required
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 pl-12 pr-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-ag-bg-alt/50 rounded-lg border border-ag-border">
                 <input type="checkbox" id="terms" className="mt-1 accent-ag-primary" required />
                 <label htmlFor="terms" className="text-[10px] font-bold text-ag-text-muted leading-relaxed uppercase tracking-widest">
                    I agree to the <span className="text-ag-primary cursor-pointer hover:underline">Antigravity Terms of Service</span> and acknowledge the Privacy Policy for data handling in sports infrastructure projects.
                 </label>
              </div>

              <button type="submit" className="btn btn-primary w-full py-5 text-sm uppercase tracking-widest shadow-lg shadow-ag-primary/20 flex items-center justify-center gap-2">
                <UserPlus size={18} />
                Create Professional Account
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-ag-border text-center">
              <p className="font-body text-ag-text-muted text-[11px] font-bold uppercase tracking-widest">
                Already have an account?{" "}
                <Link href="/login" className="text-ag-primary hover:underline ml-1">
                  SIGN IN HERE
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
