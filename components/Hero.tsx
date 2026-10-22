"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Bot,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Flame,
  Check,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [subscriberCount, setSubscriberCount] = useState(1482);
  const { t, isRTL } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage(isRTL ? "يرجى إدخال عنوان بريد إلكتروني صالح." : "Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero" }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(
          data.alreadySubscribed
            ? t.hero.alreadySubscribed
            : (t.hero.successMessage || data.message)
        );
        if (data.count) {
          setSubscriberCount(data.count);
        }

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#00F2FE", "#4FACFE", "#ffffff", "#38bdf8"],
          });
        } catch {
          // ignore
        }
      } else {
        setStatus("error");
        setMessage(data.error || (isRTL ? "حدث خطأ ما. يرجى المحاولة ثانية." : "Something went wrong. Please retry."));
      }
    } catch {
      setStatus("error");
      setMessage(isRTL ? "تعذر الاتصال بالخادم. تحقق من اتصالك بالإنترنت." : "Network error. Could not connect to early access service.");
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial gradient glow & grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#00F2FE]/15 to-[#4FACFE]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0E1424]/90 border border-white/10 hover:border-[#00F2FE]/40 shadow-[0_0_20px_rgba(0,242,254,0.1)] transition-all duration-300 mb-8 cursor-default group max-w-[92vw] sm:max-w-none">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2 bg-[#00F2FE]"></span>
            </span>
            <span className="text-[11px] sm:text-sm font-medium text-slate-200 truncate sm:overflow-visible">
              {t.hero.announcement}
            </span>
            <div className="w-px h-3 bg-white/20 hidden sm:block" />
            <span className="text-xs font-semibold text-[#00F2FE] hidden sm:inline-flex items-center gap-1 group-hover:scale-105 transition-transform">
              <span>{t.hero.joinWave}</span>
              <ArrowIcon className="w-3 h-3" />
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.15] mb-6">
            {t.hero.titlePart1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#4FACFE] drop-shadow-[0_0_35px_rgba(0,242,254,0.3)]">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300/90 leading-relaxed font-normal max-w-2xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>

          {/* Lead Capture Form */}
          <div className="w-full max-w-xl mx-auto mb-6" id="lead-form">
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col sm:flex-row items-center p-2 rounded-2xl bg-[#0E1424]/90 border border-white/15 focus-within:border-[#00F2FE]/60 focus-within:shadow-[0_0_30px_rgba(0,242,254,0.25)] transition-all duration-300 gap-2 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center flex-1 w-full px-3">
                <Sparkles className="w-5 h-5 text-slate-400 shrink-0 mx-1" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.hero.placeholder}
                  required
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none disabled:opacity-50 py-2.5"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-[#070A11] bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-75"
              >
                {status === "loading" ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin text-[#070A11]" />
                    <span>{t.hero.loadingButton}</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#070A11]" />
                    <span>{t.hero.successButton}</span>
                  </>
                ) : (
                  <>
                    <span>{t.hero.requestButton}</span>
                    <ArrowIcon className="w-4 h-4 text-[#070A11]" />
                  </>
                )}
              </button>
            </form>

            {/* Status Feedback Message */}
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

            {/* Social Proof sub-metric */}
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400 font-medium">
              <span className="flex -space-x-2">
                <span className="inline-block h-6 w-6 rounded-full bg-slate-700 border-2 border-[#070A11] text-[10px] text-center leading-5 text-white font-bold">
                  AK
                </span>
                <span className="inline-block h-6 w-6 rounded-full bg-cyan-700 border-2 border-[#070A11] text-[10px] text-center leading-5 text-white font-bold">
                  SR
                </span>
                <span className="inline-block h-6 w-6 rounded-full bg-indigo-700 border-2 border-[#070A11] text-[10px] text-center leading-5 text-white font-bold">
                  DZ
                </span>
              </span>
              <span>
                <strong className="text-white font-semibold">{subscriberCount.toLocaleString()}+</strong> {t.hero.socialProof}
              </span>
            </div>
          </div>

          {/* Trust / Capabilities Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-6 pt-8 border-t border-white/10">
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-[#0E1424]/40 border border-white/5">
              <div className="p-2 rounded-lg bg-[#00F2FE]/10 text-[#00F2FE] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <p className="text-xs font-semibold text-white">{t.hero.trustPillars.multiModel}</p>
                <p className="text-[11px] text-slate-400">{t.hero.trustPillars.multiModelDesc}</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-[#0E1424]/40 border border-white/5">
              <div className="p-2 rounded-lg bg-[#4FACFE]/10 text-[#4FACFE] shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <p className="text-xs font-semibold text-white">{t.hero.trustPillars.zeroCode}</p>
                <p className="text-[11px] text-slate-400">{t.hero.trustPillars.zeroCodeDesc}</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-[#0E1424]/40 border border-white/5">
              <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <p className="text-xs font-semibold text-white">{t.hero.trustPillars.secure}</p>
                <p className="text-[11px] text-slate-400">{t.hero.trustPillars.secureDesc}</p>
              </div>
            </div>
          </div>

          {/* Interactive Agent Terminal Simulation Widget */}
          <div className="w-full max-w-4xl mt-14 rounded-2xl bg-[#0E1424]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden relative group hover:border-[#00F2FE]/30 transition-all duration-300 text-left dir-ltr" dir="ltr">
            {/* Window chrome header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0B101D] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#00F2FE]" />
                  {t.hero.terminal.header}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {t.hero.terminal.online}
                </span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-4">
              <div className="flex items-start gap-3 text-slate-400">
                <span className="text-[#00F2FE] select-none font-bold">›</span>
                <p>
                  <span className="text-slate-100 font-semibold">{t.hero.terminal.promptLabel}</span>{" "}
                  {t.hero.terminal.promptText}
                </p>
              </div>

              <div className="space-y-2.5 pl-4 border-l-2 border-[#00F2FE]/30 py-1">
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#00F2FE] shrink-0" />
                  <span>{t.hero.terminal.step1}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#00F2FE] shrink-0" />
                  <span>{t.hero.terminal.step2}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-3.5 h-3.5 text-[#00F2FE] shrink-0" />
                  <span>{t.hero.terminal.step3}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-[#00F2FE] animate-spin shrink-0" />
                  <span>{t.hero.terminal.step4}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                <div className="flex items-center gap-4">
                  <span>RAM: <strong>1.2 GB</strong></span>
                  <span>Tokens/Sec: <strong className="text-cyan-400">{t.hero.terminal.tokensSec}</strong></span>
                  <span>Guardrails: <strong className="text-emerald-400">{t.hero.terminal.guardrails}</strong></span>
                </div>
                <div className="text-[#00F2FE] font-mono flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  <span>{t.hero.terminal.ready}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
