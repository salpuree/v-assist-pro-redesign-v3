import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import logoDark from '../logo-dark.png';
import logoLight from '../logo-light.png';
import CountdownTimer from './CountdownTimer';

interface StickyHeaderBannerProps {
  isDarkMode: boolean;
  onOpenProtocol?: () => void;
}

const StickyHeaderBanner: React.FC<StickyHeaderBannerProps> = ({ isDarkMode, onOpenProtocol }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-cream/95 dark:bg-dark/95 backdrop-blur-md transition-colors duration-500 hidden md:block shadow-[0_1px_0_var(--border-default)]"
    >
      <div className="w-full h-16 md:h-20 flex items-center relative px-4 md:px-6 md:pl-[84px]">
        {/* Left - Logo & Est (offset right to clear the sidebar) */}
        <div className="flex flex-col items-start justify-center flex-shrink-0 relative h-full">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="V-Assist Pro"
            className="h-7 md:h-8 w-auto object-contain"
          />
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold text-themed-muted font-sans">
            EST. 2008
          </span>
        </div>

        {/* Center - Status Pill (Absolutley positioned for perfect horizontal centering) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-4 bg-themed-surface border border-themed rounded-full px-6 py-2 shadow-inner z-10 transition-all duration-300 backdrop-blur-sm">
          <div className="flex items-center gap-2 pr-4 border-r border-themed">
            <Lock size={12} className="text-accent" />
            <span className="text-themed text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-bold whitespace-nowrap font-sans">
              Exclusive Onboarding
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[9px] xl:text-[10px] uppercase tracking-[0.2em] font-black text-accent/80 whitespace-nowrap">Q1 CLOSES SOON</span>
            <div className="w-px h-3 bg-themed-strong" />
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
              <span className="text-[10px] xl:text-[11px] uppercase tracking-widest font-black text-red-600 font-sans">
                Limited Slots
              </span>
            </div>
            <div className="w-px h-3 bg-themed-strong" />
            <div className="shrink-0">
              <CountdownTimer compact={true} />
            </div>
          </div>
        </div>

        {/* Right side content with border-b that starts AFTER the sidebar */}
        <div className="flex-1 flex items-center justify-end h-full px-0">
          {/* Right Area - Waitlist & Join */}
          <div className="flex items-center gap-4 xl:gap-8 text-themed-tertiary text-sm flex-shrink-0 font-sans">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(25,171,228,0.5)]" />
              <span className="uppercase tracking-[0.1em] text-[10px] xl:text-[11px] font-bold text-themed-tertiary whitespace-nowrap">Waitlist Active</span>
            </div>
            <button
              onClick={onOpenProtocol}
              className="px-5 xl:px-8 py-2 bg-accent text-white uppercase tracking-widest text-[10px] xl:text-[11px] font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-accent/25 whitespace-nowrap"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyHeaderBanner;
