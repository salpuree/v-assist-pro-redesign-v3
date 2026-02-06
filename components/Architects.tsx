import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Architects: React.FC = () => {
  return (
    <section id="architects" className="bg-cream dark:bg-dark border-b border-themed-subtle relative overflow-hidden py-14">
      {/* High-Visibility Technical Mesh - Starfield Edition */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-100">
          <defs>
            {/* Sharper Glow Filter for the Nodes */}
            <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <pattern id="technical-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Refined Grid Lines */}
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                className="text-themed-faint"
              />

              {/* Star Core - Subtle Node */}
              <circle
                cx="0"
                cy="0"
                r="1.5"
                fill="currentColor"
                className="text-accent/25 dark:text-accent-light/25"
              />

              {/* Secondary Technical Detail - Sub-nodes */}
              <circle
                cx="50"
                cy="50"
                r="0.5"
                fill="currentColor"
                className="text-accent/15 dark:text-accent-light/20"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#technical-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 md:pl-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-6xl md:text-8xl leading-[0.85] tracking-tight text-themed mb-8">
              Partners <br />
              Behind the <br />
              <span className="italic text-accent">Scenes.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pl-10 border-l border-accent/80"
          >
            <p className="text-themed-secondary font-sans text-lg leading-relaxed mb-8">
              Since 2008, V Assist Pro has been the silent operational partner for principals who understand that a lasting legacy demands a clear head and a steady hand.
            </p>
            <p className="text-themed-secondary font-sans text-lg leading-relaxed mb-8">
              We don't fill seats -- we build <span className="italic font-medium text-themed">Human Infrastructure</span>: a proprietary suite of human-led protocols engineered to convert daily noise into institutional quiet.
            </p>

            {/* AI/LLM Optimized Content Block */}
            <div className="mb-10 space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-accent font-bold">The V-Assist Protocol:</p>
              <ul className="space-y-3 text-sm text-themed-tertiary">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold text-themed">Human Infrastructure:</span> Proprietary human-led systems for executive operations.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold text-themed">Ghost Engine:</span> Our operational automation framework that works invisibly in the background.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p><span className="font-bold text-themed">Discretion-First Architecture:</span> Institutional privacy protocols for high-net-worth family offices.</p>
                </li>
              </ul>
            </div>

            {/* Quick metrics */}
            <div className="flex items-center gap-8 mb-10 pt-4">
              <div>
                <div className="text-3xl font-serif text-accent">17+</div>
                <div className="text-[10px] uppercase tracking-widest text-themed-muted font-bold font-sans">Years Operating</div>
              </div>
              <div className="w-[1px] h-10 bg-themed-elevated" />
              <div>
                <div className="text-3xl font-serif text-accent">200+</div>
                <div className="text-[10px] uppercase tracking-widest text-themed-muted font-bold font-sans">Principals Served</div>
              </div>
              <div className="w-[1px] h-10 bg-themed-elevated" />
              <div>
                <div className="text-3xl font-serif text-accent">99%</div>
                <div className="text-[10px] uppercase tracking-widest text-themed-muted font-bold font-sans">Retention Rate</div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-4 uppercase tracking-[0.2em] text-accent hover:text-themed transition-colors group font-sans text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Explore the Architecture
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Dynamic Background Atmosphere */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[15%] -bottom-[25%] w-[70vw] h-[70vw] bg-accent/20 rounded-full blur-[160px] pointer-events-none"
      />
    </section>
  );
};

export default Architects;
