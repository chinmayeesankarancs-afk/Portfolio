// Shared cybersecurity UI design system — used across all sections
// Every panel, badge, label, and header comes from here for visual consistency.

import { ReactNode } from "react";

// ── Token constants ──────────────────────────────────────────────────────────
export const PANEL =
  "rounded-2xl border border-cyan-400/15 bg-[rgba(7,26,61,0.55)] backdrop-blur-xl shadow-[0_0_32px_rgba(34,211,238,0.05)]";

export const PANEL_HOVER =
  "hover:border-cyan-400/35 hover:shadow-[0_0_48px_rgba(34,211,238,0.13)] hover:-translate-y-0.5 transition-all duration-300";

export const GLOW_TEXT =
  "drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]";

// ── CyberPanel ───────────────────────────────────────────────────────────────
// The universal card/panel container
export function CyberPanel({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`${PANEL} ${hover ? PANEL_HOVER : ""} ${className}`}>
      {children}
    </div>
  );
}

// ── SectionHeader ────────────────────────────────────────────────────────────
// Uniform section title with cyber label prefix
export function SectionHeader({
  label,
  title,
  accent,
}: {
  label: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-cyan-400/80 tracking-[0.25em] uppercase mb-3 flex items-center gap-2">
        <span className="inline-block w-4 h-px bg-cyan-400/50" />
        {label}
        <span className="inline-block w-4 h-px bg-cyan-400/50" />
      </p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}{" "}
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(90deg,#38bdf8,#22d3ee)",
            filter: "drop-shadow(0 0 20px rgba(34,211,238,0.6))",
          }}
        >
          {accent}
        </span>
      </h2>
    </div>
  );
}

// ── StatusBadge ──────────────────────────────────────────────────────────────
// Reusable pill badge: ACTIVE / VERIFIED / COMPLETED etc.
export function StatusBadge({
  label,
  color = "cyan",
}: {
  label: string;
  color?: "cyan" | "green" | "blue" | "purple";
}) {
  const colors = {
    cyan: "text-cyan-400 border-cyan-400/35 bg-cyan-400/08",
    green: "text-emerald-400 border-emerald-400/35 bg-emerald-400/08",
    blue: "text-blue-400 border-blue-400/35 bg-blue-400/08",
    purple: "text-purple-400 border-purple-400/35 bg-purple-400/08",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-widest uppercase border ${colors[color]}`}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{
          background:
            color === "cyan"
              ? "#22d3ee"
              : color === "green"
              ? "#34d399"
              : color === "blue"
              ? "#60a5fa"
              : "#a78bfa",
          boxShadow: `0 0 6px currentColor`,
        }}
      />
      {label}
    </span>
  );
}

// ── CyberLabel ───────────────────────────────────────────────────────────────
// Small uppercase mono label for dashboard-style field names
export function CyberLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[10px] text-cyan-400/75 tracking-[0.2em] uppercase">
      {children}
    </span>
  );
}

// ── Divider ──────────────────────────────────────────────────────────────────
export function CyberDivider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent my-4" />
  );
}
