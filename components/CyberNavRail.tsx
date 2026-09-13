"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Section definitions with custom cyber icons ───────────────────────────────
const sections = [
  {
    id: "hero",
    label: "INIT",
    sublabel: "System Boot",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <polygon
          points="12,2 22,20 2,20"
          stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"}
          strokeWidth="1.5"
          fill={active ? "rgba(34,211,238,0.12)" : "none"}
          strokeLinejoin="round"
        />
        <line x1="12" y1="9" x2="12" y2="14" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="17" r="0.8" fill={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} />
      </svg>
    ),
  },
  {
    id: "about",
    label: "PROFILE",
    sublabel: "Operator ID",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="8" r="3.5" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" fill={active ? "rgba(34,211,238,0.1)" : "none"} />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <line x1="18" y1="6" x2="20" y2="6" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1" strokeLinecap="round" />
        <line x1="18" y1="8" x2="21" y2="8" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1" strokeLinecap="round" />
        <line x1="18" y1="10" x2="20" y2="10" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "MATRIX",
    sublabel: "Capabilities",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" fill={active ? "rgba(34,211,238,0.1)" : "none"} />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" fill={active ? "rgba(34,211,238,0.08)" : "none"} />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" fill={active ? "rgba(34,211,238,0.08)" : "none"} />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" fill={active ? "rgba(34,211,238,0.05)" : "none"} />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "MISSIONS",
    sublabel: "Active Ops",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" strokeLinejoin="round" fill={active ? "rgba(34,211,238,0.1)" : "none"} />
        <path d="M2 17l10 5 10-5" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "certifications",
    label: "CERTS",
    sublabel: "Verified",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.2L12 14l-4.8 2.5.9-5.2L4.3 7.6l5.3-.8z"
          stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" strokeLinejoin="round"
          fill={active ? "rgba(34,211,238,0.12)" : "none"} />
        <path d="M9 21l3-2 3 2" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="14" x2="12" y2="19" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "OPS LOG",
    sublabel: "Field Record",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" fill={active ? "rgba(34,211,238,0.08)" : "none"} />
        <line x1="7" y1="9" x2="17" y2="9" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7" y1="12" x2="14" y2="12" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7" y1="15" x2="11" y2="15" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="20" cy="4" r="3" fill={active ? "#22d3ee" : "rgba(34,211,238,0.2)"} stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "languages",
    label: "COMMS",
    sublabel: "Protocols",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" fill={active ? "rgba(34,211,238,0.07)" : "none"} />
        <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="3" y1="12" x2="21" y2="12" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="4.5" y1="7.5" x2="19.5" y2="7.5" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1" strokeLinecap="round" />
        <line x1="4.5" y1="16.5" x2="19.5" y2="16.5" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "UPLINK",
    sublabel: "Secure Channel",
    icon: (active: boolean) => (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0122 16.9z"
          stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.5" fill={active ? "rgba(34,211,238,0.1)" : "none"} strokeLinejoin="round" />
        <path d="M15 2s2 0 4 2-2 4-2 4" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M15 6s1 0 2 1" stroke={active ? "#22d3ee" : "rgba(34,211,238,0.35)"} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ── Animated energy pulse travelling down the path ────────────────────────────
function EnergyPulse({ fromPct, active }: { fromPct: number; active: boolean }) {
  if (!active) return null;
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 w-1 rounded-full"
      style={{
        background: "linear-gradient(180deg, transparent, #22d3ee, transparent)",
        boxShadow: "0 0 8px rgba(34,211,238,0.9)",
        height: 24,
        top: `${fromPct * 100}%`,
      }}
      animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
  );
}

// ── Main rail component ───────────────────────────────────────────────────────
export default function CyberNavRail() {
  const [activeIdx, setActiveIdx]   = useState(0);
  const [scrollPct, setScrollPct]   = useState(0);
  const [hoveredIdx, setHovered]    = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    setScrollPct(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);

    let current = 0;
    sections.forEach((s, i) => {
      const el = document.getElementById(s.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) current = i;
      }
    });
    setActiveIdx(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navigateTo = (id: string, idx: number) => {
    setActiveIdx(idx);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // height of the path between first and last node
  const PATH_HEIGHT = 460;
  // fraction of path that is "charged"
  const chargedFraction = scrollPct;

  return (
    <div
      className="hidden lg:flex flex-col items-center justify-center h-full py-8 px-0 relative"
      style={{ width: "100%", minHeight: "100vh", overflow: "visible" }}
    >
      {/* no background panel — rail floats transparently over the shared background */}

      {/* ── Top system label ── */}
      <div className="relative z-10 mb-6 text-center">
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{
            background: "rgba(34,211,238,0.06)",
            border: "1px solid rgba(34,211,238,0.18)",
          }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <span className="font-mono text-[9px] text-cyan-400/70 tracking-[0.2em] uppercase">
            Nav System
          </span>
        </div>
      </div>

      {/* ── Nodes + path ── */}
      <div className="relative z-10 flex flex-col items-center" style={{ height: PATH_HEIGHT, overflow: "visible" }}>

        {/* ── Background track line ── */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: 2,
            top: 20,
            bottom: 20,
            background: "rgba(34,211,238,0.08)",
          }}
        />

        {/* ── Charged fill line ── */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{
            width: 2,
            top: 20,
            background: "linear-gradient(180deg, #22d3ee, #3b82f6, #8b5cf6)",
            boxShadow: "0 0 6px rgba(34,211,238,0.5)",
            height: `calc(${chargedFraction * 100}% - 40px)`,
            transformOrigin: "top",
          }}
          transition={{ duration: 0.15 }}
        />

        {/* ── Travelling energy pulse ── */}
        <EnergyPulse fromPct={chargedFraction} active={scrollPct > 0.02 && scrollPct < 0.98} />

        {/* ── Section nodes ── */}
        {sections.map((s, i) => {
          const isActive   = i === activeIdx;
          const isPast     = i < activeIdx;
          const isHovered  = i === hoveredIdx;
          const topPct     = i / (sections.length - 1);

          return (
            <div
              key={s.id}
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              style={{ top: `calc(${topPct * 100}% - 20px)`, overflow: "visible" }}
            >
              {/* ── Label panel — appears on hover, floats left ── */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute right-12 flex flex-col items-end gap-0.5 pointer-events-none"
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <span
                      className="font-mono text-[10px] tracking-[0.18em] uppercase whitespace-nowrap"
                      style={{ color: isActive ? "#22d3ee" : "rgba(34,211,238,0.7)" }}
                    >
                      {s.label}
                    </span>
                    <span className="font-mono text-[9px] text-cyan-400/40 whitespace-nowrap">
                      {s.sublabel}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Node button ── */}
              <motion.button
                onClick={() => navigateTo(s.id, i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center justify-center rounded-xl cursor-pointer focus:outline-none"
                style={{
                  width: 40,
                  height: 40,
                  background: isActive
                    ? "rgba(34,211,238,0.14)"
                    : isPast
                    ? "rgba(34,211,238,0.06)"
                    : "rgba(7,20,50,0.7)",
                  border: isActive
                    ? "1px solid rgba(34,211,238,0.55)"
                    : isPast
                    ? "1px solid rgba(34,211,238,0.22)"
                    : "1px solid rgba(34,211,238,0.12)",
                  boxShadow: isActive
                    ? "0 0 18px rgba(34,211,238,0.45), 0 0 36px rgba(34,211,238,0.15), inset 0 0 12px rgba(34,211,238,0.08)"
                    : isPast
                    ? "0 0 8px rgba(34,211,238,0.12)"
                    : "none",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.3s ease",
                }}
                animate={isActive ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                transition={isActive ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : {}}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.94 }}
                aria-label={`Navigate to ${s.label}`}
              >
                {/* icon */}
                {s.icon(isActive || isPast)}

                {/* active outer ring pulse */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ border: "1px solid rgba(34,211,238,0.4)" }}
                    animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                )}

                {/* past section — small charged dot in corner */}
                {isPast && !isActive && (
                  <div
                    className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#22d3ee",
                      boxShadow: "0 0 4px rgba(34,211,238,0.8)",
                    }}
                  />
                )}
              </motion.button>

              {/* ── Index number — sits to the LEFT of the icon, inside the rail ── */}
              <div
                className="absolute -left-5 font-mono text-[8px] tracking-widest"
                style={{ color: isActive ? "rgba(34,211,238,0.7)" : "rgba(34,211,238,0.2)" }}
              >
                {String(i).padStart(2, "0")}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Scroll percentage readout ── */}
      <div className="relative z-10 mt-6 flex flex-col items-center gap-1.5">
        <div
          className="font-mono text-[10px] tracking-widest tabular-nums"
          style={{ color: "rgba(34,211,238,0.5)" }}
        >
          {Math.round(scrollPct * 100).toString().padStart(3, "0")}%
        </div>
        <div
          className="w-px rounded-full"
          style={{
            height: 20,
            background: "linear-gradient(180deg, rgba(34,211,238,0.4), transparent)",
          }}
        />
        <div
          className="font-mono text-[8px] tracking-[0.2em] uppercase"
          style={{ color: "rgba(34,211,238,0.25)" }}
        >
          SCROLL
        </div>
      </div>

      {/* ── Bottom system status ── */}
      <div className="relative z-10 mt-auto pt-6 flex flex-col items-center gap-2">
        <div className="w-px h-8" style={{ background: "linear-gradient(180deg, transparent, rgba(34,211,238,0.2))" }} />
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
          style={{
            background: "rgba(34,211,238,0.04)",
            border: "1px solid rgba(34,211,238,0.1)",
          }}
        >
          <motion.div
            className="w-1 h-1 rounded-full"
            style={{ background: "#34d399" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <span className="font-mono text-[8px] text-cyan-400/30 tracking-widest uppercase">
            ONLINE
          </span>
        </div>
      </div>
    </div>
  );
}
