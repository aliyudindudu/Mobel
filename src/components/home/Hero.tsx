"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hotspot from "@/components/ui/Hotspot";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { scaleY: 1 },
      { scaleY: 0, duration: 1.2, ease: "expo.inOut", transformOrigin: "top center" }
    ).fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden isolate">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2070"
          alt="Modern Scandinavian Living Room"
          className="h-full w-full object-cover scale-[1.02]"
        />
        {/* Soft dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* GSAP Reveal Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-porcelain z-50 pointer-events-none"
      />

      {/* Hotspots */}
      <Hotspot x="25%" y="65%" productName="Söderhamn Sofa" price="$799.00" />
      <Hotspot x="42%" y="35%" productName="Fado Table Lamp" price="$39.99" />
      <Hotspot x="68%" y="55%" productName="Gladom Side Table" price="$19.99" />

      {/* Hero Text Content */}
      <div className="absolute bottom-12 left-12 z-10 max-w-xl" ref={textRef}>
        <div className="bg-white p-10 border border-muted shadow-lg">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-gray-500 mb-4 block italic">
            Collection 2026
          </span>
          <h1 className="text-5xl md:text-6xl font-jakarta font-bold text-charcoal leading-[1.1] mb-6">
            The Art of <br /> Simple Living.
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Discover our new modular range designed for the modern, fluid home. 
            Beautiful functionality that doesn't break the bank.
          </p>
          <button className="bg-charcoal text-white px-8 py-4 text-sm font-semibold tracking-wide flex items-center gap-3 group transition-all hover:pr-10">
            SHOP NEW ARRIVALS
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-12 z-10 flex flex-col items-center gap-4">
        <span className="rotate-90 text-[10px] uppercase tracking-[0.4em] font-medium text-charcoal/40 origin-right whitespace-nowrap">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1px] h-24 bg-charcoal/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-charcoal animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
