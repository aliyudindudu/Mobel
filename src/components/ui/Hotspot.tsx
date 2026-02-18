"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Plus } from "lucide-react";
import { useGSAP } from "@gsap/react";

interface HotspotProps {
  x: string; // percentage, e.g. "20%"
  y: string; // percentage, e.g. "45%"
  productName: string;
  price: string;
}

export default function Hotspot({ x, y, productName, price }: HotspotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pulsating animation
    gsap.to(pulseRef.current, {
      scale: 2.2,
      opacity: 0,
      duration: 1.8,
      repeat: -1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  const handleMouseEnter = () => {
    gsap.to(tooltipRef.current, {
      display: "block",
      opacity: 1,
      y: -10,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(tooltipRef.current, {
      opacity: 0,
      y: 0,
      scale: 0.95,
      duration: 0.2,
      ease: "power3.in",
      onComplete: () => {
        gsap.set(tooltipRef.current, { display: "none" });
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="absolute z-20"
      style={{ left: x, top: y }}
    >
      {/* The Pulsing Dot */}
      <div className="relative flex items-center justify-center">
        <div
          ref={pulseRef}
          className="absolute w-8 h-8 bg-white rounded-full opacity-60"
        />
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-4 h-4 bg-white rounded-full cursor-pointer shadow-lg hover:scale-125 transition-transform duration-300 flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 bg-charcoal rounded-full" />
        </div>
      </div>

      {/* The Tooltip Card */}
      <div
        ref={tooltipRef}
        className="absolute hidden opacity-0 bottom-full left-1/2 -translate-x-1/2 mb-4 w-[180px] bg-white p-4 shadow-2xl pointer-events-none border border-muted"
        style={{ transformOrigin: "bottom center" }}
      >
        <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-1">
          Møbel Series
        </h4>
        <p className="text-sm font-semibold text-charcoal mb-2">{productName}</p>
        <div className="flex items-center justify-between border-t border-muted pt-2 mt-2">
          <span className="text-sm font-jakarta font-bold text-charcoal">
            {price}
          </span>
          <button className="bg-charcoal text-white p-1 rounded-sm">
            <Plus size={14} strokeWidth={1.5} />
          </button>
        </div>
        {/* Pointer Triangle */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
      </div>
    </div>
  );
}
