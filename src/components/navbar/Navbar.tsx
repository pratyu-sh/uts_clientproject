"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Menu, X, MessageSquare, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { ServiceType } from "@/types";

interface NavbarProps {
  onOpenQuoteModal?: (service?: ServiceType) => void;
}

export function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why UTS", href: "#why-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Vehicle Finder", href: "#vehicle-finder" },
    { label: "Areas", href: "#service-areas" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      const quoteEl = document.getElementById("quote-widget");
      if (quoteEl) {
        quoteEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(23,32,27,0.06)] border-b border-[#E4E7E3]"
            : "bg-white border-b border-[#E4E7E3]/60"
        }`}
      >
        {/* Top Trust & Contact Bar */}
        <div className="bg-[#14552D] text-white text-xs py-1.5 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium text-emerald-100">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D98A00]" />
                Dehradun&apos;s Verified Local Transporter Since 2010 • GST Compliant
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-emerald-100">Direct Support: 7 AM – 10 PM</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-200 transition-colors flex items-center gap-1 font-medium"
              >
                <MessageSquare className="w-3 h-3 text-[#25D366]" />
                WhatsApp: {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="focus:outline-none" aria-label="UTS Home">
              <Logo size="md" variant="full" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-medium text-[#4F5A53] hover:text-[#D98A00] transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D98A00] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E4E7E3] text-[#17201B] font-semibold text-sm hover:border-[#CBD1CC] hover:bg-[#F7F8F6] transition-all"
                aria-label="Call Uttarakhand Tempo Services"
              >
                <Phone className="w-4 h-4 text-[#14552D]" />
                <span>Call Now</span>
              </a>

              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D98A00] hover:bg-[#BF7800] text-white font-semibold text-sm shadow-sm transition-all transform active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="p-2.5 rounded-xl bg-[#EBF7EE] text-[#14552D] hover:bg-[#d8eedf] transition-colors"
                aria-label="Call UTS directly"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border border-[#E4E7E3] text-[#17201B] hover:bg-[#F7F8F6] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E4E7E3] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="space-y-1 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#17201B] hover:bg-[#FFF8EB] hover:text-[#D98A00] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-[#E4E7E3]">
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleQuoteClick(e);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D98A00] hover:bg-[#BF7800] text-white font-semibold text-base shadow-sm"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E4E7E3] bg-[#F7F8F6] text-[#17201B] font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#14552D]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#EBF7EE] text-[#14552D] font-semibold text-sm border border-[#14552D]/20"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
