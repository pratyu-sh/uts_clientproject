"use client";

import React, { useState } from "react";
import {
  Boxes,
  Armchair,
  Home,
  Building,
  Briefcase,
  Truck,
  ArrowRight,
  Check,
  MessageSquare,
  Phone,
  ShieldCheck,
  Scale,
  Ruler,
  Users,
  MapPin,
  Sparkles,
  PackageCheck,
  Info,
} from "lucide-react";
import { requirementFinderOptions, getWhatsAppUrl, siteConfig } from "@/config/site";
import { RequirementFinderItem, ServiceType } from "@/types";

interface VehicleFinderProps {
  onSelectRequirement?: (item: RequirementFinderItem) => void;
  onOpenQuoteModal?: (service?: ServiceType) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Boxes,
  Armchair,
  Home,
  Building,
  Briefcase,
  Truck,
};

export function VehicleFinder({ onSelectRequirement, onOpenQuoteModal }: VehicleFinderProps) {
  const [selectedId, setSelectedId] = useState<string>("boxes");

  const currentItem =
    requirementFinderOptions.find((opt) => opt.id === selectedId) ||
    requirementFinderOptions[0];

  const handleSelect = (option: RequirementFinderItem) => {
    setSelectedId(option.id);
    if (onSelectRequirement) {
      onSelectRequirement(option);
    }
  };

  const whatsAppUrl = getWhatsAppUrl({
    service: currentItem.title,
    loadType: `${currentItem.title} (${currentItem.vehicleRecommendation})`,
  });

  return (
    <section id="vehicle-finder" className="py-20 sm:py-24 bg-[#F4F5F6] border-t border-[#E8EAED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8EAED] text-xs font-semibold text-[#121316] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4D24]" />
            <span>Smart Vehicle Sizing</span>
          </div>
          <h2 className="editorial-h2 text-3xl sm:text-4xl lg:text-[42px] text-[#121316] font-normal tracking-tight">
            Not Sure Which Vehicle You Need?
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-3 font-normal max-w-2xl mx-auto">
            Select what you&apos;re moving. We&apos;ll help you choose the appropriate transportation option without overpaying or booking excess capacity.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {requirementFinderOptions.map((option) => {
            const IconComponent = iconMap[option.iconName] || Boxes;
            const isSelected = option.id === selectedId;

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option)}
                className={`relative flex flex-col items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-center group ${
                  isSelected
                    ? "bg-white border-[#FF4D24] shadow-[0_6px_20px_rgba(255,77,36,0.12)] -translate-y-1"
                    : "bg-white/80 hover:bg-white border-[#E8EAED] hover:border-[#CBD1CC] shadow-xs"
                }`}
              >
                {/* Active Indicator Top Pill */}
                {isSelected && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#FF4D24] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide uppercase">
                    Selected
                  </span>
                )}

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2.5 transition-colors duration-200 ${
                    isSelected
                      ? "bg-[#FF4D24] text-white"
                      : "bg-[#F4F5F6] group-hover:bg-[#FFF1EE] text-[#5E6470] group-hover:text-[#FF4D24]"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="w-full">
                  <span
                    className={`block text-xs sm:text-sm font-semibold leading-tight mb-1 transition-colors ${
                      isSelected ? "text-[#121316]" : "text-[#3A3F47] group-hover:text-[#121316]"
                    }`}
                  >
                    {option.title}
                  </span>
                  <span className="block text-[11px] text-[#8E95A3] line-clamp-1">
                    {option.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Recommendation Showcase Card */}
        <div className="bg-white rounded-[28px] border border-[#E8EAED] shadow-[0_12px_36px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Card Top Bar */}
          <div className="px-6 sm:px-10 py-5 bg-[#FAFAFA] border-b border-[#E8EAED] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16803C] animate-pulse" />
              <span className="text-xs font-semibold text-[#121316] uppercase tracking-wider">
                Recommended Fleet Match for: <span className="text-[#FF4D24]">{currentItem.title}</span>
              </span>
            </div>

            {currentItem.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1EE] text-[#FF4D24] border border-[#FFD9CF] text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#FF4D24]" />
                {currentItem.badge}
              </span>
            )}
          </div>

          {/* Main Card Content */}
          <div className="p-6 sm:p-10">
            {/* Vehicle Title & Capacity Summary */}
            <div className="max-w-3xl mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-[#121316] mb-2.5 tracking-tight">
                {currentItem.vehicleRecommendation}
              </h3>
              <p className="text-sm sm:text-base text-[#5E6470] leading-relaxed">
                <span className="font-semibold text-[#121316]">Typical Capacity: </span>
                {currentItem.idealFor}
              </p>
            </div>

            {/* 4-Pillar Vehicle Specification Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {/* Metric 1: Payload Capacity */}
              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E8EAED] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-medium text-[#8E95A3] uppercase tracking-wider">
                    Payload Limit
                  </span>
                  <Scale className="w-4 h-4 text-[#FF4D24]" />
                </div>
                <div>
                  <span className="text-base sm:text-lg font-semibold text-[#121316] block">
                    {currentItem.payloadCapacity || "Up to 1,000 kg"}
                  </span>
                  <span className="text-[11px] text-[#5E6470]">Safe certified weight</span>
                </div>
              </div>

              {/* Metric 2: Cargo Bed Dimensions */}
              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E8EAED] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-medium text-[#8E95A3] uppercase tracking-wider">
                    Cargo Space
                  </span>
                  <Ruler className="w-4 h-4 text-[#FF4D24]" />
                </div>
                <div>
                  <span className="text-base sm:text-lg font-semibold text-[#121316] block truncate">
                    {currentItem.deckDimensions || "Standard Fleet Bed"}
                  </span>
                  <span className="text-[11px] text-[#5E6470]">Usable cargo length</span>
                </div>
              </div>

              {/* Metric 3: Loading Team */}
              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E8EAED] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-medium text-[#8E95A3] uppercase tracking-wider">
                    Assigned Crew
                  </span>
                  <Users className="w-4 h-4 text-[#FF4D24]" />
                </div>
                <div>
                  <span className="text-base sm:text-lg font-semibold text-[#121316] block truncate">
                    {currentItem.crewRecommendation || "1 Driver + Helpers"}
                  </span>
                  <span className="text-[11px] text-[#5E6470]">Trained handling crew</span>
                </div>
              </div>

              {/* Metric 4: Route Match */}
              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E8EAED] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-medium text-[#8E95A3] uppercase tracking-wider">
                    Route Fit
                  </span>
                  <MapPin className="w-4 h-4 text-[#FF4D24]" />
                </div>
                <div>
                  <span className="text-base sm:text-lg font-semibold text-[#121316] block truncate">
                    Dehradun Ready
                  </span>
                  <span className="text-[11px] text-[#5E6470] truncate block">
                    {currentItem.routeSuitability || "City & Outstation"}
                  </span>
                </div>
              </div>
            </div>

            {/* Split Details & Fast Action Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              {/* Left Column (7 cols): Load Items & Inclusions */}
              <div className="lg:col-span-7 space-y-6">
                {/* What Typically Fits */}
                {currentItem.typicalItems && currentItem.typicalItems.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#121316] mb-3 flex items-center gap-2">
                      <PackageCheck className="w-4 h-4 text-[#16803C]" />
                      <span>What Comfortably Fits Inside:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentItem.typicalItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F5F6]/80 border border-[#E8EAED] text-xs font-normal text-[#121316]"
                        >
                          <Check className="w-3.5 h-3.5 text-[#16803C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Moving Features */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#121316] mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FF4D24]" />
                    <span>Included Standards & Transit Protection:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {currentItem.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#E8EAED] shadow-xs text-xs font-medium text-[#121316]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D24] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 text-xs text-[#8E95A3] italic">
                  <Info className="w-4 h-4 shrink-0 text-[#8E95A3] mt-0.5" />
                  <span>
                    Exact vehicle assignment may adjust based on narrow colony gate clearance, hill road curves, or elevator/staircase floor levels.
                  </span>
                </div>
              </div>

              {/* Right Column (5 cols): High-Converting Action Card */}
              <div className="lg:col-span-5 bg-[#F8F9FA] p-6 sm:p-7 rounded-2xl border border-[#E8EAED] flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8EAED] mb-4">
                    <span className="text-xs font-semibold text-[#8E95A3] uppercase tracking-wider">
                      Selected Move Profile
                    </span>
                    <span className="text-xs font-medium text-[#16803C] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full">
                      Immediate Booking
                    </span>
                  </div>

                  <h4 className="text-xl font-medium text-[#121316] mb-1">
                    {currentItem.title}
                  </h4>
                  <p className="text-xs text-[#5E6470] mb-4">
                    {currentItem.vehicleRecommendation}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E8EAED] mb-6 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#5E6470]">Pricing Model:</span>
                      <span className="font-semibold text-[#121316]">Fixed & Transparent</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#5E6470]">Hill Surcharges:</span>
                      <span className="font-semibold text-[#16803C]">Zero Hidden Charges</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#5E6470]">Driver Support:</span>
                      <span className="font-semibold text-[#121316]">Local Hill Specialist</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      if (onOpenQuoteModal) {
                        onOpenQuoteModal(currentItem.serviceType || "household");
                      }
                    }}
                    className="w-full py-3.5 px-5 rounded-full bg-[#FF4D24] hover:bg-[#E03D16] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs group cursor-pointer"
                  >
                    <span>{currentItem.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 rounded-full bg-[#121316] hover:bg-[#24262E] text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>Talk to Fleet Expert on WhatsApp</span>
                  </a>

                  <div className="pt-2 text-center">
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#5E6470] hover:text-[#121316] font-medium transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FF4D24]" />
                      <span>Prefer to call? {siteConfig.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
