import React from "react";

interface LogoProps {
  variant?: "light" | "dark" | "default" | "full" | "icon" | "compact";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "default", className = "", size = "md" }: LogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none font-sans ${className}`}>
      {/* Modern geometric stencil badge for UTS */}
      <div className="w-8 h-8 rounded-xl bg-[#FF4D24] text-white flex items-center justify-center font-extrabold text-sm tracking-tighter shadow-xs">
        uts
      </div>

      <div className="flex flex-col">
        <span
          className={`font-bold tracking-tight leading-none ${sizeClasses} ${
            isLight ? "text-white" : "text-[#121316]"
          }`}
        >
          UTS<span className="text-[#FF4D24]">.</span>
        </span>
        <span
          className={`text-[9px] font-medium tracking-wider uppercase mt-0.5 ${
            isLight ? "text-white/75" : "text-[#5E6470]"
          }`}
        >
          Uttarakhand Tempo Services
        </span>
      </div>
    </div>
  );
}
