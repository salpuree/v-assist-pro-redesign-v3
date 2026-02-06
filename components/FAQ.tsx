import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="evidence" className="bg-cream dark:bg-dark py-32 border-t border-themed transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-5xl md:pl-28 pb-24">
        <div className="text-left mb-20">
          <h4 className="text-xs uppercase tracking-[0.3em] mb-4 text-accent font-bold font-sans">Operational Intelligence</h4>
          <h2 className="text-5xl md:text-7xl font-serif text-themed leading-tight">
            Institutional <span className="text-accent">clarity.</span>
          </h2>
          <p className="mt-6 text-lg text-themed-secondary max-w-2xl font-sans leading-relaxed">
            We operate with radical transparency. If your question isn't addressed here, our principals are available for direct inquiry.
          </p>
        </div>

        <div className="space-y-0">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-themed transition-all duration-500 ${activeIndex === index ? 'bg-themed-surface' : ''}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center gap-6 py-8 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent group"
              >
                <span className={`text-xs font-mono tracking-widest flex-shrink-0 transition-colors duration-300 ${activeIndex === index ? 'text-accent' : 'text-themed-muted'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`text-lg md:text-xl font-serif transition-colors duration-300 flex-1 ${activeIndex === index ? 'text-accent' : 'text-themed group-hover:text-accent'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-accent text-white' : 'border border-themed text-themed-muted group-hover:border-accent group-hover:text-accent'}`}>
                  {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-12 border-l-2 border-accent/30 ml-4 text-themed-secondary leading-relaxed font-light font-sans text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
