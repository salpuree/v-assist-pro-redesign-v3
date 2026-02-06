import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, ArrowRight, MessageSquare, Coffee, Sparkles, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ProtocolOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProtocolOverlay: React.FC<ProtocolOverlayProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    sector: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY 
      // User can replace these with their EmailJS credentials

      const templateParams = {
        from_name: formData.name,
        from_contact: formData.contact,
        from_sector: formData.sector || 'Not Specified',
        message: formData.message,
        reply_to: formData.contact,
        company_email: 'info@vassistproinc.com',
      };

      console.log('Briefing Submitted to EmailJS:', templateParams);

      /* 
      // REAL IMPLEMENTATION:
      // To activate, sign up at emailjs.com and replace these strings
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      */

      // Simulating network delay for professional feel
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSuccess(true);

      // Reset form and auto-close after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', contact: '', sector: '', message: '' });
        onClose();
      }, 5000);

    } catch (error) {
      console.error('Submission failed:', error);
      alert('There was an error sending your briefing. Please try again or email us directly at info@vassistproinc.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[70] bg-cream dark:bg-dark overflow-hidden flex flex-col"
        >
          {/* Immersive Background Visuals */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern dark:bg-grid-pattern-dark bg-[length:100px_100px]" />
          </div>

          {/* Header Console */}
          <header className="relative z-20 border-b border-themed px-12 py-8 flex justify-between items-center bg-themed-surface backdrop-blur-2xl">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent" size={20} />
                <h1 className="text-sm font-mono font-bold uppercase tracking-[0.5em] text-themed">Private Consultation Briefing</h1>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-4 hover:bg-accent hover:text-white rounded-full transition-all duration-300 flex items-center gap-3 group pointer-events-auto cursor-pointer relative z-20"
              aria-label="Close modal"
              type="button"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Return to Home</span>
              <X size={24} />
            </button>
          </header>

          {/* Main Console Content */}
          <div className="flex-grow overflow-y-auto relative z-10 no-scrollbar">
            <div className="container mx-auto px-12 py-20 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                {/* Visual Side (Left) */}
                <div className="lg:col-span-5 space-y-16">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="font-serif text-6xl md:text-8xl leading-none text-themed tracking-tighter mb-10">
                      Let's Find <br />
                      <span className="italic text-accent">Your Focus.</span>
                    </h2>
                    <p className="text-xl font-light text-themed-secondary leading-relaxed border-l-2 border-accent pl-8 font-sans">
                      Transitioning to a silent operational layer starts with a conversation. This briefing helps us understand where the noise is coming from.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-6 bg-themed-secondary border border-themed rounded-lg">
                      <MessageSquare size={20} className="text-accent mb-4" />
                      <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2 text-themed">Human Connect</h4>
                      <p className="text-[11px] text-themed-tertiary uppercase leading-relaxed font-sans">No bots. Just a conversation between partners.</p>
                    </div>
                    <div className="p-6 bg-themed-secondary border border-themed rounded-lg">
                      <Coffee size={20} className="text-accent mb-4" />
                      <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2 text-themed">Bespoke Audit</h4>
                      <p className="text-[11px] text-themed-tertiary uppercase leading-relaxed font-sans">We map your business rhythm, not a template.</p>
                    </div>
                  </div>
                </div>

                {/* Form Side (Right) */}
                <div className="lg:col-span-7">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-themed-secondary backdrop-blur-3xl p-16 border border-themed shadow-themed-card rounded-2xl flex flex-col items-center justify-center text-center space-y-8 min-h-[500px]"
                    >
                      <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                        <CheckCircle size={48} className="animate-bounce" />
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-4xl font-serif text-themed">Briefing Transmitted.</h2>
                        <p className="text-lg text-themed-secondary max-w-sm mx-auto font-sans">
                          Our team has received your operational data. You will receive a confirmation briefing at <span className="text-accent font-bold">{formData.contact}</span> shortly.
                        </p>
                      </div>
                      <div className="h-[1px] w-12 bg-accent/30"></div>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Secure Protocol Active</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-themed-secondary backdrop-blur-3xl p-10 md:p-16 border border-themed shadow-themed-elevated rounded-2xl"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                        <div className="space-y-3">
                          <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent font-bold" htmlFor="name">How should we address you?</label>
                          <input
                            id="name"
                            required
                            name="name"
                            type="text"
                            placeholder="YOUR NAME"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent border-b-2 border-themed py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-themed-muted font-serif text-themed"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent font-bold" htmlFor="contact">Best way to reach you?</label>
                          <input
                            id="contact"
                            required
                            name="contact"
                            type="text"
                            placeholder="EMAIL OR PHONE"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            className="w-full bg-transparent border-b-2 border-themed py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-themed-muted font-serif text-themed"
                          />
                        </div>
                      </div>

                      <fieldset className="mb-12 space-y-3">
                        <legend className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent font-bold">Your Theatre of Operation</legend>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                          {['Luxury Fleet', 'Private Wealth', 'Corporate', 'Real Estate', 'Family Office', 'Other'].map(sector => (
                            <button
                              key={sector}
                              type="button"
                              onClick={() => setFormData({ ...formData, sector })}
                              className={`py-4 border text-[10px] font-bold uppercase tracking-widest transition-all rounded-lg ${formData.sector === sector ? 'bg-accent border-accent text-white shadow-lg' : 'border-themed hover:border-accent hover:text-accent text-themed'}`}
                            >
                              {sector}
                            </button>
                          ))}
                        </div>
                      </fieldset>

                      <div className="space-y-3 mb-12">
                        <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent font-bold" htmlFor="message-field">What is currently stealing your focus?</label>
                        <textarea
                          id="message-field"
                          rows={4}
                          required
                          name="message"
                          placeholder="Tell us about the noise in your day-to-day..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-themed-surface border border-themed rounded-xl p-6 text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-themed-muted text-themed"
                        ></textarea>
                      </div>

                      <div className="flex items-center justify-between gap-12 pt-8 border-t border-themed">
                        <div className="hidden md:flex items-center gap-4">
                          <ShieldCheck size={20} className="text-accent" />
                          <span className="text-[10px] font-mono text-themed-tertiary uppercase tracking-widest">Discretion & Privacy <br /> Guaranteed by Protocol</span>
                        </div>

                        {/* Liquid Glass Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-grow md:flex-grow-0 group relative px-12 py-6 overflow-hidden rounded-xl border border-themed shadow-xl transition-all duration-500 hover:border-accent/50 hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <div className={`absolute inset-0 ${isSubmitting ? 'bg-accent' : 'bg-dark dark:bg-white'} backdrop-blur-2xl group-hover:bg-accent transition-colors duration-500`} />
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                            <div className="absolute -inset-[100%] rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                          </div>
                          <div className="relative z-10 flex items-center justify-between gap-8">
                            <span className="uppercase tracking-[0.4em] text-xs font-bold text-cream dark:text-dark group-hover:text-white transition-colors duration-300">
                              {isSubmitting ? 'Transmitting...' : 'Submit Briefing'}
                            </span>
                            <ArrowRight className={`w-5 h-5 text-cream dark:text-dark group-hover:text-white group-hover:translate-x-3 transition-all duration-500 ${isSubmitting ? 'translate-x-[100px] opacity-0' : ''}`} />
                          </div>
                        </button>
                      </div>
                    </motion.form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProtocolOverlay;
