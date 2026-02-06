import React, { useEffect, useState } from 'react';

/**
 * FrameConnector - Draws one continuous thin stroke connecting the
 * header bottom border to the sidebar right border via a smooth bezier curve.
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

  return (
    <svg
      className="fixed inset-0 pointer-events-none z-[61] hidden md:block"
      width={dims.w}
      height={dims.h}
      viewBox={`0 0 ${dims.w} ${dims.h}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d={d}
        stroke="var(--border-default)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
};

export default FrameConnector;
