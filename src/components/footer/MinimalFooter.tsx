import React from "react";
import { MapPin, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export function MinimalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E8EAED] text-[#121316] pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Multi-Column Grid matching reference */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-14 border-b border-[#E8EAED] text-xs">
          {/* Col 1: Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <Logo variant="default" size="md" />
            <p className="text-xs text-[#5E6470] mt-3 leading-relaxed">
              Reliable transportation services for homes, offices and businesses across Dehradun and Uttarakhand.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-[#14552D] bg-[#EBF7EE] px-2.5 py-1 rounded-md inline-flex">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16803C]" />
              <span>GST Verified</span>
            </div>
          </div>

          {/* Col 2: Services per PRD Section 22 */}
          <div>
            <h4 className="font-semibold text-[#121316] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[#5E6470]">
              <li><a href="#services" className="hover:text-[#FF4D24] transition-colors">Household Shifting</a></li>
              <li><a href="#services" className="hover:text-[#FF4D24] transition-colors">Packers &amp; Movers</a></li>
              <li><a href="#services" className="hover:text-[#FF4D24] transition-colors">Office Shifting</a></li>
              <li><a href="#services" className="hover:text-[#FF4D24] transition-colors">Goods Transportation</a></li>
              <li><a href="#services" className="hover:text-[#FF4D24] transition-colors">Local Tempo Service</a></li>
            </ul>
          </div>

          {/* Col 3: Company per PRD Section 22 */}
          <div>
            <h4 className="font-semibold text-[#121316] uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-[#5E6470]">
              <li><a href="#why-us" className="hover:text-[#FF4D24] transition-colors">About &amp; Why Us</a></li>
              <li><a href="#how-it-works" className="hover:text-[#FF4D24] transition-colors">How It Works</a></li>
              <li><a href="#vehicle-finder" className="hover:text-[#FF4D24] transition-colors">Vehicle Finder</a></li>
              <li><a href="#service-areas" className="hover:text-[#FF4D24] transition-colors">Service Areas</a></li>
              <li><a href="#reviews" className="hover:text-[#FF4D24] transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#FF4D24] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: Routes */}
          <div>
            <h4 className="font-semibold text-[#121316] uppercase tracking-wider mb-4">
              Key Routes
            </h4>
            <ul className="space-y-2.5 text-[#5E6470]">
              <li><a href="#service-areas" className="hover:text-[#FF4D24] transition-colors">Dehradun Local</a></li>
              <li><a href="#service-areas" className="hover:text-[#FF4D24] transition-colors">Dehradun to Rishikesh</a></li>
              <li><a href="#service-areas" className="hover:text-[#FF4D24] transition-colors">Dehradun to Haridwar</a></li>
              <li><a href="#service-areas" className="hover:text-[#FF4D24] transition-colors">Dehradun to Delhi NCR</a></li>
              <li><a href="#service-areas" className="hover:text-[#FF4D24] transition-colors">Mussoorie Hills</a></li>
            </ul>
          </div>

          {/* Col 5: Contact per PRD Section 22 */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-[#121316] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-[#5E6470]">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF4D24] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#14552D] shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-[#FF4D24] font-medium text-[#121316]">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D24] font-medium text-[#121316]"
                >
                  WhatsApp: +91 94120 54321
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-xs text-[#8E95A3] text-center sm:text-left">
            &copy; {currentYear} Uttarakhand Tempo Services (UTS — Packers &amp; Movers). All rights reserved.
          </span>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#5E6470]">Dehradun&apos;s Local Transport Partner</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-[#FF4D24] hover:bg-[#E23A12] text-white text-xs font-medium transition-colors"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
