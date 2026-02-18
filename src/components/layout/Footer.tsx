"use client";

import { Facebook, Instagram, Twitter, Youtube, ArrowRight, ArrowUp } from "lucide-react";
import gsap from "gsap";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white pt-32 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-32">
        
        {/* Branding & Newsletter - Wider Column */}
        <div className="lg:col-span-4">
          <a href="/" className="text-4xl font-jakarta font-extrabold tracking-tighter mb-10 block group">
            MØBEL<span className="text-burntOrange group-hover:pl-1 transition-all">.</span>
          </a>
          <p className="text-gray-400 mb-10 max-w-sm leading-relaxed text-sm">
            We believe in Democratic Design: the right for everyone to have access to 
            affordable, functional, and beautiful furniture that lasts a lifetime.
          </p>
          
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 italic">
              Join the Møbel Family
            </h4>
            <div className="relative max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b border-gray-700 py-4 pr-12 text-sm focus:outline-none focus:border-burntOrange transition-colors placeholder:text-gray-600"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-burntOrange transition-all hover:translate-x-1">
                <ArrowRight size={20} strokeWidth={1} />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 max-w-xs">
              By subscribing, you agree to our Privacy Policy and Terms of Use.
            </p>
          </div>
        </div>

        {/* Links Section - Modular Columns */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-gray-500 italic">
            Collections
          </h4>
          <ul className="flex flex-col gap-5">
            {["New Arrivals", "Living Room", "Bedroom", "Workspace", "Outdoor", "Lighting"].map((link) => (
              <li key={link}>
                <a href="#" className="text-[13px] text-gray-300 hover:text-white transition-colors tracking-wide flex items-center group">
                  <span className="w-0 h-[1px] bg-burntOrange transition-all group-hover:w-3 mr-0 group-hover:mr-2"></span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-gray-500 italic">
            The Company
          </h4>
          <ul className="flex flex-col gap-5">
            {["Our Story", "Sustainability", "Democratic Design", "Careers", "Press Office", "Compliance"].map((link) => (
              <li key={link}>
                <a href="#" className="text-[13px] text-gray-300 hover:text-white transition-colors tracking-wide flex items-center group">
                   <span className="w-0 h-[1px] bg-burntOrange transition-all group-hover:w-3 mr-0 group-hover:mr-2"></span>
                   {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-gray-500 italic">
            Help
          </h4>
          <ul className="flex flex-col gap-5">
            {["Track Order", "Returns & Refunds", "Contact Us", "Store Locator", "Gift Cards", "FAQ"].map((link) => (
              <li key={link}>
                <a href="#" className="text-[13px] text-gray-300 hover:text-white transition-colors tracking-wide flex items-center group">
                   <span className="w-0 h-[1px] bg-burntOrange transition-all group-hover:w-3 mr-0 group-hover:mr-2"></span>
                   {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* App Promo - Structural Box */}
        <div className="lg:col-span-2">
          <div className="bg-[#262F3C] p-8 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-burntOrange/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-burntOrange">Møbel App</p>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">Visualize furniture in your space with AR.</p>
            <button className="text-[10px] font-bold border border-gray-600 px-5 py-3 w-full hover:bg-white hover:text-charcoal transition-all uppercase tracking-widest text-center">
              GET THE APP
            </button>
          </div>
          
          <div className="mt-10 flex gap-6 justify-between lg:justify-start">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-500 hover:text-white transition-all transform hover:-translate-y-1">
                <Icon size={20} strokeWidth={1} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-center pt-12 border-t border-white/5 gap-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
           <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-medium">
            © 2026 MØBEL SYSTEMS B.V. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 hover:text-white transition-colors"
        >
          BACK TO TOP
          <div className="w-10 h-10 border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowUp size={16} strokeWidth={1} />
          </div>
        </button>
      </div>
    </footer>
  );
}
