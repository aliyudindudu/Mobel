"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useGSAP(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, { scope: navRef });

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6 px-12 flex items-center justify-between border-b ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-muted py-4 shadow-sm" 
          : "bg-transparent border-transparent py-8"
      }`}
    >
      {/* Menu / Brand */}
      <div className="flex items-center gap-12">
        <button className="flex items-center gap-2 group">
          <Menu size={20} strokeWidth={1} className="group-hover:text-burntOrange transition-colors" />
          <span className="text-xs uppercase tracking-[0.3em] font-medium hidden md:block">Menu</span>
        </button>

        <a href="/" className="text-2xl font-jakarta font-extrabold tracking-tighter text-charcoal">
          MØBEL<span className="text-burntOrange">.</span>
        </a>
      </div>

      {/* Main Nav Items */}
      <div className="hidden lg:flex items-center gap-10">
        {["Living Room", "Bedroom", "Dining", "Office", "Collections"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal/60 hover:text-charcoal transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-charcoal transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <button className="hover:text-burntOrange transition-colors">
          <Search size={20} strokeWidth={1} />
        </button>
        <button className="hover:text-burntOrange transition-colors relative">
          <ShoppingCart size={20} strokeWidth={1} />
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-charcoal text-white text-[9px] flex items-center justify-center rounded-full font-bold">
            2
          </span>
        </button>
        <button className="hover:text-burntOrange transition-colors">
          <User size={20} strokeWidth={1} />
        </button>
      </div>
    </nav>
  );
}
