import React from 'react';
import { Moon, Sun, Plus, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import MenuOverlay from './MenuOverlay';

interface MobileSidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onOpenProtocol: () => void;
  onHomeClick: () => void;
  onSelectSector: (id: number) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  toggleTheme,
  onOpenProtocol,
  onHomeClick,
  onSelectSector,
}) => {
  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 h-20 flex items-center justify-between px-6 glass-panel z-40 md:hidden shadow-themed-elevated">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-themed-elevated transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {isDarkMode ? (
            <Sun size={20} className="text-accent dark:text-accent-light" />
          ) : (
            <Moon size={20} className="text-accent dark:text-accent-light" />
          )}
        </button>

        {/* Center - Waitlist section */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center justify-center gap-2 text-themed-secondary text-[9px] font-sans">
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
            <span className="uppercase tracking-wider">Waitlist Active</span>
          </div>
          <button
            onClick={onOpenProtocol}
            className="px-2 py-1 bg-accent/20 hover:bg-accent/30 text-accent uppercase tracking-wider text-[9px] font-semibold rounded-sm transition-all duration-300 border border-accent/50 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Join Now
          </button>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenProtocol}
          className="w-10 h-10 bg-accent dark:bg-accent-light text-white rounded-lg flex items-center justify-center shadow-lg transition-all"
        >
          <Plus size={20} />
        </motion.button>
      </nav>

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

export default MobileSidebar;
