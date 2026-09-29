"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquare, PhoneCall } from "lucide-react";
import { faqData, siteConfig, getWhatsAppUrl } from "@/config/site";

export function CleanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-b border-[#E8EAED]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Pill Badge and Editorial Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="pill-badge mb-3">FAQ</span>
          <h2 className="editorial-h2 text-3xl sm:text-4xl lg:text-[42px] text-[#121316] font-normal tracking-tight">
            Questions? Glad you asked
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-3 font-normal">
            Tap any question below to see upfront answers about pricing, loading labour, and booking.
          </p>
        </div>

        {/* Tap-to-open Interactive Accordion matching previous style with reference design tokens */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const numberFormatted = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#FF4D24] bg-[#FFF1EE]/25 shadow-xs"
                    : "border-[#E8EAED] bg-[#F4F5F6] hover:border-[#CBD1CC]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-mono font-semibold flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#FF4D24] text-white"
                          : "bg-white text-[#5E6470] border border-[#E8EAED]"
                      }`}
                    >
                      {numberFormatted}
                    </span>
                    <span className="font-medium text-sm sm:text-base text-[#121316] leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#FF4D24] text-white rotate-180"
                        : "bg-white text-[#5E6470] border border-[#E8EAED]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5E6470] leading-relaxed border-t border-[#E8EAED]/70 animate-in fade-in duration-200 pl-16">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4F5F6] border border-[#E8EAED] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-medium text-[#121316]">
              Still have a specific question about your move?
            </h4>
            <p className="text-xs text-[#5E6470] mt-0.5 font-normal">
              Talk directly with our local Dehradun coordinator.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-4 py-2 rounded-full bg-white text-[#121316] font-medium text-xs border border-[#E8EAED] hover:bg-[#FAFBFB] transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#14552D]" />
              <span>Call Team</span>
            </a>

            <a
              href={getWhatsAppUrl({ service: "Question from Website FAQ" })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#121316] hover:bg-[#24262E] text-white font-medium text-xs transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
