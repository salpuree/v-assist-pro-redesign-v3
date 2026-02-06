import React from 'react';
import {
  Bot,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

const styles = `
  .integration-logo-container {
    position: relative;
    overflow: hidden;
  }

  .integration-logo-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 30%, rgba(0, 180, 216, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .integration-logo-container:hover::before {
    opacity: 1;
  }

  .integration-logo-wrapper {
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(25, 171, 228, 0.15), rgba(25, 171, 228, 0.08));
    border: 1px solid rgba(25, 171, 228, 0.3);
    border-radius: 14px;
    backdrop-filter: blur(12px);
    transition: all 0.3s ease;
  }

  .integration-logo-container:hover .integration-logo-wrapper {
    background: linear-gradient(135deg, rgba(25, 171, 228, 0.22), rgba(25, 171, 228, 0.12));
    border-color: rgba(25, 171, 228, 0.5);
    transform: scale(1.05);
  }

  .integration-logo-img {
    width: 80px !important;
    height: 80px !important;
    object-fit: contain;
    filter: brightness(1.1) contrast(1.15);
    transition: filter 0.3s ease;
  }

  .integration-logo-container:hover .integration-logo-img {
    filter: brightness(1.2) contrast(1.25);
  }
`;

const tools = [
  { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png' },
  { name: 'Limo Anywhere', logo: 'https://www.limoanywhere.com/wp-content/uploads/2023/08/la-logo-inline-light@2x-1.png' },
  { name: 'GNet', logo: 'https://gnet.grdd.net/dashboard/images/gnet-logo_110615.png' },
  { name: 'Follow Up Boss', logo: 'https://cdn.prod.website-files.com/644fec6f9633da07ea1323cb/68ee843990ef42b566febc53_FUB_Full%20Color.svg' },
  { name: 'n8n', logo: 'https://n8n.io/brandguidelines/logo-dark.svg' },
  { name: 'Clay', logo: 'https://cdn.prod.website-files.com/61477f2c24a826836f969afe/6778506d788ebf16fef48551_Clay%20primary%20logo.avif' },
];

const ecosystem = [
  { name: 'Ai2mate', icon: Bot, badge: 'Coming Soon', desc: 'Contextual AI layer for deep industry automation.' },
  { name: 'BooksIQ', icon: BookOpen, badge: 'Coming Soon', desc: 'Predictive financial intelligence and audit preparation.' },
];

const Integrations: React.FC = () => {
  React.useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => styleTag.remove();
  }, []);

  return (
    <section id="integrations" className="bg-cream dark:bg-dark text-themed py-32 pb-40 md:pb-32 border-t border-themed-subtle relative overflow-hidden">
      {/* Background subtle effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-accent/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 md:pl-28 relative z-10">
        <div className="mb-20">
          <div className="mb-12">
            <h4 className="text-xs uppercase tracking-[0.3em] mb-6 font-bold text-accent font-sans">Command Infrastructure</h4>
            <h3 className="text-5xl md:text-7xl text-themed leading-tight font-serif">
              The <span className="italic">Operations Hub.</span>
            </h3>
            <p className="mt-8 text-lg text-themed-secondary font-light leading-relaxed max-w-2xl font-sans">
              Our Ghost Engine doesn't work in isolation. We bridge the gap between your specialized industry tools and institutional automation.
            </p>
          </div>

          {/* Premium Tools Grid */}
          <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group"
                >
                  <div className="flex flex-col items-center justify-center py-4 integration-logo-container cursor-pointer">
                    <div className="integration-logo-wrapper mb-3">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="integration-logo-img"
                      />
                    </div>
                    <span className="text-sm font-medium tracking-wide text-dark dark:text-cream/90 transition-colors text-center">
                      {tool.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Proprietary Apps Highlight */}
        <div className="border-t border-dark/10 dark:border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="uppercase tracking-widest font-bold text-sm text-accent font-sans">Internal Labs</span>
            <div className="h-[1px] flex-grow bg-themed-elevated"></div>
          </div>

          <div id="evidence" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystem.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10 bg-dark/[0.03] dark:bg-white/5 p-6 border border-dark/10 dark:border-white/10 hover:border-accent transition-colors flex flex-col justify-between min-h-[200px]">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-accent/20 rounded-lg text-accent">
                      <app.icon strokeWidth={1} size={28} />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-blue-400">{app.badge}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl tracking-wide text-dark dark:text-cream mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>{app.name}</h4>
                    <p className="text-xs text-dark dark:text-cream/80 leading-relaxed max-w-sm" style={{ fontFamily: 'Lato, sans-serif' }}>{app.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
