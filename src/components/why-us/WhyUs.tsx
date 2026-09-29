import React from "react";
import { Truck, ShieldCheck, MapPin, PhoneCall, CheckCircle } from "lucide-react";
import { whyUsPoints } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  Truck,
  ShieldCheck,
  MapPin,
  PhoneCall,
};

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-24 bg-[#F4F5F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Local Context */}
          <div className="lg:col-span-5">
            <span className="pill-badge mb-3">Why UTS</span>

            <h2 className="editorial-h2 text-3xl sm:text-4xl lg:text-[42px] text-[#121316] font-normal leading-[1.18] mb-5">
              Moving is stressful. Your transportation shouldn&apos;t be.
            </h2>

            <p className="text-base text-[#5E6470] leading-relaxed mb-6 font-normal">
              When shifting in Dehradun, generic logistics portals assign random unverified drivers who often cancel or renegotiate on pickup day. At UTS, our drivers and loaders are vetted local professionals who treat your move with personal accountability.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E8EAED] space-y-3 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#FF4D24] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#121316]">
                  Dehradun Local Stationed Fleet at Transport Nagar
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#FF4D24] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#121316]">
                  Upfront Fixed Quotations — Zero Surprise Gate Charges
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#FF4D24] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#121316]">
                  Experienced Mountain &amp; Narrow Colony Navigation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUsPoints.map((item) => {
                const IconComponent = iconMap[item.icon] || ShieldCheck;
                return (
                  <div
                    key={item.title}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8EAED] hover:border-[#FF4D24]/50 transition-all hover:shadow-[0_12px_30px_rgba(255,77,36,0.06)] group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF1EE] text-[#FF4D24] flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="text-lg font-medium text-[#121316] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#5E6470] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
