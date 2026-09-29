"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, PhoneCall } from "lucide-react";
import { faqData, siteConfig, getWhatsAppUrl } from "@/config/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-[#E4E7E3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF8EB] text-[#D98A00] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17201B] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-[#4F5A53]">
            Have questions about prices, loading assistance, or routes? Here are clear, upfront answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#D98A00] bg-[#FFF8EB]/20 shadow-xs"
                    : "border-[#E4E7E3] bg-[#F7F8F6] hover:border-[#CBD1CC]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#17201B]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#D98A00] text-white rotate-180"
                        : "bg-white text-[#4F5A53] border border-[#E4E7E3]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4F5A53] leading-relaxed border-t border-[#E4E7E3]/60 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EBF7EE] border border-[#14552D]/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#14552D]">
              Still have a specific question about your move?
            </h4>
            <p className="text-xs text-[#4F5A53] mt-0.5">
              Talk directly with our local coordinator. No automated waiting.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl bg-white text-[#17201B] font-semibold text-xs border border-[#E4E7E3] hover:bg-[#F7F8F6] transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#14552D]" />
              <span>Call Team</span>
            </a>

            <a
              href={getWhatsAppUrl({ service: "Question from Website FAQ" })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#14552D] hover:bg-[#0E3D20] text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
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
