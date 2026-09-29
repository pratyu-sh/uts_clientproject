import React from "react";
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { testimonialsData, getWhatsAppUrl } from "@/config/site";

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-[#F7F8F6] border-b border-[#E4E7E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF7EE] text-[#14552D] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#14552D]" />
            <span>Verified Customer Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#17201B] tracking-tight mb-4">
            What Our Customers Say
          </h2>

          <p className="text-base sm:text-lg text-[#4F5A53]">
            Read how we have helped families, doctors, defense personnel, and Dehradun businesses relocate safely.
          </p>
        </div>

        {/* Testimonials 4-Card / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E4E7E3] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D98A00]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D98A00] text-[#D98A00]"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#14552D] bg-[#EBF7EE] px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-[#16803C]" />
                    <span>Verified Relocation</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#17201B] leading-relaxed mb-6 italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author & Route Info */}
              <div className="pt-4 border-t border-[#E4E7E3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#17201B]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#14552D] font-medium">
                    {item.service}
                  </p>
                </div>

                <span className="text-[11px] text-[#66716B] bg-[#F7F8F6] px-2.5 py-1 rounded-md border border-[#E4E7E3] self-start sm:self-auto">
                  📍 {item.route}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Google Reviews Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E4E7E3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFF8EB] text-[#D98A00] font-black text-xl flex items-center justify-center border border-[#D98A00]/20">
              G
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-xs font-bold text-[#17201B]">
                <div className="flex text-[#D98A00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D98A00]" />
                  ))}
                </div>
                <span>4.8 / 5.0 Rating</span>
              </div>
              <p className="text-xs text-[#66716B] mt-0.5">
                Rated on Google Business by happy Dehradun movers
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl({ service: "Customer Reviews Inquiry" })}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#EBF7EE] text-[#14552D] hover:bg-[#deefe2] transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Ask for References</span>
          </a>
        </div>
      </div>
    </section>
  );
}
