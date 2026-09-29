"use client";

import React from "react";
import {
  Home,
  PackageCheck,
  Building2,
  Truck,
  Bike,
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { ServiceDetail, ServiceType } from "@/types";
import { getWhatsAppUrl } from "@/config/site";

interface ServiceCardProps {
  service: ServiceDetail;
  onSelectService: (serviceId: ServiceType) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Home,
  PackageCheck,
  Building2,
  Truck,
  Bike,
  Clock,
};

export function ServiceCard({ service, onSelectService }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Truck;
  const whatsAppUrl = getWhatsAppUrl({ service: service.title });

  return (
    <div className="uts-card flex flex-col justify-between p-6 sm:p-7 bg-white relative group">
      {/* Top info and badge */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-13 h-13 rounded-2xl bg-[#FFF8EB] border border-[#D98A00]/20 text-[#D98A00] flex items-center justify-center group-hover:bg-[#D98A00] group-hover:text-white transition-all duration-300">
            <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EBF7EE] text-[#14552D] border border-[#14552D]/15">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#17201B] mb-2 group-hover:text-[#D98A00] transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-[#4F5A53] leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {service.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-[#66716B]">
              <CheckCircle2 className="w-4 h-4 text-[#16803C] shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action buttons */}
      <div className="pt-4 border-t border-[#E4E7E3] flex items-center gap-2">
        <button
          onClick={() => onSelectService(service.id)}
          className="flex-1 py-2.5 px-4 rounded-xl bg-[#FFF8EB] hover:bg-[#D98A00] text-[#D98A00] hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl border border-[#E4E7E3] hover:border-[#25D366] hover:bg-[#EBF7EE] text-[#4F5A53] hover:text-[#14552D] transition-colors"
          title={`WhatsApp about ${service.title}`}
          aria-label={`WhatsApp about ${service.title}`}
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
        </a>
      </div>
    </div>
  );
}
