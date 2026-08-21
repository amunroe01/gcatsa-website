"use client";

import { motion } from "framer-motion";

/**
 * Signature visual: a PCB-style trace diagram where circuit lines run in
 * from the edges of the hero and converge behind the wordmark, like traces
 * feeding into a chip. Traces draw themselves in on load; the via nodes
 * pulse gently, like data moving through the board.
 */
export default function CircuitBackground() {
  const traces = [
    "M0,80 H180 L230,130 H420 L470,80 H700",
    "M0,220 H120 L160,180 H340 L390,220 H600 L650,270 H900",
    "M1000,60 H820 L780,100 H600",
    "M1000,300 H860 L820,260 H560 L520,300 H380",
    "M60,0 V90 L110,140 V300",
    "M940,0 V120 L890,170 V340",
    "M0,340 H240 L280,300",
    "M1000,220 H760 L720,180",
  ];

  const nodes = [
    [230, 130],
    [470, 80],
    [340, 180],
    [600, 220],
    [780, 100],
    [560, 260],
    [110, 140],
    [890, 170],
  ];

  return (
    <svg
      viewBox="0 0 1000 340"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
    >
      {traces.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="#5BC500"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: i * 0.12, ease: "easeInOut" }}
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={4}
          fill="#5BC500"
          className="animate-pulse-node"
          style={{ animationDelay: `${i * 0.3}s`, transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
    </svg>
  );
}
