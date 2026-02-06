import React, { useEffect, useState } from 'react';

/**
 * FrameConnector - Draws one continuous thin stroke connecting the
 * header bottom border to the sidebar right border via a smooth bezier curve.
 * Includes a subtle accent glow node at the curve's apex for visual interest.
 *
 * Desktop only (hidden on mobile).
 * Uses window dimensions so the line always reaches the edges of the viewport.
 */
const FrameConnector: React.FC = () => {
  const sidebarW = 80; // w-20 = 80px
  const headerH = 80; // h-20 = 80px
  const curveR = 40;  // bezier curve radius

  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (dims.w === 0) return null;

  // Path: right edge of header bottom -> curve -> sidebar right edge to bottom
  const d = [
    `M ${dims.w} ${headerH}`,                                  // start: top-right at header bottom
    `H ${sidebarW + curveR}`,                                   // horizontal line left
    `Q ${sidebarW} ${headerH}, ${sidebarW} ${headerH + curveR}`, // smooth curve
    `L ${sidebarW} ${dims.h}`,                                  // vertical line down to viewport bottom
  ].join(' ');

  // The midpoint of the curve for the glow node
  const glowX = sidebarW + curveR * 0.3;
  const glowY = headerH + curveR * 0.3;

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
        <radialGradient id="curve-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(25, 171, 228, 0.5)" />
          <stop offset="60%" stopColor="rgba(25, 171, 228, 0.1)" />
          <stop offset="100%" stopColor="rgba(25, 171, 228, 0)" />
        </radialGradient>
      </defs>

      {/* Main frame line */}
      <path
        d={d}
        stroke="var(--border-default)"
        strokeWidth="1"
        fill="none"
      />

      {/* Subtle glow node at the curve's bend point */}
      <circle
        cx={glowX}
        cy={glowY}
        r="20"
        fill="url(#curve-glow)"
      />
      {/* Tiny solid accent dot at the exact curve midpoint */}
      <circle
        cx={glowX}
        cy={glowY}
        r="2"
        fill="rgba(25, 171, 228, 0.7)"
      />
    </svg>
  );
};

export default FrameConnector;
