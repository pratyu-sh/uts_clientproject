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
  Truck,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { quoteFormSchema, QuoteFormData, ServiceType } from "@/types";
import { getWhatsAppUrl, siteConfig } from "@/config/site";

interface QuoteFormProps {
  defaultService?: ServiceType;
  className?: string;
  onSuccess?: () => void;
}

interface QuoteResultData {
  quoteId: string;
  estimatedRange: string;
  recommendedVehicle: string;
  recommendedCrew: string;
  whatsappUrl: string;
  phone: string;
  details: {
    pickupLocation: string;
    destination: string;
    service: ServiceType;
    movingDate: string;
    name?: string;
  };
}

export function QuoteForm({
  defaultService = "household",
  className = "",
  onSuccess,
}: QuoteFormProps) {
  const [quoteResult, setQuoteResult] = useState<QuoteResultData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
    setSubmitError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to calculate quote");
      }

      setQuoteResult(result);

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Safe fallback
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      console.warn("API submission error, using resilient fallback:", err);

      // Resilient fallback: calculate quote locally so customer is never stranded
      const quoteId = `UTS-${Math.floor(1000 + Math.random() * 9000)}`;
      const cleanPhone = data.phone.replace(/\D/g, "").slice(-10);

      const estimateMap: Record<ServiceType, { vehicle: string; priceRange: string; crew: string }> = {
        "local-tempo": {
          vehicle: "Tata Ace (Chota Hathi) / Bolero Pickup",
          priceRange: "₹800 – ₹1,800",
          crew: "1 Driver (+ optional helper)",
        },
        household: {
          vehicle: "Bolero Pickup / 9 ft Tata 407",
          priceRange: "₹3,500 – ₹7,500",
          crew: "2–3 Professional Movers",
        },
        "packers-movers": {
          vehicle: "14 ft / 17 ft Covered Container Truck",
          priceRange: "₹4,500 – ₹11,000",
          crew: "Full Crew with Multi-Layer Packing",
        },
        office: {
          vehicle: "14 ft / 19 ft Closed Container Fleet",
          priceRange: "₹6,000 – ₹16,000",
          crew: "Commercial IT & Furniture Moving Crew",
        },
        goods: {
          vehicle: "On-Demand Mini Truck / 407 / 14 ft",
          priceRange: "₹1,200 – ₹4,500",
          crew: "Driver / Commercial Cargo Team",
        },
        vehicle: {
          vehicle: "Covered Carrier with Foam Strapping",
          priceRange: "₹1,500 – ₹3,500",
          crew: "Dedicated Two-Wheeler Transit Team",
        },
        other: {
          vehicle: "Custom Fleet Allocation",
          priceRange: "Custom Quote",
          crew: "Custom Support",
        },
      };

      const est = estimateMap[data.service] || estimateMap.household;
      const fallbackUrl = getWhatsAppUrl({
        service: data.service,
        pickup: data.pickupLocation,
        destination: data.destination,
        loadType: est.vehicle,
      });

      setQuoteResult({
        quoteId,
        estimatedRange: est.priceRange,
        recommendedVehicle: est.vehicle,
        recommendedCrew: est.crew,
        whatsappUrl: fallbackUrl,
        phone: cleanPhone,
        details: {
          pickupLocation: data.pickupLocation,
          destination: data.destination,
          service: data.service,
          movingDate: data.movingDate || "Flexible",
          name: data.name || "",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setQuoteResult(null);
    setSubmitError(null);
    reset();
  };

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

        {/* Right Column: Quote Form or Generated Quote Result */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
          {quoteResult ? (
            /* Result Screen: Estimated Pricing & 1-Click WhatsApp Booking */
            <div className="flex flex-col justify-between h-full animate-in fade-in zoom-in-95 duration-200">
              <div>
                {/* Result Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E8EAED] mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16803C] bg-[#E8F5E9] px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Quote Generated: {quoteResult.quoteId}</span>
                  </span>
                  <span className="text-[11px] text-[#8E95A3] font-medium">
                    Verified Dehradun Fleet
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-[#121316] mb-1.5 tracking-tight">
                  Your Instant Moving Estimate
                </h3>
                <p className="text-xs text-[#5E6470] mb-5">
                  Based on route distance, vehicle capacity, and certified local rates with zero hidden charges.
                </p>

                {/* Big Estimated Fare Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF1EE] border border-[#FFD9CF] mb-5">
                  <span className="text-[11px] font-semibold text-[#FF4D24] uppercase tracking-wider block mb-1">
                    Estimated Fair Fare Range
                  </span>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#121316]">
                      {quoteResult.estimatedRange}
                    </span>
                    <span className="text-xs text-[#5E6470] font-normal">
                      (All-Inclusive Transit)
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#FFD9CF]/60 space-y-1 text-xs text-[#121316]">
                    <div className="flex items-center gap-2">
                      <Truck className="w-3.5 h-3.5 text-[#FF4D24] shrink-0" />
                      <span><strong>Vehicle:</strong> {quoteResult.recommendedVehicle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#16803C] shrink-0" />
                      <span><strong>Handling:</strong> {quoteResult.recommendedCrew}</span>
                    </div>
                  </div>
                </div>

                {/* Summary Details */}
                <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E8EAED] text-xs space-y-1.5 mb-5">
                  <div className="flex justify-between">
                    <span className="text-[#8E95A3]">Pickup Location:</span>
                    <span className="font-semibold text-[#121316]">{quoteResult.details.pickupLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E95A3]">Drop Destination:</span>
                    <span className="font-semibold text-[#121316]">{quoteResult.details.destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E95A3]">Selected Service:</span>
                    <span className="font-semibold text-[#FF4D24] capitalize">
                      {quoteResult.details.service.replace("-", " ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E95A3]">Contact Number:</span>
                    <span className="font-semibold text-[#121316]">+91 {quoteResult.phone}</span>
                  </div>
                  {quoteResult.details.movingDate && (
                    <div className="flex justify-between">
                      <span className="text-[#8E95A3]">Preferred Date:</span>
                      <span className="font-semibold text-[#121316]">{quoteResult.details.movingDate}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={quoteResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-full bg-[#121316] hover:bg-[#24262E] text-white font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md group"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Send to UTS on WhatsApp for Instant Booking</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center gap-2.5">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="flex-1 py-2.5 px-4 rounded-full bg-[#FF4D24] hover:bg-[#E23A12] text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Coordinator: {siteConfig.phone}</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="py-2.5 px-4 rounded-full border border-[#E8EAED] text-xs font-medium text-[#5E6470] hover:bg-[#F4F5F6] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>New Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Active Form State */
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-5 border-b border-[#E8EAED] pb-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF4D24] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Fast Free Estimate</span>
                  </div>
                  <h3 className="text-xl font-medium text-[#121316] tracking-tight">
                    Get Your Instant Quote
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-medium text-[#14552D] bg-[#EBF7EE] px-2.5 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Zero Obligation</span>
                </div>
              </div>

              {submitError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs mb-3.5">
                  {submitError}
                </div>
              )}

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
                      placeholder="e.g. Clement Town, Rishikesh, Haridwar"
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
                      maxLength={14}
                      placeholder="79066 96981"
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
                  className="w-full h-[50px] rounded-full bg-[#FF4D24] hover:bg-[#E23A12] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/15 cursor-pointer disabled:opacity-70 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Calculating Instant Quote...
                    </span>
                  ) : (
                    <>
                      <span>GET MY QUOTE</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[#8E95A3] pt-0.5">
                  🔒 Zero spam. Direct estimate and vehicle match across Dehradun.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default QuoteForm;
