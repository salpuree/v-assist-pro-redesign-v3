import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Lock, Download } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import LeadMagnetGuide from './LeadMagnetGuide';

import logoDark from '../logo-dark.png';
import logoLight from '../logo-light.png';

interface MobileHeroProps {
  onOpenProtocol?: () => void;
  isMenuOpen?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
}

const MobileHero: React.FC<MobileHeroProps> = ({ onOpenProtocol, isMenuOpen = false, setIsMenuOpen }) => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-cream dark:bg-dark transition-colors duration-500 pb-28 pt-20">
      {/* Simplified Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream dark:from-dark dark:via-charcoal dark:to-dark" />

        {/* Subtle dot grid for mobile */}
        <motion.div
          animate={{ opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none dark:hidden"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(25, 171, 228, 0.3) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(25, 171, 228, 0.2) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Single gradient orb for mobile */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[15%] w-[300px] h-[300px] rounded-full opacity-30 blur-[80px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(25, 171, 228, 0.4) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Scarcity Banner - Sticky at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 px-4 py-3 cursor-pointer group border-b border-dark/5 dark:border-white/5 backdrop-blur-md bg-cream/70 dark:bg-dark/80"
      >
        <div className="flex flex-col gap-2">
          {/* Top row - Logo and JOIN NOW */}
          <div className="flex items-center justify-between px-1 gap-2">
            {/* Logo Section - left */}
            <div className="flex flex-col items-start gap-0.5">
              <img
                src={logoDark}
                alt="V Assist Pro"
                className="h-6 w-auto object-contain hidden dark:block"
              />
              <img
                src={logoLight}
                alt="V Assist Pro"
                className="h-6 w-auto object-contain block dark:hidden"
              />
              <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-themed-muted font-sans">
                EST. 2008
              </span>
            </div>

            {/* Right side - Hamburger menu */}
            <button
              className="flex flex-col gap-1 items-end p-2 hover:bg-dark/5 dark:hover:bg-white/10 rounded transition-colors"
              onClick={() => setIsMenuOpen?.(true)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-[2.5px] bg-accent dark:bg-accent-light rounded-full" />
              <span className="block w-4 h-[2.5px] bg-accent dark:bg-accent-light rounded-full" />
              <span className="block w-6 h-[2.5px] bg-accent dark:bg-accent-light rounded-full" />
            </button>
          </div>

          {/* Bottom row - Countdown Timer */}
          <div className="flex items-center justify-center gap-3 mt-2 pt-2 border-t border-themed-subtle">
            <div className="flex items-center gap-2">
              <Lock size={10} className="text-red-600" />
              <span className="text-themed text-[9px] uppercase tracking-[0.15em] font-bold font-sans">
                Exclusive Onboarding
              </span>
            </div>
            <div className="w-px h-3 bg-dark/20 dark:bg-white/20" />
            <CountdownTimer compact={true} />
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-4 relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-3"
        >
          <Sparkles size={14} className="animate-pulse text-accent" />
          <span className="tracking-[2px] text-[9px] font-bold text-accent font-sans uppercase text-center">
            Executive Operations & Client Communications, Handled
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4"
        >
          <h1 className="font-serif text-themed">
            <span className="block text-5xl leading-[48px] font-semibold tracking-tighter mb-2">
              Your focus,
            </span>
            <span className="block italic text-accent text-[44px] leading-[48px] font-semibold tracking-tighter">
              Uninterrupted.
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 max-w-sm"
        >
          <div className="text-themed-secondary text-center font-sans text-base leading-relaxed">
            <p className="mb-4">
              Whether you run a luxury fleet, manage a family office, or close million-dollar deals, one problem persists: <span className="font-semibold italic">operational noise drowns out what matters.</span>
            </p>
            <p className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4">
              Save 15+ hours/week &bull; Reduce operational noise by 70%
            </p>
            <p>
              We deploy dedicated human partners who own your communications and operations -- so you stay focused on growth and strategy.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={onOpenProtocol}
          className="group relative w-full px-8 py-4 flex items-center justify-center gap-3 overflow-hidden rounded-lg bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25 transition-all duration-500 hover:shadow-accent/40 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent mb-4"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
          <span className="relative z-20 uppercase tracking-[0.15em] text-xs font-bold text-white font-sans">
            Secure Your Slot
          </span>
          <ArrowRight className="relative z-20 w-4 h-4 group-hover:translate-x-1 transition-all duration-500 text-white" />
        </motion.button>

        {/* Trust Indicators for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={10} className="text-accent" />
            <span className="text-[10px] uppercase tracking-wider font-bold text-themed-tertiary">100% Confidential</span>
          </div>
          <div className="w-1 h-1 bg-themed-faint rounded-full" />
          <div className="flex items-center gap-1.5">
            <Lock size={10} className="text-accent" />
            <span className="text-[10px] uppercase tracking-wider font-bold text-themed-tertiary">30-Day Guarantee</span>
          </div>
        </motion.div>

        {/* Free Guide CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setIsGuideOpen(true)}
          className="w-full px-6 py-4 flex items-center justify-center gap-2 border-2 border-accent/40 hover:border-accent text-accent dark:text-accent-light rounded-lg transition-all duration-500 bg-transparent hover:bg-accent/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent mb-6"
        >
          <Download size={16} />
          <span className="uppercase tracking-[0.1em] text-xs font-semibold font-sans">
            Get Free Operations Guide
          </span>
        </motion.button>

        <div className="mb-8" />

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-themed-secondary backdrop-blur-3xl border border-themed shadow-themed-card rounded-xl group w-full max-w-sm p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-themed mb-2 font-sans text-base font-semibold italic">
                Human Intelligence
              </h4>
              <p className="text-themed-secondary text-sm font-sans leading-relaxed">
                We are a boutique firm of people, not software. We learn your voice and preferences, and the rhythm of your business.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lead Magnet Modal */}
        <LeadMagnetGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
      </div>
    </section>
  );
};

export default MobileHero;
