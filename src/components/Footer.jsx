import React from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function AtelierFooter() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#02050e] text-white border-t border-white/10 overflow-hidden font-sans">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[150px] pointer-events-none -bottom-40 right-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12">
        {/* Main Grid: Studio Coordinates, Navigation, Inquiries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/10">
          
          {/* Col 1: Studio Identity & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-blue-400" />
                <span className="text-[10px] text-blue-300 tracking-[0.35em] uppercase font-mono">
                  Woi Infra ecosystem
                </span>
              </div>
              <p className="text-xl md:text-2xl font-light text-slate-200 tracking-tight leading-relaxed max-w-sm">
                Connecting physical assets, capital, and innovation across India.
              </p>
            </div>

            {/* Spatial Metadata */}
            <div className="space-y-1.5 font-mono text-[9px] text-slate-500 uppercase tracking-[0.25em]">
              <div className="flex items-center gap-3">
                <span className="text-slate-600">LOC</span>
                <span>12° 58' 34.2" N — 77° 35' 48.1" E</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-600">STATUS</span>
                <span className="flex items-center gap-2 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
                  Accepting Select Commissions
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Disciplines */}
            <div>
              <span className="block text-[9px] uppercase font-mono tracking-[0.25em] text-blue-400/80 mb-6">
                  Focus areas
              </span>
              <ul className="space-y-3.5 text-xs text-slate-400 font-light">
                  {['Venture studios', 'Capital fund', 'Startup park', 'Innovation networks'].map((item) => (
                  <li key={item}>
                    <a href="#services" className="hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio Navigation */}
            <div>
              <span className="block text-[9px] uppercase font-mono tracking-[0.25em] text-blue-400/80 mb-6">
                  Explore
              </span>
              <ul className="space-y-3.5 text-xs text-slate-400 font-light">
                  {[
                    { name: 'Our mission', href: '#about' },
                    { name: 'Venture model', href: '#ecosystems' },
                    { name: 'Capital fund', href: '#capital' },
                    { name: 'Contact', href: '/contact' },
                  ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="block text-[9px] uppercase font-mono tracking-[0.25em] text-blue-400/80 mb-6">
                Direct Inquiries
              </span>
              <a
                href="mailto:hello@atelier.com"
                className="group inline-flex items-center gap-2 text-sm text-white font-light border-b border-white/20 pb-1 hover:border-blue-400 transition-colors"
              >
                <span>hello@woiinfra.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="mt-4 text-xs text-slate-400 leading-relaxed font-light">
                Partnerships, venture ideas, and ecosystem inquiries.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500">
              {["Instagram", "LinkedIn", "Behance", "ArchDaily"].map((network) => (
                <a
                  key={network}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {network}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Large Monolithic Watermark */}
        <div className="py-12 md:py-16 overflow-hidden select-none pointer-events-none">
          <div className="text-[18vw] leading-[0.78] font-thin tracking-[-0.07em] text-white/[0.025] whitespace-nowrap text-center">
          woi infra
          </div>
        </div>

        {/* Sub-Footer Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] uppercase font-mono tracking-[0.2em] text-slate-500">
          <div>
              © 2026 WOI INFRA. BUILDING INDIA'S FUTURE.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms
            </a>
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}