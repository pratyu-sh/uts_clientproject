"use client";

import React from "react";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

interface ContainerCTAProps {
  onOpenQuoteModal?: () => void;
}

export function ContainerCTA({ onOpenQuoteModal }: ContainerCTAProps) {
  return (
    <div className="w-full px-3 sm:px-5 lg:px-6 py-12 sm:py-16 bg-[#F4F5F6]">
      <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[300px] sm:min-h-[340px] flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 shadow-xl border border-black/10 bg-[#121316]">
        {/* Background Corrugated Container Graphic */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent z-10" />

          {/* Red/Orange Container Face */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-2/3 bg-[#E03A14] flex items-center justify-end overflow-hidden">
            <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,#000000_0px,#000000_12px,transparent_12px,transparent_36px)]" />
            <span className="font-extrabold text-[100px] sm:text-[160px] text-white/90 tracking-tighter select-none mr-8 block leading-none">
              uts<span className="text-white/40">.</span>
            </span>
          </div>
        </div>

        {/* Left Side Content matching PRD Section 20 */}
        <div className="relative z-20 max-w-lg mb-8 md:mb-0">
          <span className="px-3.5 py-1 rounded-full bg-[#FF4D24] text-white text-[11px] font-medium tracking-wide uppercase inline-block mb-4 shadow-sm">
            Ready to Move?
          </span>
          <h2 className="editorial-h2 text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Ready to Move?
          </h2>
          <p className="text-sm sm:text-base text-white/80 mt-2 font-normal leading-relaxed">
            Tell us what you need to transport. We&apos;ll help you get started with transparent pricing, dedicated vehicle dispatch, and trained local loaders.
          </p>
        </div>

        {/* Right Side Action Buttons matching PRD Section 20 */}
        <div className="relative z-20 flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="group flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FF4D24] hover:bg-[#E23A12] text-white font-medium text-sm shadow-xl transition-all cursor-pointer transform active:scale-95"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-sm transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm transition-all flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#FF4D24]" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
