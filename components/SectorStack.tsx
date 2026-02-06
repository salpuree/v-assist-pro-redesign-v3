import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Car, Landmark, Briefcase, Building } from 'lucide-react';
import { SECTORS } from '../constants';

const icons = {
  car: Car,
  landmark: Landmark,
  briefcase: Briefcase,
  building: Building
};

const SectorStack: React.FC = () => {
  return (
    <section className="bg-cream dark:bg-dark py-20 pl-20 md:pl-28 relative transition-colors duration-500">

      {/* Decorative large circle background */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-dark/5 dark:border-white/5 pointer-events-none z-0" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-dark/5 dark:border-white/5 pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">

        {SECTORS.map((sector, index) => {
          const IconComponent = icons[sector.icon];

          return (
            <div
              key={sector.id}
              className="sticky top-0 min-h-screen flex items-center justify-center py-20"
              style={{ zIndex: index + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-cream dark:bg-dark w-full max-w-7xl min-h-[85vh] relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-12">

                  {/* Left: Text Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold font-sans">
                        {sector.description}
                      </span>
                      {sector.liveStatus && (
                        <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[9px] font-mono uppercase tracking-widest rounded-full border border-red-500/20 animate-pulse">
                          {sector.liveStatus}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-themed leading-[0.9] mb-8 tracking-tight">
                      {sector.title.split(' & ').map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="text-accent italic font-light">&</span>} <br />
                        </React.Fragment>
                      ))}
                    </h2>

                    <p className="text-xl text-themed-secondary font-light max-w-md leading-relaxed mb-12 border-l border-themed pl-6 font-sans">
                      {sector.subtitle}
                    </p>

                    <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-themed font-bold font-sans">
                      <span className="text-accent font-bold">Deploy Protocol</span>
                      <div className="w-8 h-[1px] bg-current opacity-30"></div>
                      <span className="opacity-50 text-[10px] ml-auto">REF: {sector.ref}</span>
                      <div className="border border-dark dark:border-white rounded-full p-2">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Right: Abstract Graphic */}
                  <div className="relative h-[400px] lg:h-auto flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Concentric Circles */}
                      <div className="w-[400px] h-[400px] rounded-full border border-dark/10 dark:border-white/10" />
                      <div className="absolute w-[300px] h-[300px] rounded-full border border-dark/10 dark:border-white/10" />
                      <div className="absolute w-[500px] h-[500px] rounded-full border border-dark/5 dark:border-white/5" />
                    </div>

                    {/* Central Icon/Graphic */}
                    <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 text-themed">
                      <IconComponent strokeWidth={1} className="w-full h-full opacity-80" />

                      <button className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <ArrowRight className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Middle: Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-dark/10 dark:border-white/10 pt-12">

                  {/* The Friction */}
                  <div className="lg:col-span-4 space-y-8">
                    <h3 className="font-serif text-2xl text-themed">The Friction</h3>
                    {sector.frictions.map((friction, i) => (
                      <div key={i} className="bg-themed-surface p-6 border border-themed-subtle hover:border-accent/30 transition-colors">
                        <h4 className="font-bold text-sm mb-2 text-themed">{friction.title}</h4>
                        <p className="text-xs text-themed-secondary leading-relaxed font-sans">{friction.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* The Protocol */}
                  <div className="lg:col-span-4 space-y-8">
                    <h3 className="font-serif text-2xl text-themed">The VAssist Protocol</h3>
                    <div className="bg-themed-surface p-8 border-l-4 border-accent shadow-sm h-full">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="mt-1">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <h4 className="font-bold text-lg text-themed">{sector.protocol.title}</h4>
                      </div>
                      <p className="text-sm text-themed-secondary leading-relaxed pl-7 font-sans">{sector.protocol.description}</p>
                    </div>
                  </div>

                  {/* Impact Analysis (Black Card) */}
                  <div className="lg:col-span-4">
                    <div className="bg-dark dark:bg-charcoal text-cream p-8 md:p-10 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                      <div className="relative z-10">
                        <div className="text-xs uppercase tracking-widest text-white mb-6 font-bold font-sans">Impact Analysis</div>
                        <h3 className="font-serif text-3xl mb-8">{sector.impact.title}</h3>

                        <div className="space-y-8">
                          {sector.impact.stats.map((stat, i) => (
                            <div key={i}>
                              <div className="text-5xl md:text-6xl font-bold mb-1 tracking-tighter">{stat.value}</div>
                              <div className="text-xs text-white uppercase tracking-wider font-sans">{stat.label}</div>
                              {i < sector.impact.stats.length - 1 && <div className="h-[1px] w-full bg-white/10 my-6"></div>}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Liquid Glass Impact CTA */}
                      <button className="relative group/btn mt-10 w-full overflow-hidden py-4 text-xs font-bold uppercase tracking-widest transition-all duration-500 border border-white/20 rounded-lg hover:border-accent/50 shadow-xl">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl group-hover/btn:bg-accent transition-colors duration-500" />
                        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-1000 pointer-events-none">
                          <div className="absolute -inset-[100%] rotate-45 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        </div>
                        <span className="relative z-10 text-white">{sector.impact.cta}</span>
                      </button>

                      {/* Decorative pattern on card */}
                      <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-tl-full pointer-events-none"></div>
                    </div>
                  </div>

                </div>

              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectorStack;
