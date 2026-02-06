import React from 'react';
import { Moon, Sun, Plus, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import MenuOverlay from './MenuOverlay';

interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onOpenProtocol: () => void;
  onHomeClick: () => void;
  onSelectSector: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, setIsMenuOpen, isDarkMode, toggleTheme, onOpenProtocol, onHomeClick, onSelectSector }) => {
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-16 md:w-20 flex flex-col justify-between items-center py-8 transition-all duration-500 overflow-hidden z-[60]">

        {/* Liquid Glass Background Layer - Enhanced for Light Mode Visibility */}
        <div className="absolute inset-0 bg-cream/95 dark:bg-dark/95 backdrop-blur-md z-0 transition-colors duration-500" />

        {/* Animated Liquid Core - Optimized for Dark Mode Glow & Light Mode Presence */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [-40, 40, -40],
            y: [-80, 80, -80]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-15 dark:opacity-50 pointer-events-none z-0
                     bg-[radial-gradient(circle_at_center,_rgba(25,171,228,0.3)_0%,_rgba(10,147,150,0.05)_50%,_transparent_100%)]
                     dark:bg-[radial-gradient(circle_at_center,_rgba(25,171,228,0.25)_0%,_rgba(0,119,182,0.05)_50%,_transparent_100%)]
                     blur-[120px]"
        />

        {/* Logo removed - moved to banner */}

        {/* Menu Trigger */}
        <div className="relative z-10 flex flex-col items-center select-none gap-4 mt-28">
          <button
            className="flex flex-col items-center cursor-pointer group transition-colors p-3 hover:bg-dark/5 dark:hover:bg-white/10 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle menu"
          >
            {/* Burger Menu Icon - Three Lines */}
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-[2.5px] bg-accent dark:bg-accent-light transition-colors rounded-full shadow-sm"></span>
              <span className="block w-6 h-[2.5px] bg-accent dark:bg-accent-light transition-colors rounded-full shadow-sm"></span>
              <span className="block w-6 h-[2.5px] bg-accent dark:bg-accent-light transition-colors rounded-full shadow-sm"></span>
            </div>
            <span className="writing-vertical-lr text-[11px] font-medium tracking-[0.5em] uppercase text-accent dark:text-accent-light transition-colors">
              Menu
            </span>
          </button>
        </div>

        {/* Center - Theme Toggle */}
        <div className="relative z-10 flex flex-col items-center gap-16">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            className="w-12 h-12 rounded-full flex items-center justify-center text-themed shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-accent hover:text-white dark:hover:bg-accent-light bg-accent/20 border border-accent/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Bottom Action - Triggers Protocol Overlay */}
        <div className="relative z-10 mb-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onOpenProtocol}
            className="w-14 h-14 bg-accent dark:bg-accent-light text-white rounded-2xl flex items-center justify-center shadow-[0_20px_40px_rgba(25,171,228,0.3)] dark:shadow-[0_20px_40px_rgba(0,180,216,0.3)] transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <Plus size={28} className="relative z-10" />
          </motion.button>
        </div>
      </aside>

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isDarkMode={isDarkMode}
        onOpenProtocol={onOpenProtocol}
        onHomeClick={onHomeClick}
        onSelectSector={onSelectSector}
      />
    </>
  );
};

export default Sidebar;
