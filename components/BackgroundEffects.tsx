"use client";

import { motion } from "framer-motion";

// --- Glow Orbs ---
// 3 large blurred orbs that drift slowly in the background (Layer 3)
const orbs = [
  {
    color: "rgba(34,211,238,0.12)",   // cyan
    size: 700,
    x: "10%",
    y: "5%",
    animX: ["10%", "14%", "10%"],
    animY: ["5%", "12%", "5%"],
    duration: 18,
  },
  {
    color: "rgba(59,130,246,0.11)",   // electric blue
    size: 600,
    x: "60%",
    y: "30%",
    animX: ["60%", "55%", "60%"],
    animY: ["30%", "38%", "30%"],
    duration: 22,
  },
  {
    color: "rgba(139,92,246,0.10)",   // purple
    size: 500,
    x: "80%",
    y: "70%",
    animX: ["80%", "75%", "80%"],
    animY: ["70%", "63%", "70%"],
    duration: 26,
  },
];

// --- Particles ---
// 20 tiny floating circles simulating data flowing through a network (Layer 4)
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,           // 1–4px
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  opacity: Math.random() * 0.25 + 0.05,  // 5–30%
  duration: Math.random() * 14 + 10,     // 10–24s
  driftX: Math.random() * 40 - 20,       // -20 to +20px
  driftY: Math.random() * 40 - 20,
  delay: Math.random() * 6,
}));

export default function BackgroundEffects() {
  return (
    // fixed: stays behind all scrollable content; pointer-events-none: never blocks clicks
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

      {/* Layer 1: dark gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #020617 0%, #071A3D 35%, #0F172A 65%, #0A0F1F 100%)",
        }}
      />

      {/* Layer 2: cyber grid — rendered via globals.css class */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Layer 3: animated glow orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(80px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ left: orb.animX, top: orb.animY }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Layer 4: floating cyber particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            opacity: p.opacity,
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Layer 5 (binary ambience): faint vertical scanlines rendered via globals.css */}
      <div className="absolute inset-0 scanlines" />
    </div>
  );
}
