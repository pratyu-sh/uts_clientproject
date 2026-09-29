"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/config/site";

export function TestimonialNetwork() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonialsData[activeIndex] || testimonialsData[0];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#F4F5F6] border-b border-[#E8EAED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Pill Badge and Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill-badge mb-3">Testimonials</span>
          <h2 className="editorial-h2 text-3xl sm:text-4xl lg:text-[42px] text-[#121316] font-normal tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-3 font-normal">
            Read verified experiences from families, doctors, defense personnel, and businesses across Dehradun.
          </p>
        </div>

        {/* Interactive Dot-Matrix Map Network with Avatar Bubbles matching reference */}
        <div className="relative w-full rounded-3xl bg-white p-8 sm:p-14 border border-[#E8EAED] shadow-sm overflow-hidden flex flex-col items-center justify-center min-h-[460px]">
          {/* Subtle Dot-Matrix Background representing network coordinates */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#5E6470_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

          {/* Floating avatar pins distributed around the matrix */}
          <div className="absolute top-10 left-10 hidden lg:flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white border border-[#E8EAED] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#FF4D24] text-white flex items-center justify-center font-bold text-xs">
              RV
            </div>
            <div className="text-left">
              <span className="text-[11px] font-medium text-[#121316] block leading-none">Col. Verma</span>
              <span className="text-[9px] text-[#8E95A3]">Dalanwala</span>
            </div>
          </div>

          <div className="absolute bottom-12 left-14 hidden lg:flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white border border-[#E8EAED] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#14552D] text-white flex items-center justify-center font-bold text-xs">
              AJ
            </div>
            <div className="text-left">
              <span className="text-[11px] font-medium text-[#121316] block leading-none">Dr. Joshi</span>
              <span className="text-[9px] text-[#8E95A3]">Rajpur Rd</span>
            </div>
          </div>

          <div className="absolute top-12 right-12 hidden lg:flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white border border-[#E8EAED] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#064A91] text-white flex items-center justify-center font-bold text-xs">
              VN
            </div>
            <div className="text-left">
              <span className="text-[11px] font-medium text-[#121316] block leading-none">V. Negi</span>
              <span className="text-[9px] text-[#8E95A3]">IT Park</span>
            </div>
          </div>

          <div className="absolute bottom-14 right-16 hidden lg:flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white border border-[#E8EAED] shadow-xs">
            <div className="w-8 h-8 rounded-full bg-[#FF4D24] text-white flex items-center justify-center font-bold text-xs">
              PS
            </div>
            <div className="text-left">
              <span className="text-[11px] font-medium text-[#121316] block leading-none">P. Sharma</span>
              <span className="text-[9px] text-[#8E95A3]">Prem Nagar</span>
            </div>
          </div>

          {/* Central Floating Quote Card matching reference */}
          <div className="relative z-10 max-w-xl text-center flex flex-col items-center">
            {/* Avatar with orange ring */}
            <div className="w-16 h-16 rounded-full bg-[#F4F5F6] border-2 border-[#FF4D24] p-1 shadow-md mb-6 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#121316] text-white flex items-center justify-center font-bold text-sm">
                {current.name.slice(0, 2).toUpperCase()}
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 text-[#FF4D24] mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF4D24]" />
              ))}
            </div>

            {/* Quote Body in Clean Plus Jakarta Sans Typography */}
            <p className="text-base sm:text-lg text-[#121316] font-normal leading-relaxed mb-6 italic">
              &ldquo;{current.review}&rdquo;
            </p>

            {/* Name & Route */}
            <h4 className="text-sm font-semibold text-[#121316]">
              {current.name}
            </h4>
            <span className="text-xs text-[#5E6470] mt-0.5">
              {current.service} • {current.route}
            </span>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-full border border-[#E8EAED] bg-[#F4F5F6] hover:bg-white text-[#121316] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#8E95A3] font-mono">
                0{activeIndex + 1} / 0{testimonialsData.length}
              </span>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-full border border-[#E8EAED] bg-[#F4F5F6] hover:bg-white text-[#121316] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Partners & Verifications Bar underneath matching reference */}
        <div className="mt-14 pt-8 border-t border-[#E8EAED] flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-[#8E95A3] uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#FF4D24]" />
            GST VERIFIED #05AAACU1234F1Z5
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#14552D]" />
            ESTABLISHED 2010
          </span>
          <span>TRANSPORT NAGAR DEHRADUN</span>
          <span>GOOGLE REVIEWS 4.8★</span>
          <span>UTTARAKHAND COMMERCIAL PERMIT</span>
        </div>
      </div>
    </section>
  );
}
