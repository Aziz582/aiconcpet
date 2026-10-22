"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Menu, X, Sparkles, ArrowRight, ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070A11]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0E1424] to-[#141C33] border border-white/10 group-hover:border-[#00F2FE]/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.15)] group-hover:shadow-[0_0_25px_rgba(0,242,254,0.35)]">
              <Cpu className="w-5 h-5 text-[#00F2FE] transition-transform duration-300 group-hover:scale-110" />
              <span className={`absolute -top-1 ${isRTL ? "-left-1" : "-right-1"} flex h-2.5 w-2.5`}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F2FE]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                AI Concept
                <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded-full bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20">
                  {t.nav.version}
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide -mt-0.5">
                aiconcpet.com
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("platform")}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 hover:cursor-pointer font-medium"
            >
              {t.nav.platform}
            </button>
            <button
              onClick={() => scrollTo("capabilities")}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 hover:cursor-pointer font-medium"
            >
              {t.nav.capabilities}
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 hover:cursor-pointer flex items-center gap-1.5 font-medium"
            >
              <span>{t.nav.services}</span>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded-md bg-[#4FACFE]/15 text-[#4FACFE] border border-[#4FACFE]/25">
                {t.nav.roadmapBadge}
              </span>
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="text-sm text-slate-300 hover:text-white transition-colors duration-200 hover:cursor-pointer font-medium"
            >
              {t.nav.about}
            </button>
          </nav>

          {/* Right CTA & Language Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#0E1424] hover:bg-[#141C33] text-slate-200 border border-white/10 hover:border-[#00F2FE]/40 transition-all cursor-pointer"
              title={language === "en" ? "تبديل إلى العربية" : "Switch to English"}
            >
              <Globe className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Early Access CTA */}
            <button
              onClick={() => scrollTo("waitlist")}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#070A11] bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <Sparkles className="w-4 h-4 text-[#070A11] transition-transform group-hover:rotate-12" />
              <span>{t.nav.earlyAccess}</span>
              <ArrowIcon className={`w-3.5 h-3.5 text-[#070A11] transition-transform ${isRTL ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`} />
            </button>
          </div>

          {/* Mobile Menu & Language Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg bg-[#0E1424] border border-white/10 text-xs font-semibold text-[#00F2FE] flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              <span>{language === "en" ? "عربي" : "EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0E1424] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070A11]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollTo("platform")}
              className={`text-base font-medium text-slate-200 hover:text-[#00F2FE] py-2 transition-colors ${isRTL ? "text-right" : "text-left"}`}
            >
              {t.nav.platform}
            </button>
            <button
              onClick={() => scrollTo("capabilities")}
              className={`text-base font-medium text-slate-200 hover:text-[#00F2FE] py-2 transition-colors ${isRTL ? "text-right" : "text-left"}`}
            >
              {t.nav.capabilities}
            </button>
            <button
              onClick={() => scrollTo("services")}
              className={`text-base font-medium text-slate-200 hover:text-[#00F2FE] py-2 transition-colors flex items-center justify-between`}
            >
              <span>{t.nav.services}</span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#4FACFE]/20 text-[#4FACFE]">
                {t.nav.roadmapBadge}
              </span>
            </button>
            <button
              onClick={() => scrollTo("about")}
              className={`text-base font-medium text-slate-200 hover:text-[#00F2FE] py-2 transition-colors ${isRTL ? "text-right" : "text-left"}`}
            >
              {t.nav.about}
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs bg-white/5 border border-white/10 text-slate-200"
            >
              <Globe className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>{language === "en" ? "تغيير اللغة إلى العربية" : "Switch language to English"}</span>
            </button>

            <button
              onClick={() => scrollTo("waitlist")}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#070A11] bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] shadow-[0_0_25px_rgba(0,242,254,0.4)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.nav.earlyAccess}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
