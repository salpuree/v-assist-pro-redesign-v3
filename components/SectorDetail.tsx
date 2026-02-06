import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Car, Landmark, Briefcase, Building, Quote, TrendingUp } from 'lucide-react';
import { SectorCard } from '../types';

const icons = {
  car: Car,
  landmark: Landmark,
  briefcase: Briefcase,
  building: Building
};

interface SectorDetailProps {
  sector: SectorCard;
  onBack: () => void;
  onOpenProtocol?: () => void;
}

const SectorDetail: React.FC<SectorDetailProps> = ({ sector, onBack, onOpenProtocol }) => {
  const IconComponent = icons[sector.icon];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sector]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream dark:bg-dark min-h-screen pt-24 pb-20 pl-6 md:pl-28 pr-6 relative"
    >
      {/* Navigation */}
      <button
        onClick={onBack}
        className="mb-12 flex items-center gap-3 text-xs uppercase tracking-widest text-themed hover:text-accent transition-colors group font-sans font-bold"
      >
        <div className="p-2 rounded-full border border-themed group-hover:border-accent">
          <ArrowLeft size={16} />
        </div>
        Back to Sectors
      </button>

      <div className="container mx-auto">
        {/* Hero Section with Header & Protocol Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Left Header */}
          <div>
            <div className="flex items-center gap-4 mb-8 flex-wrap">
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold font-sans">
                {sector.description}
              </span>
              {sector.liveStatus && (
                <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[9px] font-mono uppercase tracking-widest rounded-full border border-red-500/20 animate-pulse">
                  {sector.liveStatus}
                </span>
              )}
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-themed leading-[0.9] mb-8 tracking-tight">
              {sector.title}
            </h1>

            <p className="text-xl text-themed-secondary font-light max-w-md leading-relaxed mb-12 border-l-2 border-accent pl-6 font-sans">
              {sector.subtitle}
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 text-accent rounded-sm">
              <IconComponent size={20} />
              <span className="text-xs font-bold uppercase tracking-wider">Vertical Specialist Assigned</span>
            </div>
          </div>

          {/* Right Protocol Stats */}
          <div className="bg-themed-secondary p-8 md:p-12 border border-themed shadow-themed-card">
            <h3 className="font-serif text-2xl text-themed mb-8">Protocol Impact</h3>
            <div className="space-y-8">
              {sector.impact.stats.map((stat, i) => (
                <div key={i} className="flex items-center justify-between border-b border-themed-subtle pb-4">
                  <span className="text-xs text-themed-secondary uppercase tracking-wider font-sans">{stat.label}</span>
                  <span className="text-3xl md:text-4xl font-bold text-themed">{stat.value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={onOpenProtocol}
              className="mt-12 w-full bg-accent hover:bg-accent-light text-white py-5 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-between px-6"
            >
              <span>{sector.impact.cta}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Hero Image with Testimonial Overlay */}
        <div className="mb-20 relative overflow-hidden rounded-xl h-[400px] md:h-[550px] shadow-2xl border border-themed-subtle">
          <img
            src={sector.imagePlaceholder}
            alt={sector.title}
            className="w-full h-full object-cover object-center"
          />
          {sector.testimonial && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                padding: '48px'
              }}
            >
              <div className="max-w-2xl text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Quote size={24} className="flex-shrink-0 text-white" />
                  {sector.testimonial.role.includes('NDA') && (
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 bg-accent/30 rounded backdrop-blur-md text-white border border-white/10">
                      {sector.testimonial.role.split('(')[1].replace(')', '')}
                    </span>
                  )}
                </div>
                <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-6 italic">
                  "{sector.testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-white text-base tracking-wide">{sector.testimonial.author}</p>
                  <p className="text-xs text-white/70 uppercase tracking-widest mt-1">{sector.testimonial.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* The Friction Section */}
        <div className="mb-32 border-t border-themed-subtle pt-20">
          <h2 className="font-serif text-4xl md:text-5xl text-themed mb-6">The Friction</h2>
          <p className="text-lg text-themed-secondary mb-12 max-w-3xl font-sans">
            The specific operational bottlenecks holding this industry back.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sector.frictions.map((friction, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-red-500/5 p-8 border-l-4 border-red-500/40 hover:border-red-500/60 transition-colors"
              >
                <h4 className="font-bold text-lg mb-2 text-themed">{friction.title}</h4>
                <p className="text-sm text-themed-secondary leading-relaxed font-sans">{friction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Vortex Solution - Multiple Solutions */}
        <div className="mb-32">
          <h2 className="font-serif text-4xl md:text-5xl text-themed mb-6">The Vortex Solution</h2>
          <p className="text-lg text-themed-secondary mb-12 max-w-3xl font-sans">
            {sector.protocol.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {(sector.solutions || []).map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-green-500/5 p-8 border-l-4 border-green-500/40 hover:border-green-500/60 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-green-500/20 rounded-full flex-shrink-0">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-themed mb-2">{solution.title}</h4>
                    <p className="text-sm text-themed-secondary leading-relaxed font-sans">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        {sector.caseStudy && (
          <div className="mb-32">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-12 md:p-16 border border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={24} className="text-accent" />
                <span className="text-xs uppercase tracking-widest font-bold text-accent">Case Study</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-themed mb-4">
                {sector.caseStudy.title}
              </h3>
              <p className="text-lg text-themed-secondary mb-8 leading-relaxed max-w-3xl font-sans">
                {sector.caseStudy.outcome}
              </p>
              <div className="flex flex-wrap gap-4">
                {sector.caseStudy.metrics.map((metric, i) => (
                  <div key={i} className="px-4 py-2 bg-themed-secondary border border-themed rounded-sm text-sm font-semibold text-themed">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}


        {/* CTA Section */}
        <div className="bg-accent/5 border border-accent/20 p-12 md:p-16 text-center">
          <h3 className="font-serif text-3xl md:text-4xl text-themed mb-6">
            Ready to Eliminate the Noise?
          </h3>
          <p className="text-lg text-themed-secondary mb-8 max-w-2xl mx-auto font-sans">
            Join forward-thinking leaders who've reclaimed their focus and scaled without the operational burden.
          </p>
          <button
            onClick={onOpenProtocol}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold uppercase tracking-widest text-sm transition-colors"
          >
            <span>{sector.impact.cta}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SectorDetail;
