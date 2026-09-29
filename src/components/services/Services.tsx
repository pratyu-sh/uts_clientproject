"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { servicesData, getWhatsAppUrl } from "@/config/site";
import { ServiceType } from "@/types";
import { ServiceCard } from "./ServiceCard";

interface ServicesProps {
  onSelectService: (serviceId: ServiceType) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-[#F7F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF7EE] text-[#14552D] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D98A00]" />
            <span>Tailored Shifting &amp; Logistics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#17201B] tracking-tight leading-tight mb-4">
            Everything You Need to Move
          </h2>

          <p className="text-base sm:text-lg text-[#4F5A53]">
            From single-room student tempo shifts to full family household relocations and office setups across Dehradun and Uttarakhand.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E4E7E3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-[#17201B]">
              Have a custom or mixed cargo load?
            </h4>
            <p className="text-xs sm:text-sm text-[#66716B]">
              Tell our team what you need transported and we&apos;ll configure the exact vehicle size.
            </p>
          </div>
          <a
            href={getWhatsAppUrl({ service: "Custom Transport Requirement" })}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#14552D] hover:bg-[#0E3D20] text-white font-semibold text-xs transition-colors flex items-center gap-2"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
