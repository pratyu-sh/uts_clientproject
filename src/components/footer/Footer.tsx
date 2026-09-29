import React from "react";
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#17201B] text-white pt-16 pb-24 lg:pb-12 border-t border-[#CBD1CC]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column: 4 cols */}
          <div className="lg:col-span-4">
            <div className="bg-white inline-block p-2 rounded-2xl mb-4">
              <Logo size="md" variant="full" />
            </div>

            <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-sm">
              Reliable tempo, packers &amp; movers and transportation services for homes, offices and businesses across Dehradun and Uttarakhand. Established in 2010.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-[#D98A00]" />
              <span>GST Verified Business • {siteConfig.gstNumber}</span>
            </div>
          </div>

          {/* Services Links: 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#D98A00] pl-2.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#services" className="hover:text-[#D98A00] transition-colors">
                  Household Shifting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D98A00] transition-colors">
                  Packers &amp; Movers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D98A00] transition-colors">
                  Office Shifting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D98A00] transition-colors">
                  Goods Transportation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D98A00] transition-colors">
                  Local Tempo Service (Tata Ace / Bolero)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D98A00] transition-colors">
                  Two-Wheeler &amp; Bike Transport
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Areas: 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#14552D] pl-2.5">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#why-us" className="hover:text-[#D98A00] transition-colors">
                  Why UTS
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#D98A00] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#vehicle-finder" className="hover:text-[#D98A00] transition-colors">
                  Vehicle Finder
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-[#D98A00] transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D98A00] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D98A00] transition-colors">
                  FAQ &amp; Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details: 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#064A91] pl-2.5">
              Contact &amp; Hub
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D98A00] shrink-0 mt-0.5" />
                <span>{siteConfig.address} ({siteConfig.landmark})</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#14552D] shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white font-semibold">
                  {siteConfig.phone} (Direct Call)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-emerald-400"
                >
                  WhatsApp: +91 94120 54321
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span>{siteConfig.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <p>
            &copy; {currentYear} Uttarakhand Tempo Services (UTS — Packers &amp; Movers). All rights reserved.
          </p>
          <p className="text-[11px] text-gray-500">
            Dehradun, Uttarakhand • Traditional Trust × Modern UX
          </p>
        </div>
      </div>
    </footer>
  );
}
