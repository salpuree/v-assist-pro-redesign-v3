import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, Lock, ShieldCheck } from 'lucide-react';

interface ExitIntentPopupProps {
    onOpenProtocol: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onOpenProtocol }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [isGracePeriodOver, setIsGracePeriodOver] = useState(false);
    const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

    useEffect(() => {
        // Only start listening after 10 seconds to avoid annoying immediate popups
        const timer = setTimeout(() => {
            setIsGracePeriodOver(true);
        }, 10000);

        const handleMouseEnter = () => setHasEnteredViewport(true);

        const handleMouseLeave = (e: MouseEvent) => {
            // Only trigger if:
            // 1. Grace period is over
            // 2. Not shown yet
            // 3. User actually entered the viewport first (to avoid firing on immediate load if mouse is at top)
            // 4. Mouse is actually leaving at the top
            if (isGracePeriodOver && !hasShown && hasEnteredViewport && e.clientY <= 0) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasShown, isGracePeriodOver, hasEnteredViewport]);

    const closePopup = () => setIsVisible(false);

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="fixed inset-0 z-[100] bg-dark/80 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-cream dark:bg-charcoal rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-themed pointer-events-auto relative">
                            {/* Patterns */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/2" />

                            {/* Close Button */}
                            <button
                                onClick={closePopup}
                                className="absolute top-6 right-6 p-3 hover:bg-dark/5 dark:hover:bg-white/10 rounded-lg transition-colors z-50 pointer-events-auto cursor-pointer"
                                aria-label="Close modal"
                                type="button"
                            >
                                <X size={24} className="text-themed" />
                            </button>

                            <div className="p-8 md:p-12 text-center relative z-10">
                                <motion.div
                                    initial={{ rotate: -10, scale: 0.9 }}
                                    animate={{ rotate: 0, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6"
                                >
                                    <Sparkles size={14} className="text-accent" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Wait – Don't Go Just Yet</span>
                                </motion.div>

                                <h2 className="text-3xl md:text-4xl font-serif text-themed mb-4">
                                    Reclaim your focus <span className="italic">today.</span>
                                </h2>
                                <p className="text-themed-secondary mb-8 max-w-sm mx-auto font-sans">
                                    You’re just one briefing away from eliminating operational noise. Secure your slot before Q1 onboarding closes.
                                </p>

                                <div className="flex flex-col gap-4">
                                    <button
                                        onClick={() => {
                                            onOpenProtocol();
                                            closePopup();
                                        }}
                                        className="w-full py-5 bg-accent text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] shadow-xl shadow-accent/20 uppercase tracking-widest text-sm"
                                    >
                                        Secure Your Slot Now
                                        <ArrowRight size={18} />
                                    </button>

                                    <div className="flex items-center justify-center gap-6 opacity-60">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck size={14} className="text-accent" />
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-themed-tertiary">100% Private</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Lock size={14} className="text-accent" />
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-themed-tertiary">Discretion Protocol</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Banner */}
                            <div className="bg-dark py-3 px-8 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">Only 1 Principal Slot Left</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-red-500 font-bold">Priority Status</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentPopup;
