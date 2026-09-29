"use client";

import React from "react";

export interface MarqueeProps {
  children: React.ReactNode;
  duration?: number;
  direction?: "left" | "right";
  fade?: boolean;
  fadeAmount?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  duration = 28,
  direction = "left",
  fade = true,
  fadeAmount = 8,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const animationDirection = direction === "right" ? "reverse" : "normal";

  return (
    <div
      className={`group relative flex overflow-hidden select-none w-full ${className}`}
      style={
        fade
          ? {
              maskImage: `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`,
              WebkitMaskImage: `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`,
            }
          : undefined
      }
    >
      <div
        className={`flex shrink-0 items-center justify-around gap-4 min-w-full ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `uts-marquee ${duration}s linear infinite ${animationDirection}`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center justify-around gap-4 min-w-full ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `uts-marquee ${duration}s linear infinite ${animationDirection}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Marquee;
