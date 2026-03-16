"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-ag-bg min-h-screen pt-64 pb-20">
      <div className="container-retail">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <span className="text-ag-primary font-extrabold text-[11px] uppercase tracking-widest">Access Portal</span>
            <h1 className="font-heading font-extrabold text-4xl text-ag-text uppercase tracking-tight mt-2">
              Welcome <span className="text-ag-primary">Back</span>
            </h1>
            <p className="font-body text-ag-text-muted mt-4 text-sm">
              Log in to manage your projects and service requests.
            </p>
          </div>

          <div className="retail-card p-8 md:p-10">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ag-text-muted">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="name@business.com"
                    className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 pl-12 pr-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest">Password</label>
                  <Link href="/forgot-password"  className="text-[10px] font-bold text-ag-primary hover:underline">
                    FORGOT PASSWORD?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ag-text-muted">
                    <Lock size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 pl-12 pr-12 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-ag-text-muted hover:text-ag-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full py-5 text-sm uppercase tracking-widest shadow-lg shadow-ag-primary/20 flex items-center justify-center gap-2">
                <LogIn size={18} />
                Secure Login
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-ag-border text-center">
              <p className="font-body text-ag-text-muted text-[11px] font-bold uppercase tracking-widest">
                Don't have an account?{" "}
                <Link href="/register" className="text-ag-primary hover:underline ml-1">
                  CREATE AN ACCOUNT
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
