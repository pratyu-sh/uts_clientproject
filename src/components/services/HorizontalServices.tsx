"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Home, PackageCheck, Building2, Truck, Bike, Clock } from "lucide-react";
import { ServiceType } from "@/types";

interface HorizontalServicesProps {
  onSelectService: (service: ServiceType) => void;
}

export function HorizontalServices({ onSelectService }: HorizontalServicesProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      id: "household" as ServiceType,
      title: "Household Shifting",
      category: "Home & Apartment",
      description: "Move furniture, appliances, boxes and household belongings safely.",
      ctaText: "Get Household Quote →",
      icon: Home,
      tag: "Most Popular",
      image: "/images/services/household.jpg",
    },
    {
      id: "packers-movers" as ServiceType,
      title: "Packers & Movers",
      category: "Full Packing Care",
      description: "Complete packing with bubble wrap, corrugated sheets and careful loading.",
      ctaText: "Plan My Move →",
      icon: PackageCheck,
      tag: "Complete Care",
      image: "/images/services/packers-movers.jpg",
    },
    {
      id: "office" as ServiceType,
      title: "Office Shifting",
      category: "Corporate Relocation",
      description: "Move office furniture, equipment and supplies with minimal work downtime.",
      ctaText: "Get Office Quote →",
      icon: Building2,
      tag: "Minimal Downtime",
      image: "/images/services/office.jpg",
    },
    {
      id: "goods" as ServiceType,
      title: "Goods Transportation",
      category: "Personal & Commercial",
      description: "Transport personal consignments, retail inventory and commercial goods.",
      ctaText: "Book Transportation →",
      icon: Truck,
      tag: "Dependable",
      image: "/images/services/goods.jpg",
    },
    {
      id: "vehicle" as ServiceType,
      title: "Vehicle Transportation",
      category: "Two-Wheeler & Bike",
      description: "Dedicated safe shifting for eligible two-wheelers, scooters and bikes.",
      ctaText: "Get a Quote →",
      icon: Bike,
      tag: "Safe Transit",
      image: "/images/services/vehicle.jpg",
    },
    {
      id: "local-tempo" as ServiceType,
      title: "Local Tempo Service",
      category: "Point-to-Point City",
      description: "Tata Ace (Chota Hathi) & Bolero tempo for local Dehradun shifting.",
      ctaText: "Book a Tempo →",
      icon: Clock,
      tag: "Quick Dispatch",
      image: "/images/services/local-tempo.jpg",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-white border-y border-[#E8EAED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Pill Badge and Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill-badge mb-3">Services</span>
          <h2 className="editorial-h2 text-3xl sm:text-4xl lg:text-[42px] text-[#121316] font-normal tracking-tight">
            Everything You Need to Move
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-3">
            From single-item student tempo shifts to full family household relocations and commercial deliveries across Dehradun and Uttarakhand.
          </p>
        </div>

        {/* 6 Services Grid in Responsive 3-Column / 2-Row Layout matching reference card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectService(item.id)}
                className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-7 border border-[#E8EAED]"
              >
                {/* Real Photographic Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={item.id === "household"}
                  />
                  {/* High contrast gradient overlays matching reference image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30 z-10 transition-opacity group-hover:opacity-90" />
                </div>

                {/* Top Category Badge */}
                <div className="relative z-20 flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-medium tracking-wide shadow-xs">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#FF4D24] group-hover:border-[#FF4D24] transition-colors shadow-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content & Title */}
                <div className="relative z-20">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-3 shadow-xs">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <span className="text-xs font-normal text-white/70 block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-xl font-medium text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2 mb-4 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(item.id);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF4D24] group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{item.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicator controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-[#E8EAED] bg-[#F4F5F6] hover:bg-white text-[#121316] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            aria-label="Previous service"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F5F6] border border-[#E8EAED]">
            {services.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSlide === idx ? "w-5 bg-[#FF4D24]" : "bg-[#CBD1CC]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-[#E8EAED] bg-[#F4F5F6] hover:bg-white text-[#121316] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            aria-label="Next service"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
