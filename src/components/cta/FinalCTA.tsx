"use client";

import React from "react";
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

interface FinalCTAProps {
  onOpenQuoteModal?: () => void;
}

export function FinalCTA({ onOpenQuoteModal }: FinalCTAProps) {
  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      const el = document.getElementById("quote-widget");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#14552D] via-[#0E3D20] to-[#082613] text-white relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#FFF8EB] text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
          <Sparkles className="w-3.5 h-3.5 text-[#D98A00]" />
          <span>Quickest Shifting In Dehradun</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
          Ready to Move?
        </h2>

        <p className="text-base sm:text-xl text-emerald-100/90 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Tell us what you need to transport. We&apos;ll help you get started with an upfront quotation, dedicated vehicle, and trained local team.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={handleQuoteClick}
            className="h-[52px] px-8 rounded-xl bg-[#D98A00] hover:bg-[#BF7800] text-white font-bold text-base shadow-lg transition-all flex items-center gap-2 transform active:scale-95 cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[52px] px-7 rounded-xl bg-white hover:bg-[#F7F8F6] text-[#17201B] font-bold text-base transition-all flex items-center gap-2.5 shadow-md"
          >
            <MessageSquare className="w-5 h-5 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="h-[52px] px-6 rounded-xl bg-white/15 hover:bg-white/20 text-white font-bold text-base border border-white/25 transition-all flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-emerald-300" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Micro Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-emerald-200/90 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D98A00]" />
            No advance deposit required for quotation
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D98A00]" />
            GST Verified Tax Invoices
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D98A00]" />
            Dehradun-based dedicated fleet
          </span>
        </div>
      </div>
    </section>
  );
}
