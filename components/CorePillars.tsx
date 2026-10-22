"use client";

import React, { useState } from "react";
import {
  Bot,
  Cpu,
  Workflow,
  Network,
  Shield,
  Zap,
  ArrowUpRight,
  Database,
  Lock,
  Globe,
  Sliders,
  Sparkles,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export default function CorePillars() {
  const [activeAgentTab, setActiveAgentTab] = useState<"support" | "code" | "sales" | "finance">("support");
  const [activeIndustry, setActiveIndustry] = useState<string>("SaaS & Tech");

  const agentTabs = {
    support: {
      title: "Omnichannel Support Agent",
      desc: "Resolves 84% of tier-1 customer inquiries autonomously across email, chat, and tickets in seconds.",
      metric: "0.4s avg response",
      tools: ["Zendesk", "Slack", "PostgreSQL", "Notion"],
    },
    code: {
      title: "Self-Healing Code Auditor",
      desc: "Continuously scans PRs, identifies performance bottlenecks, writes regression tests, and flags security flaws.",
      metric: "99.4% precision",
      tools: ["GitHub", "GitLab", "Docker", "Sentry"],
    },
    sales: {
      title: "Autonomous Outbound Pipeline",
      desc: "Conducts deep prospect research, drafts hyper-personalized proposals, and schedules qualification calls.",
      metric: "3.2x meeting rate",
      tools: ["HubSpot", "LinkedIn", "Apollo", "Google Meet"],
    },
    finance: {
      title: "Real-Time Financial Forecaster",
      desc: "Aggregates transactions, reconciles cross-border accounts, and generates dynamic cashflow runout projections.",
      metric: "Zero manual audit",
      tools: ["Stripe", "QuickBooks", "Plaid", "Snowflake"],
    },
  };

  const industries = [
    { name: "SaaS & Tech", desc: "Automate user onboarding, churn prediction, and telemetry analytics." },
    { name: "E-Commerce", desc: "Dynamic pricing, AI catalogue tagging, and inventory re-order agents." },
    { name: "Real Estate", desc: "Instant property valuation, lead qualification, and legal contract analysis." },
    { name: "Financial Services", desc: "Automated compliance, fraud anomaly detection, and automated reporting." },
  ];

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
            Core Platform Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered for Autonomous Scale
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Four foundational pillars uniting state-of-the-art cognitive AI with enterprise reliability.
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
                  Pillar 01
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00F2FE] transition-colors">
                Autonomous AI Agents
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Custom virtual assistants trained for your specific workflow. They plan multi-step execution paths, access your tools, and make autonomous decisions with human-in-the-loop oversight.
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
                    {tab} Agent
                  </button>
                ))}
              </div>

              {/* Dynamic tab preview */}
              <div className="rounded-2xl bg-[#070A11]/80 border border-white/10 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    {agentTabs[activeAgentTab].title}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {agentTabs[activeAgentTab].metric}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  {agentTabs[activeAgentTab].desc}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                  <span className="text-[11px] text-slate-400">Connected Tools:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {agentTabs[activeAgentTab].tools.map((tool) => (
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
                <Sparkles className="w-3.5 h-3.5" /> Self-adapting execution memory
              </span>
              <span className="font-mono">Ready for deployment</span>
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
                  Pillar 02
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4FACFE] transition-colors">
                Smart Automation Pipelines
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Seamlessly connecting APIs, databases, webhooks, and daily business tasks with zero friction.
              </p>

              {/* Visual Pipeline Node Diagram */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-[#070A11]/90 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-mono text-slate-300">1. Trigger: Inbound Event</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Webhook / Kafka</span>
                </div>

                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-amber-400/50 to-[#00F2FE]" />
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/90 border border-[#00F2FE]/30 flex items-center justify-between shadow-[0_0_15px_rgba(0,242,254,0.1)]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping" />
                    <span className="text-xs font-mono text-white font-medium">2. AI Decision Engine</span>
                  </div>
                  <span className="text-[11px] text-[#00F2FE] font-mono">14ms latency</span>
                </div>

                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-[#00F2FE] to-emerald-400" />
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/90 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-300">3. Action: Scaled Dispatch</span>
                  </div>
                  <span className="text-[11px] text-emerald-400">Database + Notify</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Automatic retries & rollback</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> 100% Reliable
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
                  Pillar 03
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00F2FE] transition-colors">
                Dynamic Intelligence Hub
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Adaptive AI models tailored across diverse market sectors. Continuous learning ensures your models evolve alongside your company&apos;s growth.
              </p>

              {/* Industry pills */}
              <div className="space-y-2.5">
                {industries.map((ind) => (
                  <div
                    key={ind.name}
                    onClick={() => setActiveIndustry(ind.name)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      activeIndustry === ind.name
                        ? "bg-[#070A11] border-[#00F2FE]/40 shadow-[0_0_15px_rgba(0,242,254,0.1)]"
                        : "bg-[#070A11]/50 border-white/5 hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${activeIndustry === ind.name ? "text-[#00F2FE]" : "text-white"}`}>
                        {ind.name}
                      </span>
                      <span className="text-[10px] text-slate-400">Tailored Pack</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {ind.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Domain fine-tuned weights</span>
              <span className="text-[#00F2FE] font-medium">Auto-calibrating</span>
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
                  Pillar 04
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                Enterprise-Grade Performance
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Sub-50ms execution, high-concurrency architecture, and military-grade privacy. Built for mission-critical operations where downtime or leakage is not an option.
              </p>

              {/* Security & Performance Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-[#070A11]/80 border border-white/10">
                  <p className="text-[11px] text-slate-400">Inference Speed</p>
                  <p className="text-xl font-bold text-[#00F2FE] mt-1">&lt;35ms</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Global edge distribution</p>
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/80 border border-white/10">
                  <p className="text-[11px] text-slate-400">SLA Guarantee</p>
                  <p className="text-xl font-bold text-emerald-400 mt-1">99.99%</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">High-availability cluster</p>
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/80 border border-white/10">
                  <p className="text-[11px] text-slate-400">Privacy Standard</p>
                  <p className="text-xl font-bold text-[#4FACFE] mt-1">Zero Retain</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Ephemeral sandbox</p>
                </div>

                <div className="p-3 rounded-xl bg-[#070A11]/80 border border-white/10">
                  <p className="text-[11px] text-slate-400">Encryption</p>
                  <p className="text-xl font-bold text-white mt-1">AES-256</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">At rest & in transit</p>
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="mt-5 p-3 rounded-xl bg-[#070A11]/60 border border-white/5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-200">Compliance & Guardrails:</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">SOC-2 Type II Ready</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">GDPR & HIPAA</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">ISO 27001 Aligned</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-400" /> Deployed across 32 global edge regions
              </span>
              <span className="text-emerald-400 font-mono">Status: Green</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
