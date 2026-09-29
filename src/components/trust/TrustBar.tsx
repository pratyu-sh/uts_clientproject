import React from "react";
import { Calendar, FileCheck2, MapPin, Headphones } from "lucide-react";
import { trustPillars } from "@/config/site";

export function TrustBar() {
  const icons = [Calendar, FileCheck2, MapPin, Headphones];

  return (
    <section className="bg-white border-y border-[#E4E7E3] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustPillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={pillar.title}
                className="flex items-start gap-3.5 group p-2 rounded-xl transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EBF7EE] text-[#14552D] group-hover:bg-[#14552D] group-hover:text-white transition-all flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-extrabold tracking-wider text-[#14552D] uppercase">
                      {pillar.title}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#17201B] mt-0.5 leading-snug">
                    {pillar.subtitle}
                  </h4>
                  <p className="text-xs text-[#66716B] mt-1 leading-relaxed hidden sm:block">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
