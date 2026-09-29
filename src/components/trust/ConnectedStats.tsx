"use client";

import React from "react";
import { Truck, Star, Smile, Warehouse, ShieldCheck, Calendar, MapPin, Headphones } from "lucide-react";

export function ConnectedStats() {
  const stats = [
    {
      icon: Truck,
      value: "32k+",
      label: "Deliveries Completed",
      subtext: "Safe intra-city & hill routes",
    },
    {
      icon: Star,
      value: "2.8k+",
      label: "Verified Reviews",
      subtext: "4.8★ Google Customer Rating",
    },
    {
      icon: Smile,
      value: "1245+",
      label: "Happy Families",
      subtext: "Homes & apartments shifted",
    },
    {
      icon: Warehouse,
      value: "5875+",
      label: "Total Fleet Trips",
      subtext: "Tata Ace & Bolero network",
    },
  ];

  const trustPillars = [
    {
      title: "SINCE 2010",
      subtitle: "15+ Years Local Experience",
      desc: "Deep knowledge of Dehradun routes, hill roads & narrow lanes.",
      icon: Calendar,
    },
    {
      title: "GST VERIFIED",
      subtitle: "Authorized Transporter",
      desc: "Official tax invoices & transit documentation for every move.",
      icon: ShieldCheck,
    },
    {
      title: "LOCAL TEAM",
      subtitle: "Dehradun Residents",
      desc: "Trained in-house crew who take personal care of your belongings.",
      icon: MapPin,
    },
    {
      title: "DIRECT SUPPORT",
      subtitle: "Direct Phone & WhatsApp",
      desc: "Talk directly with our local coordinator without call center delays.",
      icon: Headphones,
    },
  ];

  return (
    <section id="stats" className="py-20 sm:py-24 bg-[#F4F5F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Pill Badge and Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill-badge mb-3">Stats &amp; Verification</span>
          <h2 className="editorial-h2 text-3xl sm:text-4xl lg:text-[42px] text-[#121316] font-normal tracking-tight">
            Tailored solutions for your business requirements
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-3">
            Dehradun&apos;s reliable local transport partner with verified business credentials and transparent service.
          </p>
        </div>

        {/* Connected Node Tree Structure matching reference image */}
        <div className="relative mt-4">
          {/* Top Horizontal Connecting Line with Branching Vertical Stems */}
          <div className="hidden md:block relative w-full h-12 mb-6">
            {/* Main horizontal bus line connecting node 1 through node 4 */}
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-[#D6D9DE]" />

            {/* 4 Vertical drop connector stems */}
            <div className="absolute top-0 left-[12.5%] w-px h-12 bg-[#D6D9DE]" />
            <div className="absolute top-0 left-[37.5%] w-px h-12 bg-[#D6D9DE]" />
            <div className="absolute top-0 left-[62.5%] w-px h-12 bg-[#D6D9DE]" />
            <div className="absolute top-0 left-[87.5%] w-px h-12 bg-[#D6D9DE]" />
          </div>

          {/* 4 Nodes Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center group">
                  {/* Circular Orange Node Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF4D24] text-white flex items-center justify-center shadow-lg shadow-orange-500/15 mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                  </div>

                  {/* Big Clean Metric Numeral in Plus Jakarta Sans */}
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#121316] tracking-tight block mb-1">
                    {stat.value}
                  </span>

                  {/* Label */}
                  <span className="text-xs sm:text-sm font-medium text-[#121316]">
                    {stat.label}
                  </span>

                  <span className="text-[11px] text-[#8E95A3] mt-0.5 hidden sm:block">
                    {stat.subtext}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Trust Pillars Cards matching PRD Section 04 / Section 11 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-[#E8EAED]">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E8EAED] shadow-2xs hover:border-[#FF4D24]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF1EE] text-[#FF4D24] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#FF4D24] uppercase block">
                  {pillar.title}
                </span>
                <h4 className="text-sm font-semibold text-[#121316] mt-0.5">
                  {pillar.subtitle}
                </h4>
                <p className="text-xs text-[#5E6470] mt-1.5 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
