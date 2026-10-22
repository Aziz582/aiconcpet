"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Gift,
  ShieldCheck,
  Zap,
  Activity,
  Flame,
} from "lucide-react";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "bottom-cta" }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "VIP Spot Reserved! Check your inbox soon.");

        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.7 },
            colors: ["#00F2FE", "#4FACFE", "#ffffff", "#38bdf8"],
          });
        } catch {
          // ignore
        }
      } else {
        setStatus("error");
        setMessage(data.error || "Submission error. Please retry.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Could not connect to early access service.");
    }
  };

  return (
    <section id="waitlist" className="py-24 md:py-32 relative overflow-hidden bg-[#070A11]">
      {/* Background neon orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00F2FE]/15 to-[#4FACFE]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#0E1424] to-[#0A0F1D] border border-white/15 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] glow-border">
          {/* Subtle grid in container */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Urgency Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-[#00F2FE] text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Wave 1 Founding Access • Limited Slots</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 max-w-3xl leading-[1.15]">
              Be the First to Deploy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#4FACFE]">
                Autonomous Intelligence
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10">
              Join visionary founders, engineers, and creators building the future of automated operations on AI Concept.
            </p>

            {/* Early Tier Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-10 text-left">
              <div className="p-4 rounded-2xl bg-[#070A11]/60 border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE] shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Tier 1 Priority API</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Zero-waitlist instant provisioning for production models.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#070A11]/60 border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#4FACFE]/10 text-[#4FACFE] shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">50% Lifetime Tier</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Locked-in discount across all autonomous compute engines.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#070A11]/60 border border-white/10 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-400/10 text-emerald-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Direct Concierge</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    Dedicated Slack architecture channel with core AI engineers.
                  </p>
                </div>
              </div>
            </div>

            {/* Input Form */}
            <div className="w-full max-w-lg mx-auto">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center p-2 rounded-2xl bg-[#070A11]/90 border border-white/20 focus-within:border-[#00F2FE]/60 focus-within:shadow-[0_0_25px_rgba(0,242,254,0.3)] transition-all duration-300 gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  disabled={status === "loading" || status === "success"}
                  className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm text-[#070A11] bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Activity className="w-4 h-4 animate-spin" />
                      <span>Reserving...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Claimed!</span>
                    </>
                  ) : (
                    <>
                      <span>Claim Your Spot</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {message && (
                <div
                  className={`mt-3 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                    status === "success"
                      ? "text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/25 rounded-lg py-2 px-3"
                      : "text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg py-2 px-3"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#00F2FE]" />
                  ) : (
                    <Flame className="w-4 h-4 shrink-0 text-rose-400" />
                  )}
                  <span>{message}</span>
                </div>
              )}

              <p className="text-[11px] text-slate-400 mt-4 flex items-center justify-center gap-2">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                No spam. Unsubscribe anytime. Strictly zero data selling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
