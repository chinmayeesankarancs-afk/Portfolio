"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ── Deterministic seeded PRNG (LCG) ─────────────────────────────────────────
function lcg(seed: number): [number, number] {
  const next = (seed * 1664525 + 1013904223) & 0xffffffff;
  return [next, (next >>> 0) / 0x100000000];
}

// ── Glow orbs ────────────────────────────────────────────────────────────────
const orbs = [
  { color: "rgba(34,211,238,0.10)",  size: 650, x: "10%", y: "5%",  animX: ["10%","14%","10%"], animY: ["5%","12%","5%"],   dur: 18 },
  { color: "rgba(59,130,246,0.09)",  size: 550, x: "62%", y: "28%", animX: ["62%","57%","62%"], animY: ["28%","36%","28%"], dur: 23 },
  { color: "rgba(139,92,246,0.08)",  size: 480, x: "82%", y: "68%", animX: ["82%","77%","82%"], animY: ["68%","61%","68%"], dur: 27 },
];

// ── Floating particles ───────────────────────────────────────────────────────
const particles = (() => {
  let s = 42; let v: number;
  return Array.from({ length: 18 }, (_, i) => {
    [s, v] = lcg(s); const size     = v * 2.5 + 1;
    [s, v] = lcg(s); const left     = `${v * 100}%`;
    [s, v] = lcg(s); const top      = `${v * 100}%`;
    [s, v] = lcg(s); const opacity  = v * 0.18 + 0.04;
    [s, v] = lcg(s); const duration = v * 14 + 10;
    [s, v] = lcg(s); const driftX   = v * 36 - 18;
    [s, v] = lcg(s); const driftY   = v * 36 - 18;
    [s, v] = lcg(s); const delay    = v * 6;
    return { id: i, size, left, top, opacity, duration, driftX, driftY, delay };
  });
})();

// ── Matrix digital rain (canvas) ─────────────────────────────────────────────
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize  = 13;
    const chars     = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
    let cols        = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(cols).fill(1);

    // deterministic initial drop positions
    let seed = 7;
    for (let i = 0; i < cols; i++) {
      [seed] = lcg(seed);
      drops[i] = Math.floor((seed / 0x100000000) * 40);
    }

    const draw = () => {
      ctx.fillStyle = "rgba(2,6,23,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // vary opacity per column for depth — deterministic via index
        const alpha = 0.06 + (i % 5) * 0.018;
        const charIdx = (drops[i] * 7 + i * 13) % chars.length;
        const ch = chars[charIdx];

        // head character slightly brighter
        ctx.fillStyle = `rgba(34,211,238,${alpha * 2.2})`;
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize);

        // trail — dimmer
        ctx.fillStyle = `rgba(34,211,238,${alpha})`;
        const trailChar = chars[(charIdx + 3) % chars.length];
        ctx.fillText(trailChar, i * fontSize, (drops[i] - 1) * fontSize);

        if (drops[i] * fontSize > canvas.height && drops[i] % 22 === 0) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 80);

    const onResize = () => {
      resize();
      cols = Math.floor(canvas.width / fontSize);
      drops.length = 0;
      for (let i = 0; i < cols; i++) drops.push(1);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.38 }}
    />
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

      {/* Layer 1: clean deep dark gradient — no grid */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #020617 0%, #060f2a 30%, #0a1628 60%, #050d1e 100%)",
        }}
      />

      {/* Layer 2: Matrix digital rain */}
      <MatrixRain />

      {/* Layer 3: animated glow orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size, height: orb.size,
            left: orb.x, top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(80px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ left: orb.animX, top: orb.animY }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Layer 4: floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400"
          style={{ width: p.size, height: p.size, left: p.left, top: p.top, opacity: p.opacity }}
          animate={{ x: [0, p.driftX, 0], y: [0, p.driftY, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      {/* Layer 5: very subtle vignette to keep edges dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 55%, rgba(2,6,23,0.55) 100%)",
        }}
      />
    </div>
  );
}
