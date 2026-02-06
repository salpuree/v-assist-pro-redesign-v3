import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface MobileHeaderProps {
  onBack: () => void;
  onHomeClick: () => void;
  title?: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ onBack, onHomeClick, title }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:hidden glass-panel">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-themed-elevated transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Go back"
        >
          <ArrowLeft size={18} className="text-themed" />
          <span className="text-xs uppercase tracking-wider font-bold text-themed-tertiary font-sans">Back</span>
        </button>

        {title && (
          <span className="text-xs uppercase tracking-[0.15em] font-bold text-themed-tertiary font-sans truncate max-w-[50%] text-center">
            {title}
          </span>
        )}

        <button
          onClick={onHomeClick}
          className="p-2 rounded-lg hover:bg-themed-elevated transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Go home"
        >
          <Home size={18} className="text-themed" />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
