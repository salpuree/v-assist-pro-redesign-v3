import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  compact?: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ compact = false }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Q1 2026 ends on March 31, 2026 at 11:59 PM EST
      const targetDate = new Date('2026-03-31T23:59:59-05:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsActive(false);
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isActive) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center ${compact ? 'gap-2' : 'gap-4'} text-themed`}
      role="timer"
      aria-live="polite"
      aria-label={`Countdown: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes remaining`}
    >
      {!compact && (
        <>
          {/* Limited Slots Label */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-bold whitespace-nowrap text-red-600 font-sans">
              Limited Slots
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-themed-elevated" />
        </>
      )}

      {/* Countdown Display */}
      <div className={`flex items-center ${compact ? 'gap-2' : 'gap-1 md:gap-2'}`}>
        <div className="text-center">
          <div className={`${compact ? 'text-base md:text-lg' : 'text-base md:text-xl'} font-bold font-serif leading-tight`} style={{ color: 'rgba(25, 171, 228, 1)' }}>
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className={`${compact ? 'text-[9px]' : 'text-[11px]'} uppercase tracking-wider text-themed-tertiary`}>Days</div>
        </div>

        <span className={`${compact ? 'text-xs' : 'text-sm'} font-serif text-themed-muted`}>:</span>

        <div className="text-center">
          <div className={`${compact ? 'text-base md:text-lg' : 'text-base md:text-xl'} font-bold font-serif leading-tight text-accent`}>
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className={`${compact ? 'text-[9px]' : 'text-[11px]'} uppercase tracking-wider text-themed-tertiary`}>Hrs</div>
        </div>

        <span className={`${compact ? 'text-xs' : 'text-sm'} font-serif text-themed-muted`}>:</span>

        <div className="text-center">
          <div className={`${compact ? 'text-base md:text-lg' : 'text-base md:text-xl'} font-bold font-serif leading-tight text-accent`}>
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className={`${compact ? 'text-[9px]' : 'text-[11px]'} uppercase tracking-wider text-themed-tertiary`}>Min</div>
        </div>

        <span className={`${compact ? 'text-xs' : 'text-sm'} font-serif text-themed-muted`}>:</span>

        <div className="text-center">
          <div className={`${compact ? 'text-base md:text-lg' : 'text-base md:text-xl'} font-bold font-serif leading-tight text-accent`}>
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className={`${compact ? 'text-[9px]' : 'text-[11px]'} uppercase tracking-wider text-themed-tertiary`}>Sec</div>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
