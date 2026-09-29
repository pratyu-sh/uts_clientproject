"use client";

import React from "react";
import { Phone, MessageSquare, FileSpreadsheet } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

interface MobileCTAProps {
  onOpenQuoteModal?: () => void;
}

export function MobileCTA({ onOpenQuoteModal }: MobileCTAProps) {
  const handleQuoteClick = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      const quoteEl = document.getElementById("quote-widget");
      if (quoteEl) {
        quoteEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E8EAED] p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_24px_rgba(18,19,22,0.08)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#F4F5F6] border border-[#E8EAED] text-[#121316] active:bg-[#EBF7EE] transition-colors"
          aria-label="Call Uttarakhand Tempo Services"
        >
          <Phone className="w-4 h-4 text-[#14552D] mb-1" />
          <span className="text-[11px] font-medium leading-none">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#EBF7EE] border border-[#14552D]/20 text-[#14552D] active:scale-95 transition-transform"
          aria-label="Chat with UTS on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366] mb-1" />
          <span className="text-[11px] font-medium leading-none">WhatsApp</span>
        </a>

        {/* Quote Button in Vivid Orange */}
        <button
          onClick={handleQuoteClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-[#FF4D24] text-white active:scale-95 transition-transform shadow-xs cursor-pointer"
          aria-label="Get a moving quotation"
        >
          <FileSpreadsheet className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-medium leading-none">Get Quote</span>
        </button>
      </div>
    </div>
  );
}
