"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Calendar,
  Layers,
  ArrowRight,
  Megaphone,
  Briefcase,
  TrendingUp,
  Boxes,
  Lock,
  ChevronRight,
  Clock,
  Compass,
} from "lucide-react";

export default function FutureServices() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Custom Industry Agents",
      subtitle: "Real Estate, Commerce & Professional Services",
      quarter: "Q3 2026",
      status: "Private Alpha",
      statusColor: "text-[#00F2FE] bg-[#00F2FE]/10 border-[#00F2FE]/25",
      icon: Briefcase,
      description:
        "Deeply specialized vertical agents pre-loaded with industry terminology, regulatory compliance rules, and automated execution workflows.",
      features: [
        "Real Estate: Property valuation, automated listing generation, and contract redlining",
        "Commerce: Dynamic inventory replenishment, competitor pricing monitoring, and hyper-targeted retention",
        "Professional Services: Automated client intake, document verification, and milestone billing",
      ],
      progress: "85%",
    },
    {
      id: 2,
      title: "Automated Content & Marketing Engines",
      subtitle: "Multi-Channel Generative Campaign Orchestration",
      quarter: "Q4 2026",
      status: "In Development",
      statusColor: "text-[#4FACFE] bg-[#4FACFE]/10 border-[#4FACFE]/25",
      icon: Megaphone,
      description:
        "Autonomous marketing systems that analyze performance metrics in real-time, generate personalized visual/copy assets, and orchestrate omnichannel distribution.",
      features: [
        "Autonomous A/B testing with continuous visual & copy self-optimization",
        "Brand voice fine-tuning from existing pitch decks, blogs, and manuals",
        "One-click multi-platform publishing (LinkedIn, X, YouTube, newsletters)",
      ],
      progress: "60%",
    },
    {
      id: 3,
      title: "Business Intelligence & Smart Workflows",
      subtitle: "Predictive Analytics & Real-Time Executive Briefings",
      quarter: "Q1 2027",
      status: "Design Phase",
      statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/25",
      icon: TrendingUp,
      description:
        "Autonomous BI synthesizers that monitor company databases, detect revenue anomalies before humans notice, and execute mitigation workflows automatically.",
      features: [
        "Natural language executive querying over petabyte-scale data lakes",
        "Autonomous anomaly intervention (e.g. churn flags trigger retention incentives)",
        "Automated daily C-level podcast and markdown intelligence summaries",
      ],
      progress: "35%",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#070A11]/90 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#4FACFE]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4FACFE]/10 border border-[#4FACFE]/25 text-[#4FACFE] text-xs font-semibold uppercase tracking-wider mb-4">
            <Boxes className="w-3.5 h-3.5" />
            Coming Soon - Modular AI Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Roadmap to Complete Autonomy
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Modular, plug-and-play AI modules currently in active pipeline engineering. Reserve early access to test them first.
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = selectedService === service.id;

            return (
              <div
                key={service.id}
                className="rounded-3xl bg-[#0E1424] border border-white/10 p-6 sm:p-8 hover:border-[#00F2FE]/40 transition-all duration-300 relative flex flex-col justify-between group shadow-xl hover:shadow-[0_0_30px_rgba(0,242,254,0.1)]"
              >
                <div>
                  {/* Top status bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-medium text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#00F2FE]" />
                      {service.quarter}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${service.statusColor}`}
                    >
                      {service.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00F2FE] mb-6 group-hover:scale-110 group-hover:border-[#00F2FE]/30 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00F2FE] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#4FACFE] mb-4">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-[#00F2FE] mt-0.5">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress bar & Early Access CTA */}
                <div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                      <span>Development Readiness</span>
                      <span className="text-white font-semibold">{service.progress}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] rounded-full"
                        style={{ width: service.progress }}
                      />
                    </div>
                  </div>

                  <a
                    href="#waitlist"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00F2FE]/30 transition-all cursor-pointer"
                  >
                    <span>Request Priority Whitelist</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00F2FE]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modular Ecosystem Callout */}
        <div className="mt-12 rounded-2xl bg-[#0E1424]/60 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE] shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Have a proprietary workflow you need autonomously automated?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                We build dedicated, private fine-tuned model agents for early access enterprise partners.
              </p>
            </div>
          </div>

          <a
            href="#waitlist"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#070A11] bg-white hover:bg-slate-200 transition-colors shadow-md"
          >
            Inquire for Enterprise Agent
          </a>
        </div>
      </div>
    </section>
  );
}
