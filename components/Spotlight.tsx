"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Shield, Activity, Cpu, Wifi } from "lucide-react";

// ─── Floating dashboard widgets ────────────────────────────────────────────
const widgets = [
  {
    id: "status",
    icon: <Shield size={14} className="text-cyan-400" />,
    label: "SYSTEM STATUS",
    value: "100%",
    sub: "✓ Secure",
    position: "top-[6%] left-[2%]",
    delay: 0,
  },
  {
    id: "threat",
    icon: <Activity size={14} className="text-cyan-400" />,
    label: "THREAT DETECTED",
    value: null,
    sub: "Risk Level — Low",
    chart: true,
    position: "top-[4%] right-[0%]",
    delay: 0.3,
  },
  {
    id: "ai",
    icon: <Cpu size={14} className="text-cyan-400" />,
    label: "AI ANALYSIS",
    value: null,
    sub: "No threats found.\nAll systems secure.",
    check: true,
    position: "bottom-[22%] left-[0%]",
    delay: 0.6,
  },
  {
    id: "firewall",
    icon: <Wifi size={14} className="text-cyan-400" />,
    label: "FIREWALL",
    value: null,
    sub: "Active",
    bars: true,
    position: "bottom-[18%] right-[0%]",
    delay: 0.9,
  },
];

// ─── Bottom stats ────────────────────────────────────────────────────────────
const stats = [
  { icon: "</>", value: "3+", label: "Projects\nCompleted" },
  { icon: "📅", value: "2+", label: "Years\nLearning" },
  { icon: "♡", value: "100%", label: "Passion\nin Tech" },
  { icon: "∞", value: "∞", label: "Possibilities\nExploring" },
];

const techStack = ["⚛", "TS", "JS", "Py", "⬡"];

// ─── Micro chart SVG for Threat widget ───────────────────────────────────────
function ThreatChart() {
  return (
    <svg viewBox="0 0 80 28" className="w-full h-7 mt-1" fill="none">
      <polyline
        points="0,22 12,18 22,20 32,10 42,14 52,6 62,12 72,8 80,10"
        stroke="#22d3ee"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

// ─── Firewall bars ────────────────────────────────────────────────────────────
function FirewallBars() {
  const heights = [6, 10, 14, 10, 16, 12, 18, 14, 10, 12, 8, 14];
  return (
    <div className="flex items-end gap-[3px] mt-2 h-5">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[5px] rounded-sm bg-cyan-400/60"
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

// ─── Ambient particles around the shield ─────────────────────────────────────
const shieldParticles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  // keep particles in a tighter band around the shield center
  angle: (i / 18) * 360,
  radius: 120 + (i % 3) * 28,
  size: 1.5 + (i % 3) * 0.8,
  opacity: 0.25 + (i % 4) * 0.08,
  duration: 6 + (i % 5) * 2,
  delay: i * 0.22,
}));

// ─── Central shield SVG — enhanced holographic core ──────────────────────────
function CyberShield() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">

      {/* ── Layer 1: deep radial atmosphere — larger, shields illuminates surroundings ── */}
      <div
        className="absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(34,211,238,0.09) 38%, rgba(59,130,246,0.04) 58%, transparent 72%)",
          filter: "blur(36px)",
        }}
      />

      {/* ── Layer 2: slow-rotating outer dashed security ring ── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 360,
          height: 360,
          border: "1px dashed rgba(34,211,238,0.18)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Layer 3: counter-rotating ring with tick marks ── */}
      <motion.svg
        viewBox="0 0 300 300"
        className="absolute"
        style={{ width: 300, height: 300 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {/* base ring */}
        <circle cx="150" cy="150" r="138" fill="none" stroke="rgba(34,211,238,0.12)" strokeWidth="1" />
        {/* 24 evenly-spaced tick marks */}
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const r1 = 130, r2 = i % 6 === 0 ? 120 : 126;
          return (
            <line
              key={i}
              x1={150 + r1 * Math.cos(a)} y1={150 + r1 * Math.sin(a)}
              x2={150 + r2 * Math.cos(a)} y2={150 + r2 * Math.sin(a)}
              stroke="rgba(34,211,238,0.35)" strokeWidth={i % 6 === 0 ? 1.5 : 0.8}
            />
          );
        })}
      </motion.svg>

      {/* ── Layer 4: mid pulse ring — scales out and fades ── */}
      {[0, 1, 2].map((r) => (
        <motion.div
          key={r}
          className="absolute rounded-full border border-cyan-400/20"
          style={{ width: 240 + r * 44, height: 240 + r * 44 }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.22, 0.08, 0.22] }}
          transition={{ duration: 4 + r * 1.2, repeat: Infinity, ease: "easeInOut", delay: r * 0.7 }}
        />
      ))}

      {/* ── Layer 5: inner close glow ring ── */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 210,
          height: 210,
          background: "radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 65%)",
          filter: "blur(8px)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Layer 6: ambient particles concentrated around shield ── */}
      {shieldParticles.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cyan-300"
            style={{
              width: p.size,
              height: p.size,
              left: `calc(50% + ${Math.cos(rad) * p.radius}px)`,
              top: `calc(50% + ${Math.sin(rad) * p.radius}px)`,
              opacity: p.opacity,
              transform: "translate(-50%,-50%)",
            }}
            animate={{
              opacity: [p.opacity, p.opacity * 0.2, p.opacity],
              scale: [1, 1.6, 1],
            }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        );
      })}

      {/* ── Layer 7: the shield SVG — foreground ── */}
      <motion.svg
        viewBox="0 0 160 190"
        className="relative z-10"
        style={{
          width: "14.5rem",
          height: "17rem",
          // triple drop-shadow: tight bloom + mid spill + wide atmosphere
          filter:
            "drop-shadow(0 0 18px rgba(34,211,238,0.90)) " +
            "drop-shadow(0 0 40px rgba(14,165,233,0.55)) " +
            "drop-shadow(0 0 80px rgba(14,165,233,0.20))",
        }}
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          {/* main fill gradient — blue core to deep navy edge */}
          <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#0ea5e9" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.50" />
          </linearGradient>

          {/* inner holographic glass reflection */}
          <linearGradient id="glass" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.10" />
            <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.00" />
          </linearGradient>

          {/* border stroke gradient */}
          <linearGradient id="ss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* subtle circuit grid */}
          <pattern id="cg" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="10" x2="20" y2="10" stroke="#22d3ee" strokeWidth="0.35" opacity="0.35" />
            <line x1="10" y1="0" x2="10" y2="20" stroke="#22d3ee" strokeWidth="0.35" opacity="0.35" />
            <circle cx="10" cy="10" r="0.9" fill="#22d3ee" opacity="0.45" />
          </pattern>

          {/* radial glow inside shield */}
          <radialGradient id="core" cx="50%" cy="55%" r="45%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.00" />
          </radialGradient>

          <clipPath id="shieldClip">
            <path d="M80 8 L148 38 L148 95 C148 138 80 182 80 182 C80 182 12 138 12 95 L12 38 Z" />
          </clipPath>
        </defs>

        {/* shield base fill */}
        <path d="M80 8 L148 38 L148 95 C148 138 80 182 80 182 C80 182 12 138 12 95 L12 38 Z"
          fill="url(#sg)" stroke="url(#ss)" strokeWidth="2" />

        {/* circuit grid overlay — clipped to shield shape */}
        <path d="M80 8 L148 38 L148 95 C148 138 80 182 80 182 C80 182 12 138 12 95 L12 38 Z"
          fill="url(#cg)" opacity="0.55" />

        {/* inner radial core bloom */}
        <path d="M80 8 L148 38 L148 95 C148 138 80 182 80 182 C80 182 12 138 12 95 L12 38 Z"
          fill="url(#core)" />

        {/* glass reflection highlight — top-left quadrant */}
        <path d="M80 8 L148 38 L148 95 C148 138 80 182 80 182 C80 182 12 138 12 95 L12 38 Z"
          fill="url(#glass)" />

        {/* inner border — secondary depth layer */}
        <path d="M80 22 L136 46 L136 95 C136 130 80 168 80 168 C80 168 24 130 24 95 L24 46 Z"
          fill="none" stroke="#22d3ee" strokeWidth="0.7" opacity="0.35" />

        {/* tertiary micro border */}
        <path d="M80 34 L126 54 L126 97 C126 124 80 156 80 156 C80 156 34 124 34 97 L34 54 Z"
          fill="none" stroke="#38bdf8" strokeWidth="0.4" opacity="0.22" />

        {/* ── Lock body ── */}
        <rect x="62" y="101" width="36" height="28" rx="5"
          fill="rgba(14,165,233,0.18)" stroke="#22d3ee" strokeWidth="1.6" />

        {/* lock inner gloss */}
        <rect x="62" y="101" width="36" height="10" rx="5"
          fill="rgba(255,255,255,0.06)" />

        {/* lock shackle */}
        <path d="M69 101 L69 90 A11 11 0 0 1 91 90 L91 101"
          fill="none" stroke="#67e8f9" strokeWidth="2.2" strokeLinecap="round" />

        {/* keyhole circle */}
        <circle cx="80" cy="113" r="4.5" fill="#22d3ee" opacity="0.95" />
        {/* keyhole stem */}
        <rect x="78" y="113" width="4" height="7" rx="1.5" fill="#22d3ee" opacity="0.95" />

        {/* lock inner glow */}
        <circle cx="80" cy="113" r="7"
          fill="none" stroke="#22d3ee" strokeWidth="0.6" opacity="0.4" />

        {/* ── Animated circuit node dots ── */}
        {([[80,28],[38,58],[122,58],[26,98],[134,98],[80,160]] as [number,number][]).map(([cx,cy],i) => (
          <motion.circle
            key={i} cx={cx} cy={cy} r={i === 0 ? 2.5 : 1.8}
            fill="#22d3ee"
            animate={{ opacity: [0.25, 1, 0.25], r: [i===0?2.5:1.8, i===0?3.5:2.6, i===0?2.5:1.8] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.28 }}
          />
        ))}

        {/* top-center bloom accent */}
        <circle cx="80" cy="28" r="8" fill="rgba(34,211,238,0.12)" filter="url(#blur)" />
      </motion.svg>

      {/* ── Energy platform beneath the shield ── */}
      <div className="absolute z-0" style={{ bottom: "2%", left: "50%", transform: "translateX(-50%)" }}>
        {/* main ellipse platform */}
        <div
          style={{
            width: 220,
            height: 22,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(34,211,238,0.45) 0%, rgba(14,165,233,0.15) 50%, transparent 75%)",
            filter: "blur(5px)",
          }}
        />
        {/* scan ring 1 */}
        <motion.div
          style={{
            position: "absolute",
            top: 3,
            left: "50%",
            transform: "translateX(-50%)",
            width: 160,
            height: 14,
            borderRadius: "50%",
            border: "1px solid rgba(34,211,238,0.35)",
          }}
          animate={{ scaleX: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* scan ring 2 — slower */}
        <motion.div
          style={{
            position: "absolute",
            top: 5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 100,
            height: 10,
            borderRadius: "50%",
            border: "1px solid rgba(34,211,238,0.25)",
          }}
          animate={{ scaleX: [1, 1.12, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </div>
    </div>
  );
}

// Per-widget perspective tilt angles — subtle, professional, not skewed
const widgetTilt: Record<string, string> = {
  status:   "perspective(600px) rotateX(4deg) rotateY(6deg)",
  threat:   "perspective(600px) rotateX(4deg) rotateY(-5deg)",
  ai:       "perspective(600px) rotateX(-3deg) rotateY(5deg)",
  firewall: "perspective(600px) rotateX(-3deg) rotateY(-4deg)",
};

// ─── Individual floating widget card ─────────────────────────────────────────
function Widget({ w }: { w: (typeof widgets)[number] }) {
  return (
    <motion.div
      className={`absolute ${w.position} z-20`}
      style={{ transform: widgetTilt[w.id] }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5 + w.delay, repeat: Infinity, ease: "easeInOut", delay: w.delay }}
    >
      <div
        className="rounded-xl px-3 py-2.5 min-w-[130px] max-w-[170px]"
        style={{
          // deeper, darker base — card emits light rather than reflects it
          background: "rgba(3,12,36,0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(34,211,238,0.28)",
          // card edge glow — secondary light source
          boxShadow:
            "0 0 0 1px rgba(34,211,238,0.06) inset, " +
            "0 0 24px rgba(34,211,238,0.12), " +
            "0 8px 32px rgba(0,0,0,0.6)",
        }}
      >
        {/* header row */}
        <div className="flex items-center gap-1.5 mb-1">
          {w.icon}
          <span className="font-mono text-[10px] text-cyan-400/80 tracking-widest uppercase">
            {w.label}
          </span>
        </div>

        {/* large value — illuminated number */}
        {w.value && (
          <div
            className="text-2xl font-bold text-white text-center my-1"
            style={{ textShadow: "0 0 16px rgba(34,211,238,0.8), 0 0 32px rgba(34,211,238,0.3)" }}
          >
            {w.value}
          </div>
        )}

        {/* chart */}
        {w.chart && <ThreatChart />}

        {/* bars */}
        {w.bars && <FirewallBars />}

        {/* sub line */}
        <div className="flex items-center gap-1 mt-1">
          {w.check && (
            <span className="text-cyan-400 text-xs" style={{ textShadow: "0 0 8px rgba(34,211,238,0.9)" }}>✓</span>
          )}
          <p className="font-mono text-[10px] text-cyan-300/70 whitespace-pre-line leading-tight">
            {w.sub}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Background network topology SVG — abstract cyber node connections ────────
function CyberTopology() {
  // deterministic node positions — no Math.random() to avoid hydration mismatch
  const nodes = [
    [12,18],[28,72],[8,55],[45,8],[62,30],[80,15],[95,45],[75,70],
    [50,85],[30,92],[15,40],[60,60],[85,80],[40,50],[70,95],[20,65],
  ];
  // edges — index pairs
  const edges = [
    [0,2],[0,4],[1,9],[1,10],[2,10],[3,4],[3,5],[4,6],[4,13],
    [5,6],[6,7],[6,11],[7,8],[7,11],[8,9],[9,14],[10,13],[11,12],
    [12,14],[13,15],[14,15],[1,15],[3,13],
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.045 }}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#22d3ee" strokeWidth="0.18"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 0.7 : 0.4}
          fill="#38bdf8" opacity={i % 3 === 0 ? 0.9 : 0.5} />
      ))}
    </svg>
  );
}

// ─── Main hero component ──────────────────────────────────────────────────────
export default function Spotlight() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-8 overflow-hidden">

      {/* ══ ATMOSPHERIC BACKGROUND LAYERS ══════════════════════════════════ */}

      {/* Layer A: deep vignette — darkens edges, focuses attention on center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at 62% 48%, transparent 30%, rgba(1,4,18,0.75) 100%)",
          zIndex: 1,
        }}
      />

      {/* Layer B: shield primary light — large radial bloom centered on right column */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.10) 0%, rgba(34,211,238,0.05) 35%, transparent 65%)",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />

      {/* Layer C: left-column ambient fill — keeps text side from going too dark */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 480,
          height: 480,
          top: "40%",
          left: "18%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)",
          filter: "blur(48px)",
          zIndex: 1,
        }}
      />

      {/* Layer D: abstract network topology (no geo / world-map) */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <CyberTopology />
      </div>

      {/* ── Two-column hero ── */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 w-full max-w-7xl mx-auto" style={{ zIndex: 2 }}>

        {/* ── LEFT: copy ── */}
        <div className="flex-1 flex flex-col gap-6 z-10">

          {/* availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start"
          >
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest text-cyan-300 uppercase"
              style={{
                background: "rgba(34,211,238,0.07)",
                border: "1px solid rgba(34,211,238,0.25)",
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              &gt; Available for Opportunities
            </div>
          </motion.div>

          {/* headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* "Hi, I'm" — illuminated white text */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.15)" }}
            >
              Hi, I&apos;m
            </h1>
            {/* name — glowing gradient, stronger bloom */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{
                background: "linear-gradient(90deg, #67e8f9 0%, #22d3ee 45%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter:
                  "drop-shadow(0 0 20px rgba(34,211,238,0.55)) drop-shadow(0 0 48px rgba(34,211,238,0.2))",
              }}
            >
              Chinmayee Sankaran
            </h1>
          </motion.div>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-300 max-w-lg leading-relaxed"
          >
            Tech that{" "}
            <span className="text-cyan-400 font-semibold">works</span>, Design that{" "}
            <span className="text-cyan-400 font-semibold">communicates</span>,
            {" "}and AI that{" "}
            <span className="text-cyan-400 font-semibold">elevates</span> — that&apos;s my workflow.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            {/* primary CTA — powered, illuminated button */}
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "rgba(14,165,233,0.12)",
                border: "1px solid rgba(34,211,238,0.50)",
                boxShadow:
                  "0 0 0 1px rgba(34,211,238,0.08) inset, " +
                  "0 0 24px rgba(34,211,238,0.18), " +
                  "0 4px 16px rgba(0,0,0,0.5)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 1px rgba(34,211,238,0.15) inset, 0 0 40px rgba(34,211,238,0.38), 0 4px 20px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 1px rgba(34,211,238,0.08) inset, 0 0 24px rgba(34,211,238,0.18), 0 4px 16px rgba(0,0,0,0.5)";
              }}
            >
              &gt; View My Work
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* secondary CTA */}
            <a
              href="/Chinmayee_Sankaran_Resume_Draft.pdf"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-semibold text-gray-300 transition-all duration-200 hover:text-white hover:scale-[1.03]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.38)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(34,211,238,0.12), 0 4px 16px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.4)";
              }}
            >
              Download Resume
              <Download size={14} />
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT: cyber visual ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative flex items-center justify-center min-h-[420px] w-full max-w-xl lg:max-w-none"
        >
          {/* shield — final size: ~30% over original */}
          <div className="relative w-[24rem] h-[26rem] md:w-[28rem] md:h-[30rem]">
            <CyberShield />
          </div>

          {/* floating widgets */}
          {widgets.map((w) => (
            <Widget key={w.id} w={w} />
          ))}
        </motion.div>
      </div>

      {/* ── Bottom stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="w-full max-w-7xl mx-auto mt-16"
        style={{ zIndex: 2 }}
      >
        <div
          className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          style={{
            // darker base with stronger edge glow — card emits light
            background: "rgba(3,10,30,0.75)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(34,211,238,0.18)",
            boxShadow:
              "0 0 0 1px rgba(34,211,238,0.05) inset, " +
              "0 0 48px rgba(34,211,238,0.07), " +
              "0 16px 48px rgba(0,0,0,0.6)",
          }}
        >
          {/* tagline block */}
          <div className="flex items-center gap-4 sm:border-r border-cyan-400/15 sm:pr-6 min-w-fit">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)" }}
            >
              <Shield size={18} className="text-cyan-400" />
            </div>
            <p className="font-mono text-xs text-cyan-300/70 leading-relaxed max-w-[180px]">
              &gt; Building secure digital experiences<br />
              with code, creativity, and<br />
              cutting-edge AI.
            </p>
          </div>

          {/* stats */}
          <div className="flex flex-wrap gap-6 flex-1 justify-around">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 text-center">
                <span className="text-cyan-400 text-lg">{s.icon}</span>
                <span className="text-2xl font-bold text-white">{s.value}</span>
                <span className="font-mono text-[10px] text-gray-400 whitespace-pre-line leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* tech stack */}
          <div className="sm:border-l border-cyan-400/15 sm:pl-6 min-w-fit">
            <p className="font-mono text-[10px] text-cyan-400/70 tracking-widest mb-2">
              &gt; TECH STACK
            </p>
            <div className="flex gap-2 flex-wrap">
              {techStack.map((t) => (
                <div
                  key={t}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-cyan-300 hover:scale-110 transition-transform cursor-default"
                  style={{
                    background: "rgba(34,211,238,0.08)",
                    border: "1px solid rgba(34,211,238,0.2)",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
