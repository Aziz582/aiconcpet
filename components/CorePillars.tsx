"use client";

import React, { useState } from "react";
import {
  Bot,
  Cpu,
  Workflow,
  Network,
  Shield,
  Sparkles,
  Lock,
  Globe,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CorePillars() {
  const [activeAgentTab, setActiveAgentTab] = useState<"support" | "code" | "sales" | "finance">("support");
  const { t, isRTL } = useLanguage();

  const agentTools = {
    support: ["Zendesk", "Slack", "PostgreSQL", "Notion"],
    code: ["GitHub", "GitLab", "Docker", "Sentry"],
    sales: ["HubSpot", "LinkedIn", "Apollo", "Google Meet"],
    finance: ["Stripe", "QuickBooks", "Plaid", "Snowflake"],
  };

  const currentTab = t.pillars.pillar1.tabs[activeAgentTab];

  return (
    <section id="platform" className="py-24 md:py-32 relative bg-[#070A11]">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00F2FE]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#4FACFE]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/25 text-[#00F2FE] text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            {t.pillars.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.pillars.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Autonomous AI Agents (Spans 7 cols on LG) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0E1424] border border-white/10 p-6 sm:p-8 hover:border-[#00F2FE]/40 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00F2FE]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {t.pillars.pillar1.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00F2FE] transition-colors">
                {t.pillars.pillar1.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {t.pillars.pillar1.description}
              </p>

              {/* Interactive Agent Switcher */}
              <div className="flex flex-wrap gap-2 mb-5">
                {(["support", "code", "sales", "finance"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveAgentTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize cursor-pointer ${
                      activeAgentTab === tab
                        ? "bg-[#00F2FE] text-[#070A11] font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)]"
                        : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {isRTL
                      ? tab === "support"
                        ? "الدعم الفني"
                        : tab === "code"
                        ? "فحص الكود"
                        : tab === "sales"
                        ? "المبيعات"
                        : "المالية"
                      : `${tab} Agent`}
                  </button>
                ))}
              </div>

              {/* Dynamic tab preview */}
              <div className="rounded-2xl bg-[#070A11]/80 border border-white/10 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    {currentTab.title}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {currentTab.metric}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  {currentTab.desc}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                  <span className="text-[11px] text-slate-400">{t.pillars.pillar1.toolsLabel}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {agentTools[activeAgentTab].map((tool) => (
                      <span key={tool} className="text-[10px] font-mono text-slate-300 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-[#00F2FE]">
                <Sparkles className="w-3.5 h-3.5" /> {t.pillars.pillar1.footer}
              </span>
              <span className="font-mono text-slate-400">{t.pillars.pillar1.status}</span>
            </div>
          </div>

          {/* Bento Card 2: Smart Automation Pipelines (Spans 5 cols on LG) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0E1424] border border-white/10 p-6 sm:p-8 hover:border-[#4FACFE]/40 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#4FACFE]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-[#4FACFE]/10 text-[#4FACFE] border border-[#4FACFE]/20">
                  <Workflow className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {t.pillars.pillar2.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4FACFE] transition-colors">
                {t.pillars.pillar2.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {t.pillars.pillar2.description}
              </p>

              {/* Visual Pipeline Node Diagram */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-[#070A11]/90 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span className="text-xs font-mono text-slate-300">{t.pillars.pillar2.trigger}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">{t.pillars.pillar2.triggerSub}</span>
                </div>

                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-amber-400/50 to-[#00F2FE]" />
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/90 border border-[#00F2FE]/30 flex items-center justify-between shadow-[0_0_15px_rgba(0,242,254,0.1)]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping shrink-0" />
                    <span className="text-xs font-mono text-white font-medium">{t.pillars.pillar2.decision}</span>
                  </div>
                  <span className="text-[11px] text-[#00F2FE] font-mono">{t.pillars.pillar2.decisionSub}</span>
                </div>

                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-[#00F2FE] to-emerald-400" />
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/90 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-xs font-mono text-slate-300">{t.pillars.pillar2.action}</span>
                  </div>
                  <span className="text-[11px] text-emerald-400">{t.pillars.pillar2.actionSub}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>{t.pillars.pillar2.footer}</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> {t.pillars.pillar2.reliable}
              </span>
            </div>
          </div>

          {/* Bento Card 3: Dynamic Intelligence Hub (Spans 5 cols on LG) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0E1424] border border-white/10 p-6 sm:p-8 hover:border-[#00F2FE]/40 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00F2FE]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
                  <Network className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {t.pillars.pillar3.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00F2FE] transition-colors">
                {t.pillars.pillar3.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {t.pillars.pillar3.description}
              </p>

              {/* Industry cards */}
              <div className="space-y-2.5">
                {t.pillars.pillar3.industries.map((ind, i) => (
                  <div
                    key={ind.name}
                    className={`p-3 rounded-xl border transition-all ${
                      i === 0
                        ? "bg-[#070A11] border-[#00F2FE]/40 shadow-[0_0_15px_rgba(0,242,254,0.1)]"
                        : "bg-[#070A11]/50 border-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${i === 0 ? "text-[#00F2FE]" : "text-white"}`}>
                        {ind.name}
                      </span>
                      <span className="text-[10px] text-slate-400">{t.pillars.pillar3.tailored}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {ind.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>{t.pillars.pillar3.footer}</span>
              <span className="text-[#00F2FE] font-medium">{t.pillars.pillar3.status}</span>
            </div>
          </div>

          {/* Bento Card 4: Enterprise-Grade Performance (Spans 7 cols on LG) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0E1424] border border-white/10 p-6 sm:p-8 hover:border-[#4FACFE]/40 transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#4FACFE]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {t.pillars.pillar4.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {t.pillars.pillar4.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {t.pillars.pillar4.description}
              </p>

              {/* Security & Performance Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-[#070A11]/80 border border-white/10">
                  <p className="text-[11px] text-slate-400">{t.pillars.pillar4.stat1.label}</p>
                  <p className="text-xl font-bold text-[#00F2FE] mt-1">{t.pillars.pillar4.stat1.val}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{t.pillars.pillar4.stat1.sub}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/80 border border-white/10">
                  <p className="text-[11px] text-slate-400">{t.pillars.pillar4.stat2.label}</p>
                  <p className="text-xl font-bold text-emerald-400 mt-1">{t.pillars.pillar4.stat2.val}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{t.pillars.pillar4.stat2.sub}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/80 border border-white/10">
                  <p className="text-[11px] text-slate-400">{t.pillars.pillar4.stat3.label}</p>
                  <p className="text-xl font-bold text-[#4FACFE] mt-1">{t.pillars.pillar4.stat3.val}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{t.pillars.pillar4.stat3.sub}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/80 border border-white/10">
                  <p className="text-[11px] text-slate-400">{t.pillars.pillar4.stat4.label}</p>
                  <p className="text-xl font-bold text-white mt-1">{t.pillars.pillar4.stat4.val}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{t.pillars.pillar4.stat4.sub}</p>
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="mt-5 p-3 rounded-xl bg-[#070A11]/60 border border-white/5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-200">{t.pillars.pillar4.compliance}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">SOC-2 Type II</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">GDPR & HIPAA</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">ISO 27001</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-400" /> {t.pillars.pillar4.footer}
              </span>
              <span className="text-emerald-400 font-mono">{t.pillars.pillar4.status}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
