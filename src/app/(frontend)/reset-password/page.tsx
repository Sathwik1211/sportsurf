"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Eye, EyeOff, CheckCircle2, AlertCircle, KeyRound } from "lucide-react";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || "Something went wrong.");
      } else {
        setSuccess(true);
        setTimeout(() => router.push("/login"), 3000);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="text-center space-y-6 py-12">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mx-auto">
          <AlertCircle size={40} />
        </div>
        <h2 className="font-heading font-black text-ag-text text-3xl uppercase tracking-tighter">Invalid Link</h2>
        <p className="font-body text-ag-text-muted max-w-xs mx-auto text-sm">
          This password reset link is invalid or malformed.
        </p>
        <Link href="/forgot-password" className="btn btn-primary px-8 py-3 uppercase tracking-widest text-xs inline-block mt-4">
          Request New Link
        </Link>
      </div>
    );
  }

  if (success) {
    return (
      <div className="text-center space-y-6 py-12">
        <div className="w-20 h-20 bg-ag-primary/10 rounded-full flex items-center justify-center text-ag-primary mx-auto">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="font-heading font-black text-ag-text text-3xl uppercase tracking-tighter">Password Updated!</h2>
        <p className="font-body text-ag-text-muted max-w-xs mx-auto text-sm leading-relaxed">
          Your password has been successfully reset. Redirecting you to login...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="text-center">
        <div className="w-16 h-16 bg-ag-primary/5 border border-ag-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <KeyRound size={28} className="text-ag-primary" />
        </div>
        <h1 className="font-heading font-extrabold text-3xl text-ag-text uppercase tracking-tight">
          Create <span className="text-ag-primary">New Password</span>
        </h1>
        <p className="font-body text-ag-text-muted mt-4 text-sm leading-relaxed max-w-sm mx-auto">
          Choose a strong password for your SportSurf account.
        </p>
      </div>

      <div className="retail-card p-8 md:p-10">
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-600 rounded-lg p-4 mb-6 text-center text-xs font-bold font-body flex items-center justify-center gap-2">
            <AlertCircle size={14} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">New Password</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ag-text-muted"><Lock size={18} /></div>
              <input
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 8 characters"
                className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 pl-12 pr-12 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-ag-text-muted hover:text-ag-primary transition-colors">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-body font-bold text-ag-text text-[11px] uppercase tracking-widest ml-1">Confirm Password</label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ag-text-muted"><Lock size={18} /></div>
              <input
                required
                type={showPassword ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Repeat your password"
                className="w-full bg-ag-bg-alt border border-ag-border rounded-lg py-4 pl-12 pr-6 text-ag-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-ag-primary/10 transition-all"
              />
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="btn btn-primary w-full py-5 text-sm uppercase tracking-widest shadow-lg shadow-ag-primary/20"
          >
            {loading ? "Updating..." : "Set New Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="pt-12 bg-ag-bg min-h-screen pb-32">
      <div className="container-retail">
        <div className="max-w-md mx-auto">
          <Suspense fallback={<div className="text-center py-20 text-ag-text-muted">Loading...</div>}>
            <ResetPasswordForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
