import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Sparkles
} from 'lucide-react';

import { SECTORS } from '../constants';

interface FooterProps {
  onOpenProtocol?: () => void;
  onSelectSector?: (id: number) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenProtocol, onSelectSector }) => {
  const handleScroll = (id: string) => {
    if (onSelectSector) {
      onSelectSector(null as any); // Type cast if necessary or use 0/null
    }

    // Small delay to allow home content to mount if we were on a subpage
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-dark text-cream pt-24 pb-12 overflow-hidden relative">
      {/* Ghost Aura Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,_rgba(25,171,228,0.15),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:pl-32 lg:pr-12 relative z-10 flex flex-col">

        {/* Cinematic CTA Section */}
        <div className="flex flex-col items-start mb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-4"
          >
            <Sparkles size={14} className="text-accent animate-pulse" />
            <div className="h-[1px] w-8 bg-accent/40"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-sans">Ready to reclaim your focus?</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h2 className="font-serif text-5xl md:text-7xl leading-tight tracking-tight text-white mb-4">
              Stop managing <span className="italic font-light text-white/90">the noise.</span>
            </h2>
            <div className="font-serif italic text-4xl md:text-6xl text-accent">
              Claim Focus.
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <button
              onClick={onOpenProtocol}
              className="group relative px-10 py-5 flex items-center gap-6 overflow-hidden rounded-xl border border-white/20 shadow-xl transition-all duration-500 hover:border-accent/50 hover:shadow-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl z-0" />
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-accent transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 text-sm md:text-base tracking-[0.3em] font-bold uppercase text-white">Secure Your Slot</span>
              <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Navigation Readout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-24 border-b border-white/5">
          {/* Brand Column */}
          <div className="space-y-8 lg:col-span-1">
            <div className="space-y-6">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F5197203d26324a14a7c754f2f94e8a71%2F9089607cf9e440629092c9b67d4b2b1c" alt="VAssist Pro" className="h-10 w-auto object-contain" />
              <p className="text-white/70 leading-relaxed font-light text-sm font-sans">
                We deploy the human infrastructure that ensures your legacy functions perfectly, even when life gets complicated.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Private Comms</h4>
              <a href="tel:+19416234590" className="text-white text-xl font-light block hover:text-accent transition-colors">(941) 623-4590</a>
              <a href="mailto:info@vassistproinc.com" className="text-white/60 hover:text-accent transition-colors block text-xs underline underline-offset-4">info@vassistproinc.com</a>
            </div>
          </div>

          {/* Sectors Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Industries</h4>
            <ul className="space-y-4 font-light text-white/80 font-sans">
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <button
                    onClick={() => {
                      if (onSelectSector) onSelectSector(sector.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-accent transition-colors text-sm text-left block"
                  >
                    {sector.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Global Offices</h4>
            <ul className="space-y-4 font-light text-white/80 font-sans">
              <li>
                <span className="block text-sm font-bold text-white mb-1">Florida</span>
                <span className="block text-xs text-white/40">Naples / Palm Beach / Orlando</span>
              </li>
              <li>
                <span className="block text-sm font-bold text-white mb-1">Miami</span>
                <span className="block text-xs text-white/40">South Florida Division</span>
              </li>
              <li>
                <span className="block text-sm font-bold text-white mb-1">National</span>
                <span className="block text-xs text-white/40">Coast-to-Coast Support</span>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Company</h4>
            <ul className="space-y-4 font-light text-white/80 font-sans">
              <li><button onClick={() => handleScroll('home')} className="hover:text-accent transition-colors text-sm">Home</button></li>
              <li><button onClick={() => handleScroll('architects')} className="hover:text-accent transition-colors text-sm">Our Architects</button></li>
              <li><button onClick={() => handleScroll('faq')} className="hover:text-accent transition-colors text-sm">FAQs</button></li>
              <li><button onClick={onOpenProtocol} className="hover:text-accent transition-colors text-sm">Join Waitlist</button></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] opacity-40 font-bold font-sans">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Globe size={12} className="text-accent" />
              <span>Global Operations Division</span>
            </div>
          </div>

          <p className="text-center">© {new Date().getFullYear()} V Assist Pro Inc. • Professional Discretion Guaranteed</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
