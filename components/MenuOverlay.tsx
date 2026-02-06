import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { SECTORS } from '../constants';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
  onOpenProtocol?: () => void;
  onHomeClick?: () => void;
  onSelectSector?: (id: number) => void;
}

const links = [
  { name: "Home", number: "00", id: "home" },
  { name: "Verticals", number: "01", id: "verticals" },
  { name: "How It Works", number: "02", id: "methodology" },
  { name: "Operations Hub", number: "03", id: "integrations" },
  { name: "Evidence", number: "04", id: "evidence" },
];

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose, isDarkMode, onOpenProtocol, onHomeClick }) => {
  const handleScroll = (id: string) => {
    onClose();
    if (onHomeClick) onHomeClick();

    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 350);
  };

  const handleSectorClick = (id: number) => {
    onClose();
    if (onSelectSector) onSelectSector(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAction = () => {
    onClose();
    if (onOpenProtocol) onOpenProtocol();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Deep Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-md"
          />

          {/* Half-width Liquid Glass Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[60%] md:w-[40%] lg:w-[35%] min-w-[350px] z-[60] flex flex-col bg-white/80 dark:bg-black/60 backdrop-blur-3xl shadow-[20px_0_100px_rgba(0,0,0,0.2)] dark:shadow-[80px_0_120px_rgba(0,0,0,0.6)] border-r border-white/20 dark:border-white/10 overflow-hidden"
          >
            {/* Liquid Background Accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Close Button Inside Panel */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-3 hover:scale-110 hover:rotate-90 transition-all duration-500 rounded-full bg-themed-elevated text-themed z-20"
            >
              <X size={24} />
            </button>

            <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12 relative z-10 text-themed h-full max-h-screen">
              {/* Logo / Title Area (Optional height reduction) */}
              <div className="mb-8 md:mb-12">
                <p className="text-[10px] font-bold tracking-[0.6em] text-accent uppercase opacity-50">Private Terminal</p>
              </div>

              <div className="flex flex-col gap-2 md:gap-3 overflow-y-auto no-scrollbar pr-4">
                {[
                  { name: "Home", number: "00", id: "home" },
                  { name: "Industries we service", number: "01", id: "industries", isParent: true },
                  { name: "How It Works", number: "02", id: "methodology" },
                  { name: "Operations Hub", number: "03", id: "integrations" },
                  { name: "FAQs", number: "04", id: "evidence" },
                ].map((link, index) => (
                  <div key={link.id} className="flex flex-col">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={() => !link.isParent && handleScroll(link.id)}
                      className={`group flex items-baseline border-b border-dark/5 dark:border-white/5 pb-2 transition-colors ${!link.isParent ? 'cursor-pointer hover:border-accent/40' : 'mb-2'}`}
                    >
                      <span className="text-[10px] mr-6 opacity-40 group-hover:text-accent group-hover:opacity-100 transition-all font-bold tracking-widest font-sans">{link.number}</span>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic tracking-tight group-hover:translate-x-2 transition-transform duration-500 group-hover:text-accent">
                        {link.name}
                      </h2>
                    </motion.div>

                    {link.isParent && (
                      <div className="flex flex-col gap-2 pl-12 mb-4">
                        {SECTORS.map((sector, sIdx) => (
                          <motion.button
                            key={sector.id}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + sIdx * 0.05 }}
                            onClick={() => handleSectorClick(sector.id)}
                            className="flex items-center gap-2 group/sub text-left py-0.5"
                          >
                            <ChevronRight size={12} className="text-accent/40 group-hover/sub:text-accent transition-colors" />
                            <span className="text-xs md:text-sm font-light text-dark/70 dark:text-cream/60 group-hover/sub:text-accent group-hover/sub:translate-x-1 transition-all">
                              {sector.title.split(' & ')[0]}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Compressed Footer to avoid scrollbar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 md:mt-16 grid grid-cols-1 gap-6 md:gap-8"
              >
                <div className="font-sans space-y-1">
                  <p className="text-lg md:text-xl font-medium text-themed">(941) 623-4590</p>
                  <div className="text-lg md:text-xl hover:text-accent cursor-pointer transition-colors text-themed-secondary font-medium">
                    <p>info@vassistproinc.com</p>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleAction}
                    className="group relative bg-dark dark:bg-white text-cream dark:text-dark px-8 py-4 font-bold tracking-[0.3em] uppercase text-[10px] hover:bg-accent dark:hover:bg-accent hover:text-white transition-all duration-500 overflow-hidden"
                  >
                    <span className="relative z-10 font-[700]">Secure Your Slot</span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
