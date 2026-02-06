import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Landmark, Car, Briefcase, Award } from 'lucide-react';

const LogoCarousel: React.FC = () => {
    const partners = [
        { name: 'Private Fleet Alpha', icon: Car },
        { name: 'Naples Estate Group', icon: Landmark },
        { name: 'Family Office Beta', icon: Briefcase },
        { name: 'Elite Advisory', icon: Shield },
        { name: 'UHNW Strategic', icon: Award },
        { name: 'Global Ops', icon: Shield },
    ];

    return (
        <div className="bg-cream dark:bg-dark py-20 border-y border-themed overflow-hidden">
            <div className="container mx-auto px-6 mb-10">
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent/60 font-bold text-center">Institutional Trust • Discreet Partners</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap flex items-center gap-20">
                    {[...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-default">
                            <partner.icon size={24} className="text-themed-faint group-hover:text-accent transition-colors duration-500" />
                            <span className="text-2xl font-serif text-themed-faint group-hover:text-themed-muted transition-colors duration-500">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Marquee duplication for seamless loop */}
                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center gap-20">
                    {[...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-default">
                            <partner.icon size={24} className="text-themed-faint group-hover:text-accent transition-colors duration-500" />
                            <span className="text-2xl font-serif text-themed-faint group-hover:text-themed-muted transition-colors duration-500">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* We use one animation for simplicity in this horizontal layout */
        .flex.overflow-x-hidden {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
        </div>
    );
};

export default LogoCarousel;
