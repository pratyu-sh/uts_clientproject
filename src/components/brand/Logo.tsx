import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "default" | "full" | "icon" | "compact";
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({
  variant = "default",
  className = "",
  size = "md",
  showText = true,
}: LogoProps) {
  const isLight = variant === "light";

  const dimensions = {
    sm: { img: 36, text: "text-lg", sub: "text-[9px]" },
    md: { img: 44, text: "text-2xl", sub: "text-[10px]" },
    lg: { img: 56, text: "text-3xl", sub: "text-[11px]" },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none font-sans ${className}`}>
      {/* Official UTS Emblem Badge with uploaded artwork */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-white p-0.5 border shrink-0 flex items-center justify-center transition-transform hover:scale-105 ${
          isLight
            ? "border-white/30 shadow-md shadow-black/20"
            : "border-[#E8EAED] shadow-xs"
        }`}
        style={{ width: dimensions.img + 8, height: dimensions.img + 8 }}
      >
        <Image
          src="/images/uts-logo.jpg"
          alt="Uttarakhand Tempo Services"
          width={dimensions.img}
          height={dimensions.img}
          className="object-contain rounded-xl"
          priority
        />
      </div>

      {showText && variant !== "icon" && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-bold tracking-tight leading-none ${dimensions.text} ${
              isLight ? "text-white" : "text-[#121316]"
            }`}
          >
            UTS<span className="text-[#FF4D24]">.</span>
          </span>
          <span
            className={`font-semibold tracking-wider uppercase mt-1 ${dimensions.sub} ${
              isLight ? "text-white/85" : "text-[#5E6470]"
            }`}
          >
            Uttarakhand Tempo Services
          </span>
          <span className="text-[9px] font-semibold text-[#16803C] tracking-wide">
            Packers &amp; Movers
          </span>
        </div>
      )}
    </div>
  );
}

export default Logo;
