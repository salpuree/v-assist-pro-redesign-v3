import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Telescope,
  DraftingCompass,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CircleDot
} from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const icons = {
  "01": Telescope,
  "02": DraftingCompass,
  "03": Cpu,
  "04": ShieldCheck
};

const ProcessHorizontal: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Progress line for the "Engine Flow"
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} id="methodology" className="relative h-[500vh] bg-cream dark:bg-dark text-themed">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Connection Line (The Ghost Flow) */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-themed-elevated z-0 pointer-events-none" />
        <motion.div
          style={{ width: lineWidth }}
          className="absolute top-1/2 left-0 h-[1px] bg-accent shadow-[0_0_15px_rgba(0,95,115,0.5)] z-0 pointer-events-none"
        />

        <div className="absolute top-12 left-6 md:left-24 z-10 pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-serif text-themed">
            <span className="italic opacity-60">How It Works</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-0">
          {/* Intro Card */}
          <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-12 border-r border-themed relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-accent/5 to-transparent pointer-events-none"></div>

            {/* Spinning Schematic Element */}
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.05] dark:opacity-10">
              <div className="absolute inset-0 border border-dark dark:border-white rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-dark dark:border-white rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 border border-dark/50 dark:border-white/50 rounded-full animate-[spin_30s_linear_infinite]" />
            </div>

            <div className="max-w-2xl relative z-10">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-12 border border-accent/30 shadow-2xl">
                <CircleDot className="animate-pulse" size={32} />
              </div>
              <div className="text-xl md:text-4xl font-light leading-relaxed mb-6 text-themed font-sans">
                <span>Talent is a variable.</span>
                <br />
                <span className="italic text-accent">Infrastructure is a constant.</span>
              </div>
              <p className="text-lg text-themed-secondary font-light leading-relaxed font-sans">
                We replace hero-dependency with the <span className="text-themed font-medium">Ghost Engine</span> -- a bespoke system of elite human partners and operational protocols that converts daily friction into scalable, institutional quiet.
              </p>
              <div className="mt-12 flex items-center gap-4 text-[10px] font-mono tracking-[0.4em] text-accent font-bold">
                <div className="w-8 h-[1px] bg-accent/50" />
                <span>SCROLL TO EXPLORE</span>
                <ArrowRight size={14} className="animate-bounce-x" />
              </div>
            </div>
          </div>

          {/* Steps Cards */}
          {PROCESS_STEPS.map((step) => {
            const IconComponent = icons[step.number as keyof typeof icons];
            return (
              <div key={step.number} className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-6 md:p-24 border-r border-themed relative overflow-hidden group">
                {/* Visual "Node" Graphic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
                  <div className="absolute inset-0 bg-accent/5 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                  {/* Left Side: Number and Icon Visualization */}
                  <div className="relative flex items-center justify-center">
                    <div className="text-[15rem] md:text-[25rem] font-serif leading-none opacity-[0.03] select-none absolute">
                      {step.number}
                    </div>

                    {/* The "Premium" Icon Node */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
                    >
                      {/* Animated Rings */}
                      <div className="absolute inset-0 border border-white/5 rounded-full" />
                      <div className="absolute inset-4 border border-accent/20 rounded-full group-hover:border-accent/50 transition-colors duration-500" />
                      <div className="absolute inset-8 border border-white/5 rounded-full animate-slow-spin" />

                      {/* Floating Icon */}
                      <div className="relative z-20 w-24 h-24 bg-themed border border-themed rounded-3xl flex items-center justify-center text-accent shadow-2xl shadow-accent/20 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500">
                        <IconComponent strokeWidth={1} size={48} />
                      </div>

                      {/* Pulsing Dots */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(0,95,115,1)]" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/20 rounded-full" />
                    </motion.div>
                  </div>

                  {/* Right Side: Copy */}
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-xs font-mono text-accent font-bold tracking-[0.3em]">PHASE {step.number}</span>
                      <div className="h-[1px] w-12 bg-accent/30"></div>
                    </div>
                    <h3 className="text-5xl md:text-8xl font-serif mb-8 tracking-tight group-hover:text-accent transition-colors duration-500 text-themed">{step.title}</h3>
                    <p className="text-xl md:text-2xl font-light text-themed-secondary leading-relaxed border-l border-accent/30 pl-8 max-w-lg font-sans">
                      {step.description}
                    </p>

                    <div className="mt-12 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessHorizontal;
