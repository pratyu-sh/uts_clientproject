import React from "react";
import { MapPin, Navigation, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { serviceAreas, getWhatsAppUrl } from "@/config/site";

export function Locations() {
  return (
    <section id="service-areas" className="py-20 sm:py-24 bg-white border-y border-[#E8EAED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Pill Badge and Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill-badge mb-3">Service Areas</span>
          <h2 className="editorial-h2 text-3xl sm:text-4xl lg:text-[42px] text-[#121316] font-normal tracking-tight">
            Moving Across Dehradun &amp; Beyond
          </h2>
          <p className="text-sm sm:text-base text-[#5E6470] mt-3 font-normal">
            Local colony routes across Dehradun suburbs and regular highway/hill routes connecting Uttarakhand and North India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dehradun Local Hubs */}
          <div className="lg:col-span-5 bg-[#F4F5F6] rounded-3xl p-6 sm:p-8 border border-[#E8EAED] shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-[#FF4D24]" />
              <h3 className="text-xl font-medium text-[#121316]">
                Dehradun Local Hubs
              </h3>
            </div>
            <p className="text-xs text-[#5E6470] mb-6">
              Instant dispatch of Tata Ace &amp; Bolero tempos within 45–90 mins across:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {serviceAreas.dehradunLocal.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-[#E8EAED] text-xs font-normal text-[#121316]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D24]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#E8EAED] flex items-center justify-between">
              <span className="text-xs font-medium text-[#14552D] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#16803C]" />
                All Dehradun Pincodes Served
              </span>
              <a
                href={getWhatsAppUrl({ pickup: "Dehradun Local" })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#FF4D24] hover:underline flex items-center gap-1"
              >
                <span>Check My Colony</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Inter-city Regular Routes */}
          <div className="lg:col-span-7 bg-[#F4F5F6] rounded-3xl p-6 sm:p-8 border border-[#E8EAED] shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#14552D]" />
                <h3 className="text-xl font-medium text-[#121316]">
                  Major Outstation &amp; Hill Routes
                </h3>
              </div>
              <span className="text-[11px] font-medium text-[#14552D] bg-[#EBF7EE] px-2.5 py-0.5 rounded-full">
                Daily Trips
              </span>
            </div>
            <p className="text-xs text-[#5E6470] mb-6">
              Experienced mountain drivers for steep hill inclines &amp; national highway container transport:
            </p>

            <div className="space-y-3">
              {serviceAreas.interCityRoutes.map((route, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white border border-[#E8EAED] hover:border-[#FF4D24]/40 transition-colors gap-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#121316]">
                      {route.from}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF4D24] shrink-0" />
                    <span className="text-xs font-semibold text-[#14552D]">
                      {route.to}
                    </span>
                    <span className="text-[11px] text-[#5E6470] hidden md:inline">
                      • {route.desc}
                    </span>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3">
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#5E6470] bg-[#F4F5F6] px-2 py-1 rounded-md border border-[#E8EAED]">
                      <Clock className="w-3 h-3 text-[#FF4D24]" />
                      {route.time}
                    </span>
                    <a
                      href={getWhatsAppUrl({
                        pickup: route.from,
                        destination: route.to,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#FF4D24] hover:underline"
                    >
                      Get Route Rate →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
