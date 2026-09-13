"use client";

import Reveal from "./Reveal";
import { CyberPanel, SectionHeader, CyberLabel, CyberDivider } from "./CyberUI";
import { motion } from "framer-motion";
import { Zap, Shield } from "lucide-react";

// ── General technical capabilities ──────────────────────────────────────────
const capabilities = [
  { module: "FRONTEND SYSTEMS",    label: "ReactJS · Next.js · Tailwind CSS",              level: 88, tag: "HIGH PROFICIENCY" },
  { module: "PROMPT ENGINEERING",  label: "Prompt Engineering · AI Tools · LLM Workflows", level: 90, tag: "HIGH PROFICIENCY" },
  { module: "UI / UX DESIGN",      label: "Figma · Canva · Wireframing · User Research",   level: 85, tag: "PROFICIENT" },
  { module: "AI ENGINEERING",      label: "ML Concepts · Data Pipelines · Analytics",      level: 75, tag: "PROFECIENT" },
  { module: "SYSTEMS PROGRAMMING", label: "Python · C · C++",                              level: 80, tag: "DEVELOPING" },
  { module: "CREATIVE TOOLS",      label: "Canva · Figma · Video Editing",                 level: 83, tag: "PROFICIENT" },
];

// ── Cybersecurity-specific capabilities ─────────────────────────────────────
const cyberCapabilities = [
  { module: "NETWORK SECURITY",        label: "Network Security · Protocols · Defence",                          level: 78, tag: "DEVELOPING" },
  { module: "NETWORK TRAFFIC ANALYSIS",label: "Traffic Analysis · Packet Inspection · Anomaly Detection",        level: 74, tag: "DEVELOPING" },
  { module: "SIEM",                    label: "Security Information and Event Management (SIEM)",                 level: 72, tag: "DEVELOPING" },
  { module: "THREAT & VULNERABILITY MANAGEMENT",      label: "Threat and Vulnerability Management · Risk Assessment",           level: 76, tag: "DEVELOPING" },
];

function SkillBar({ level, delay }: { level: number; delay: number }) {
  return (
    <div
      className="relative h-1.5 w-full rounded-full overflow-hidden"
      style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.12)" }}
    >
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full"
        style={{
          background: "linear-gradient(90deg, #0ea5e9, #22d3ee)",
          boxShadow: "0 0 8px rgba(34,211,238,0.6)",
        }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: "easeOut" }}
      />
      {[25, 50, 75].map((tick) => (
        <div
          key={tick}
          className="absolute top-0 bottom-0 w-px"
          style={{ left: `${tick}%`, background: "rgba(34,211,238,0.18)" }}
        />
      ))}
    </div>
  );
}

function SkillCard({
  c,
  i,
  icon,
}: {
  c: { module: string; label: string; level: number; tag: string };
  i: number;
  icon: React.ReactNode;
}) {
  return (
    <CyberPanel className="p-4" hover>
      {/* header row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}
          >
            {icon}
          </div>
          <CyberLabel>{c.module}</CyberLabel>
        </div>
        {/* proficiency tier badge — no percentage number */}
        <span
          className="font-mono text-[9px] tracking-widest px-2 py-0.5 rounded-full border shrink-0"
          style={{
            color:        c.level >= 88 ? "#34d399" : c.level >= 80 ? "#22d3ee" : "#60a5fa",
            borderColor:  c.level >= 88 ? "rgba(52,211,153,0.3)" : c.level >= 80 ? "rgba(34,211,238,0.3)" : "rgba(96,165,250,0.3)",
            background:   c.level >= 88 ? "rgba(52,211,153,0.06)" : c.level >= 80 ? "rgba(34,211,238,0.06)" : "rgba(96,165,250,0.06)",
          }}
        >
          {c.tag}
        </span>
      </div>

      <CyberDivider />

      {/* skill bar — percentage number removed; bar fill communicates level */}
      <div className="mt-4 mb-3">
        <div className="mb-2">
          <span className="font-mono text-[10px] text-gray-400">{c.label}</span>
        </div>
        <SkillBar level={c.level} delay={i * 0.08} />
      </div>

      {/* terminal block bar */}
      <div className="font-mono text-[10px] text-cyan-400/50 mt-3 tracking-tight">
        {"█".repeat(Math.round(c.level / 10))}
        {"░".repeat(10 - Math.round(c.level / 10))}
      </div>
    </CyberPanel>
  );
}

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="py-16 scroll-mt-20 px-6 md:px-14 lg:px-20">
        <SectionHeader label="capability matrix" title="Core" accent="Skills" />

        {/* ── General technical skills ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {capabilities.map((c, i) => (
            <SkillCard key={c.module} c={c} i={i} icon={<Zap size={13} className="text-cyan-400" />} />
          ))}
        </div>

        {/* ── Cybersecurity skills — visually distinct sub-group ── */}
        <div className="mt-10 mb-4">
          <p className="font-mono text-xs text-cyan-400/70 tracking-[0.25em] uppercase mb-1">
            // cybersecurity operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cyberCapabilities.map((c, i) => (
            <SkillCard key={c.module} c={c} i={i} icon={<Shield size={13} className="text-cyan-400" />} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
