"use client";

import React, { useState } from "react";
import { ArrowRight, Play, ChevronDown, PhoneCall, MessageSquare, Check } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "Why UTS", href: "#why-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Vehicle Finder", href: "#vehicle-finder" },
    { label: "Areas", href: "#service-areas" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="w-full px-3 sm:px-5 lg:px-6 pt-3 sm:pt-4">
      {/* Outer Framed Hero Container matching reference image */}
      <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between p-6 sm:p-8 lg:p-12 shadow-2xl border border-black/10 bg-[#121316]">
        {/* Container Background Graphic with Texture & Warm Lighting */}
        <div className="absolute inset-0 z-0">
          {/* Gradients for high contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/40 z-10" />

          {/* Realistic Corrugated Container Rendering */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/4 bg-[#E03A14] flex items-center justify-center overflow-hidden">
            {/* Corrugated vertical steel ribs */}
            <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,#000000_0px,#000000_12px,transparent_12px,transparent_36px)]" />

            {/* Industrial Stencil Typography "uts" on container face */}
            <div className="relative z-1 select-none pointer-events-none transform translate-x-12 lg:translate-x-20">
              <span className="font-extrabold text-[120px] sm:text-[180px] lg:text-[240px] text-white/90 tracking-tighter block leading-none drop-shadow-lg">
                uts<span className="text-white/40">.</span>
              </span>
              <div className="flex items-center gap-6 mt-2 text-white/70 font-mono text-xs sm:text-sm tracking-widest uppercase">
                <span>ESTD 2010</span>
                <span>•</span>
                <span>GST: {siteConfig.gstNumber}</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">DEHRADUN FLEET #5302987</span>
              </div>
            </div>

            {/* Vertical Container ID stencil marking on right edge */}
            <div className="absolute right-6 top-1/4 bottom-1/4 flex flex-col justify-between text-white/50 font-mono text-xs tracking-widest uppercase select-none border-l border-white/20 pl-3 hidden sm:flex">
              <span>5</span>
              <span>3</span>
              <span>0</span>
              <span>2</span>
              <span>9</span>
              <span>8</span>
              <span>7</span>
            </div>
          </div>
        </div>

        {/* 1. Floating Pill Header (Navbar) inside the framed Hero */}
        <header className="relative z-20 w-full flex items-center justify-between gap-4">
          {/* Logo on Left in Crisp White */}
          <Logo variant="light" size="md" />

          {/* Center Glassmorphic Floating Pill Navigation */}
          <nav className="hidden lg:flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1.5 shadow-lg">
            {navLinks.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                    isActive
                      ? "bg-white/20 text-white shadow-xs"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-3 h-3 opacity-70" />}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Pill Button in Fiery Container Orange */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white px-3 py-2 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF4D24]" />
              <span>{siteConfig.phone}</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="group flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-[#FF4D24] hover:bg-[#E23A12] text-white font-medium text-xs sm:text-sm shadow-lg hover:shadow-orange-500/20 transition-all cursor-pointer transform active:scale-95"
            >
              <span>Get a Free Quote</span>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </div>
        </header>

        {/* 2. Main Hero Content & Secondary Actions */}
        <div className="relative z-20 max-w-2xl my-auto pt-14 pb-8">
          {/* Eyebrow badge matching PRD */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF4D24] animate-pulse" />
            <span>{siteConfig.tagline}</span>
          </div>

          {/* PRD Main Headline: Move Anything. Anywhere. Without the Stress. */}
          <h1 className="editorial-display text-4xl sm:text-5xl lg:text-[60px] text-white font-normal leading-[1.12] mb-6">
            Move Anything. Anywhere.{" "}
            <span className="text-[#FF4D24] font-medium">Without the Stress.</span>
          </h1>

          {/* PRD Description */}
          <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-xl">
            {siteConfig.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-full bg-[#FF4D24] hover:bg-[#E23A12] text-white font-medium text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-medium transition-all sm:hidden flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF4D24]" />
              <span>Call Team</span>
            </a>
          </div>

          {/* Trust Row matching PRD Section 09 */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/80 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#25D366] stroke-[3]" />
              Since {siteConfig.since}
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#25D366] stroke-[3]" />
              GST Verified Business
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#25D366] stroke-[3]" />
              Dehradun Local Fleet
            </span>
          </div>
        </div>

        {/* 3. Floating Video / Operational Preview Card (Bottom Right of framed hero) */}
        <div className="relative z-20 self-end mt-4">
          <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 text-white shadow-xl max-w-xs sm:max-w-sm">
            <div>
              <span className="text-[11px] font-mono text-white/60 block mb-1">
                01<span className="text-white/30">/03</span>
              </span>
              <h4 className="text-sm font-medium text-white leading-snug">
                See UTS In Action
              </h4>
              <p className="text-[11px] text-white/70 mt-0.5">
                Live packing &amp; tempo dispatch at Transport Nagar
              </p>
            </div>

            {/* Video preview thumbnail with play button */}
            <button
              onClick={onOpenQuoteModal}
              className="relative w-16 h-14 rounded-xl overflow-hidden bg-[#24262E] flex items-center justify-center shrink-0 group border border-white/20 cursor-pointer"
              aria-label="See UTS moving process"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4D24]/60 to-black/60" />
              <div className="w-8 h-8 rounded-full bg-white text-[#FF4D24] flex items-center justify-center shadow-md transition-transform group-hover:scale-110 relative z-10">
                <Play className="w-3.5 h-3.5 fill-[#FF4D24] ml-0.5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
