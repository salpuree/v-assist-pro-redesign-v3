import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Car, Landmark, Briefcase, Building } from 'lucide-react';
import { SECTORS } from '../constants';

const icons = {
  car: Car,
  landmark: Landmark,
  briefcase: Briefcase,
  building: Building
};

interface IndustrySelectorProps {
  onSelectSector: (id: number) => void;
}

const IndustrySelector: React.FC<IndustrySelectorProps> = ({ onSelectSector }) => {
  return (
    <section id="verticals" className="bg-cream dark:bg-dark pl-20 md:pl-28 relative py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-32 max-w-4xl">
          <h4 className="text-xs font-mono uppercase tracking-[0.4em] mb-8 font-bold text-accent">Service Lines</h4>
          <h3 className="font-serif text-6xl md:text-8xl text-themed leading-[0.9] tracking-tighter">
            <span>Built for <span className="italic font-light text-accent">Your Industry.</span></span>
          </h3>
          <p className="mt-12 text-xl md:text-2xl font-light max-w-2xl leading-relaxed text-themed-secondary">
            From customer communication outsourcing to executive operations management, we provide specialized support tailored to high-velocity sectors where operational noise is the primary bottleneck.
          </p>
        </div>

        {/* Sticky Stacking Grid */}
        <div className="space-y-[15vh] pb-[20vh]">
          {SECTORS.map((sector, index) => {
            const IconComponent = icons[sector.icon];

            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  top: `${120 + index * 40}px`,
                }}
                className="sticky group z-[1]"
              >
                <button
                  onClick={() => onSelectSector(sector.id)}
                  className="w-full text-left bg-themed-secondary border border-themed shadow-themed-card p-10 md:p-20 flex flex-col md:flex-row gap-16 items-center transition-all duration-700 hover:border-accent hover:scale-[1.01] relative overflow-hidden group/card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <div className="absolute inset-0 bg-themed-secondary opacity-100 z-0" />

                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-themed border border-themed rounded-full flex items-center justify-center transition-all duration-700 group-hover/card:bg-accent group-hover/card:border-accent text-accent">
                      <IconComponent size={40} strokeWidth={1} className="transition-colors duration-500 group-hover/card:text-white" />
                    </div>
                  </div>

                  <div className="flex-grow relative z-10">

                    <h4 className="text-4xl md:text-5xl text-themed mb-8 tracking-tighter transition-colors duration-500 font-serif">
                      <span className="group-hover/card:text-accent transition-colors duration-500">{sector.title}</span>
                    </h4>

                    <p className="text-lg md:text-xl font-light text-themed leading-relaxed italic font-sans">
                      "{sector.subtitle}"
                    </p>
                  </div>

                  <div className="flex-shrink-0 relative z-10 hidden lg:block">
                    <div className="w-16 h-16 rounded-full border border-themed flex items-center justify-center text-themed group-hover/card:bg-accent group-hover/card:text-white transition-all">
                      <ArrowRight size={24} className="group-hover/card:-rotate-45 transition-transform" />
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustrySelector;
