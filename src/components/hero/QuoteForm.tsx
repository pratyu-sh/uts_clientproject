"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  MapPin,
  Calendar,
  Phone,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Check,
  Star,
} from "lucide-react";
import confetti from "canvas-confetti";
import { quoteFormSchema, QuoteFormData, ServiceType } from "@/types";
import { getWhatsAppUrl, siteConfig } from "@/config/site";

interface QuoteFormProps {
  defaultService?: ServiceType;
  className?: string;
  onSuccess?: () => void;
}

export function QuoteForm({
  defaultService = "household",
  className = "",
  onSuccess,
}: QuoteFormProps) {
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      pickupLocation: "",
      destination: "",
      service: defaultService,
      phone: "",
      movingDate: "",
      name: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setSubmittedData(data);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // Ignore if canvas is not ready
    }

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    reset();
  };

  if (submittedData) {
    const whatsAppFollowUpUrl = getWhatsAppUrl({
      service: submittedData.service,
      pickup: submittedData.pickupLocation,
      destination: submittedData.destination,
      loadType: submittedData.service,
    });

    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8EAED] shadow-xl text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="w-14 h-14 bg-[#FFF1EE] text-[#FF4D24] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#FF4D24]" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#EBF7EE] text-[#14552D] mb-2">
          Request Received
        </span>

        <h3 className="text-xl sm:text-2xl font-medium text-[#121316] mb-2 tracking-tight">
          Thank you! We&apos;re reviewing your quote.
        </h3>

        <p className="text-xs sm:text-sm text-[#5E6470] mb-6 max-w-sm mx-auto">
          Our local Dehradun coordinator will call you at{" "}
          <strong className="text-[#121316] font-semibold">{submittedData.phone}</strong> shortly with vehicle options and fair pricing.
        </p>

        <div className="p-4 rounded-2xl bg-[#F4F5F6] border border-[#E8EAED] text-left text-xs space-y-1.5 mb-6 max-w-md mx-auto">
          <div className="flex justify-between">
            <span className="text-[#8E95A3]">Pickup:</span>
            <span className="font-medium text-[#121316]">{submittedData.pickupLocation}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8E95A3]">Destination:</span>
            <span className="font-medium text-[#121316]">{submittedData.destination}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8E95A3]">Service:</span>
            <span className="font-medium text-[#FF4D24] capitalize">
              {submittedData.service.replace("-", " ")}
            </span>
          </div>
          {submittedData.movingDate && (
            <div className="flex justify-between">
              <span className="text-[#8E95A3]">Date:</span>
              <span className="font-medium text-[#121316]">{submittedData.movingDate}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <a
            href={whatsAppFollowUpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#121316] hover:bg-[#24262E] text-white text-xs sm:text-sm font-medium transition-all shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={handleReset}
            className="py-3 px-4 rounded-full border border-[#E8EAED] text-xs font-medium text-[#5E6470] hover:bg-[#F4F5F6] transition-colors cursor-pointer"
          >
            Submit Another Quote
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="quote-widget"
      className={`bg-white rounded-3xl overflow-hidden border border-[#E8EAED] shadow-2xl relative ${className}`}
    >
      {/* Landscape 2-Column Grid Layout: Image on Left (42%), Form on Right (58%) */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
        {/* Left Column: Image with Overlaid Trust Badges */}
        <div className="md:col-span-5 relative min-h-[220px] md:min-h-full overflow-hidden flex flex-col justify-between p-6 sm:p-7 text-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/quote-banner.jpg"
              alt="Uttarakhand Tempo Services Moving Team"
              fill
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay for high contrast readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40 z-10" />
          </div>

          {/* Top Pill Tag on Image */}
          <div className="relative z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white text-[11px] font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D24]" />
              UTS Packers &amp; Movers
            </span>
          </div>

          {/* Bottom Overlaid Copy & Trust Checks */}
          <div className="relative z-20 mt-auto pt-6">
            <h4 className="text-xl sm:text-2xl font-medium text-white mb-2 leading-snug">
              Move Anything. Anywhere.
            </h4>
            <p className="text-xs text-white/80 mb-4 font-normal">
              Dehradun local tempo dispatch &amp; household shifting with verified local crew.
            </p>

            {/* Trust Points */}
            <div className="space-y-1.5 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 stroke-[3]" />
                <span>Since {siteConfig.since} • 15+ Yrs Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 stroke-[3]" />
                <span>GST Verified Business</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 stroke-[3]" />
                <span>Zero Advance Deposit for Quote</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-1.5 text-[11px] text-white/80">
              <div className="flex text-[#FF4D24]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#FF4D24]" />
                ))}
              </div>
              <span>4.8★ (2.8k+ Dehradun Reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Quote Form Fields */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-5 border-b border-[#E8EAED] pb-3">
              <div>
                <span className="pill-badge text-[11px] mb-1">
                  Fast Free Estimate
                </span>
                <h3 className="text-xl font-medium text-[#121316] tracking-tight">
                  Get Your Instant Quote
                </h3>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-medium text-[#14552D] bg-[#EBF7EE] px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Obligation</span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-medium text-[#121316] mb-1">
                  Pickup Location <span className="text-[#FF4D24]">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#FF4D24] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="e.g. Rajpur Road, Jakhan, Prem Nagar"
                    {...register("pickupLocation")}
                    className={`uts-input w-full pl-10 text-xs sm:text-sm rounded-full ${
                      errors.pickupLocation ? "border-[#FF4D24] focus:border-[#FF4D24]" : ""
                    }`}
                  />
                </div>
                {errors.pickupLocation && (
                  <p className="text-[11px] text-[#FF4D24] mt-1 font-medium">
                    {errors.pickupLocation.message}
                  </p>
                )}
              </div>

              {/* Destination Location */}
              <div>
                <label className="block text-xs font-medium text-[#121316] mb-1">
                  Destination / Drop <span className="text-[#FF4D24]">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#14552D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="e.g. Clement Town, Rishikesh, Delhi"
                    {...register("destination")}
                    className={`uts-input w-full pl-10 text-xs sm:text-sm rounded-full ${
                      errors.destination ? "border-[#FF4D24] focus:border-[#FF4D24]" : ""
                    }`}
                  />
                </div>
                {errors.destination && (
                  <p className="text-[11px] text-[#FF4D24] mt-1 font-medium">
                    {errors.destination.message}
                  </p>
                )}
              </div>

              {/* Grid: Requirement & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Requirement Selector */}
                <div>
                  <label className="block text-xs font-medium text-[#121316] mb-1">
                    Requirement <span className="text-[#FF4D24]">*</span>
                  </label>
                  <select
                    {...register("service")}
                    className="uts-input w-full text-xs sm:text-sm bg-white cursor-pointer rounded-full"
                  >
                    <option value="household">Household Shifting</option>
                    <option value="packers-movers">Packers &amp; Movers</option>
                    <option value="office">Office Shifting</option>
                    <option value="goods">Goods Transportation</option>
                    <option value="local-tempo">Local Tempo Service</option>
                    <option value="vehicle">Vehicle / Bike Shifting</option>
                    <option value="other">Other / Custom Load</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-medium text-[#121316] mb-1">
                    Preferred Date <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#8E95A3] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      {...register("movingDate")}
                      className="uts-input w-full pl-10 text-xs sm:text-sm cursor-pointer rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-medium text-[#121316] mb-1">
                  Phone Number <span className="text-[#FF4D24]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs sm:text-sm font-semibold text-[#5E6470] select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="98765 43210"
                    {...register("phone")}
                    className={`uts-input w-full pl-12 text-xs sm:text-sm tracking-wide rounded-full ${
                      errors.phone ? "border-[#FF4D24] focus:border-[#FF4D24]" : ""
                    }`}
                  />
                  <Phone className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-[#FF4D24] mt-1 font-medium">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Submit Button in Vivid Orange */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[50px] rounded-full bg-[#FF4D24] hover:bg-[#E23A12] text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/15 cursor-pointer disabled:opacity-70 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Calculating Estimate...
                  </span>
                ) : (
                  <>
                    <span>GET MY QUOTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-[#8E95A3] pt-0.5">
                🔒 No spam. We only contact you to share vehicle availability and clear pricing.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
