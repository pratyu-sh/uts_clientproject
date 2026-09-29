"use client";

import React, { useState } from "react";
import { Hero } from "@/components/hero/Hero";
import { BrandMarquee } from "@/components/brand/BrandMarquee";
import { ConnectedStats } from "@/components/trust/ConnectedStats";
import { HorizontalServices } from "@/components/services/HorizontalServices";
import { WhyUs } from "@/components/why-us/WhyUs";
import { Process } from "@/components/process/Process";
import { VehicleFinder } from "@/components/vehicle-finder/VehicleFinder";
import { Locations } from "@/components/locations/Locations";
import { TestimonialNetwork } from "@/components/testimonials/TestimonialNetwork";
import { CleanFAQ } from "@/components/faq/CleanFAQ";
import { ContainerCTA } from "@/components/cta/ContainerCTA";
import { MinimalFooter } from "@/components/footer/MinimalFooter";
import { MobileCTA } from "@/components/mobile/MobileCTA";
import { QuoteModal } from "@/components/quote-modal/QuoteModal";
import { ServiceType } from "@/types";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] =
    useState<ServiceType>("household");

  const handleOpenQuoteModal = (serviceId?: ServiceType) => {
    if (serviceId) {
      setSelectedServiceForModal(serviceId);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F6] text-[#121316]">
      <main className="flex-1">
        {/* A. Framed Container Hero with Integrated Glass Floating Pill Navbar */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal("household")} />

        {/* Continuous Brand Statement Marquee */}
        <BrandMarquee />

        {/* B. Connected Tree-Diagram Stats Section matching reference image */}
        <ConnectedStats />

        {/* C. Horizontal Transportation Mode Showcase matching reference */}
        <HorizontalServices onSelectService={handleOpenQuoteModal} />

        {/* Why UTS — 2x2 Value Matrix */}
        <WhyUs />

        {/* How It Works — 4-Step Transparent Relocation */}
        <Process />

        {/* Local Dehradun Smart Vehicle Capacity Finder */}
        <VehicleFinder onOpenQuoteModal={(service) => handleOpenQuoteModal(service || "household")} />

        {/* Dehradun Local & Outstation Hill Routes */}
        <Locations />

        {/* D. Customer Testimonials Map & Avatar Network matching reference */}
        <TestimonialNetwork />

        {/* E. Clean Numbered Split FAQ: "Questions? Glad you asked" */}
        <CleanFAQ />

        {/* F. Container Graphic Final CTA Banner matching reference */}
        <ContainerCTA onOpenQuoteModal={() => handleOpenQuoteModal("household")} />
      </main>

      {/* G. Minimalist Modern Footer matching reference */}
      <MinimalFooter />

      {/* Mobile Sticky Bottom Conversion Bar */}
      <MobileCTA onOpenQuoteModal={() => handleOpenQuoteModal("household")} />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        selectedService={selectedServiceForModal}
      />
    </div>
  );
}
