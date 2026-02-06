import React, { useEffect, useState } from 'react';

/**
 * FrameConnector - Draws one continuous thin stroke connecting the
 * header bottom border to the sidebar right border via a smooth bezier curve.
 *
 * Wow-factor: A small glowing light pulse travels along the path every
 * few seconds, like a signal tracing the frame -- subtle but premium.
 *
 * Desktop only (hidden on mobile).
 */
const FrameConnector: React.FC = () => {
  const sidebarW = 80;
  const headerH = 80;
  const curveR = 40;

  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (dims.w === 0) return null;

  // Path: right edge at header bottom -> curve -> sidebar right edge to bottom
  const d = [
    `M ${dims.w} ${headerH}`,
    `H ${sidebarW + curveR}`,
    `Q ${sidebarW} ${headerH}, ${sidebarW} ${headerH + curveR}`,
    `L ${sidebarW} ${dims.h}`,
  ].join(' ');

  // Curve midpoint for the static glow node
  const glowX = sidebarW + curveR * 0.29;
  const glowY = headerH + curveR * 0.29;

  return (
    <svg
      className="fixed inset-0 pointer-events-none z-[61] hidden md:block"
      width={dims.w}
      height={dims.h}
      viewBox={`0 0 ${dims.w} ${dims.h}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {/* Glow at the curve apex */}
        <radialGradient id="curve-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(25, 171, 228, 0.45)" />
          <stop offset="60%" stopColor="rgba(25, 171, 228, 0.08)" />
          <stop offset="100%" stopColor="rgba(25, 171, 228, 0)" />
        </radialGradient>

        {/* Traveling light pulse gradient */}
        <radialGradient id="pulse-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(25, 171, 228, 0.9)" />
          <stop offset="40%" stopColor="rgba(25, 171, 228, 0.3)" />
          <stop offset="100%" stopColor="rgba(25, 171, 228, 0)" />
        </radialGradient>
      </defs>

      {/* Main frame line */}
      <path
        id="frame-path"
        d={d}
        stroke="var(--border-default)"
        strokeWidth="1"
        fill="none"
      />

      {/* Static glow node at the curve bend */}
      <circle cx={glowX} cy={glowY} r="18" fill="url(#curve-glow)" />
      <circle cx={glowX} cy={glowY} r="1.5" fill="rgba(25, 171, 228, 0.6)" />

      {/* Traveling light pulse along the path */}
      <circle r="3" fill="url(#pulse-glow)" opacity="0">
        <animateMotion
          dur="12s"
          repeatCount="indefinite"
          begin="0s"
        >
          <mpath xlinkHref="#frame-path" />
        </animateMotion>
        {/* Fade in, hold, fade out cycle */}
        <animate
          attributeName="opacity"
          values="0;0;0.9;0.9;0"
          keyTimes="0;0.05;0.15;0.85;1"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Larger soft glow that follows the same path (halo behind the dot) */}
      <circle r="12" fill="url(#pulse-glow)" opacity="0">
        <animateMotion
          dur="12s"
          repeatCount="indefinite"
          begin="0s"
        >
          <mpath xlinkHref="#frame-path" />
        </animateMotion>
        <animate
          attributeName="opacity"
          values="0;0;0.35;0.35;0"
          keyTimes="0;0.05;0.15;0.85;1"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default FrameConnector;
