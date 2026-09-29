"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

interface LenisContextValue {
  getLenis: () => Lenis | null;
  scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => void;
}

const LenisContext = createContext<LenisContextValue>({
  getLenis: () => null,
  scrollTo: () => {},
});

export const useLenis = () => useContext(LenisContext);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable smooth scroll on reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // RAF loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept internal hash anchor clicks for buttery smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, {
            offset: -75, // offset for floating top pill navbar
            duration: 1.3,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (
    target: string | HTMLElement,
    options?: { offset?: number; duration?: number }
  ) => {
    if (!lenisRef.current) {
      if (typeof target === "string") {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    lenisRef.current.scrollTo(target, {
      offset: options?.offset ?? -75,
      duration: options?.duration ?? 1.3,
    });
  };

  return (
    <LenisContext.Provider value={{ getLenis: () => lenisRef.current, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
}
