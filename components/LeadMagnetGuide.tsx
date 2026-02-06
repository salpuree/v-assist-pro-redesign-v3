import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface LeadMagnetGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadMagnetGuide: React.FC<LeadMagnetGuideProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
      const templateParams = {
        from_name: name,
        from_email: email,
        guide_name: 'Family Office Operations Excellence',
        to_email: 'info@vassistproinc.com',
        reply_to: email,
      };

      console.log('Lead Magnet Submitted to EmailJS:', templateParams);

      /* 
      // REAL IMPLEMENTATION:
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      */

      // Simulating network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        setName('');
        onClose();
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error requesting your guide. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="bg-cream dark:bg-charcoal rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative border border-themed">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-themed-elevated rounded-lg transition-colors z-10"
              >
                <X size={20} className="text-themed" />
              </button>

              {!isSuccess ? (
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Download size={24} className="text-accent" />
                      <h2 className="text-2xl font-serif text-themed">
                        Free Guide
                      </h2>
                    </div>
                    <p className="text-lg font-semibold text-themed mb-2">
                      Family Office Operations Excellence
                    </p>
                    <p className="text-sm text-themed-tertiary font-sans">
                      Learn how to reduce operational noise and reclaim 15+ hours per week
                    </p>
                  </motion.div>

                  {/* Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 space-y-2"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-themed-secondary font-sans">
                        Industry best practices for operational efficiency
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-themed-secondary font-sans">
                        Metrics and benchmarking for family offices
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-themed-secondary font-sans">
                        Proven frameworks to eliminate operational bottlenecks
                      </span>
                    </div>
                  </motion.div>

                  {/* Form */}
                  <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-themed mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-themed bg-themed text-themed placeholder:text-themed-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-themed mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-themed bg-themed text-themed placeholder:text-themed-muted focus:outline-none focus:ring-2 focus:ring-accent transition-all font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Download size={18} />
                          Get Free Guide
                        </>
                      )}
                    </button>

                    <p className="text-xs text-themed-tertiary text-center font-sans">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </motion.form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 md:p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="mb-4"
                  >
                    <CheckCircle size={56} className="text-green-500 mx-auto" />
                  </motion.div>

                  <h3 className="text-2xl font-serif text-themed mb-2">Success!</h3>
                  <p className="text-themed-secondary mb-2 font-sans">Check your email for your free guide</p>
                  <p className="text-sm text-themed-tertiary font-sans">
                    We've sent the Family Office Operations Excellence guide to {email}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadMagnetGuide;
