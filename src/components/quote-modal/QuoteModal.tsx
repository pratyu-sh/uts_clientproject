"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { QuoteForm } from "@/components/hero/QuoteForm";
import { ServiceType } from "@/types";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceType;
}

export function QuoteModal({
  isOpen,
  onClose,
  selectedService = "household",
}: QuoteModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        data-lenis-prevent
        className="relative w-full max-w-4xl lg:max-w-[940px] bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl z-10 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2.5 rounded-full bg-white/90 text-[#121316] hover:bg-white shadow-md transition-all z-30 focus:outline-none cursor-pointer border border-[#E8EAED]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <QuoteForm
            defaultService={selectedService}
            onSuccess={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
