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

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-themed transition-all duration-500 ${activeIndex === index ? 'bg-themed-surface' : ''}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-10 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] group"
              >
                <span className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${activeIndex === index ? 'text-accent font-medium' : 'text-themed group-hover:text-accent'}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-8 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-accent text-white rotate-180' : 'bg-themed-elevated text-themed group-hover:bg-accent group-hover:text-white'}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
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
                    <div className="pb-8 text-themed-secondary leading-relaxed font-light font-sans">
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
