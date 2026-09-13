"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { SectionHeader } from "./CyberUI";
import { MessageSquare } from "lucide-react";

const languages = [
  {
    name: "English",
    proficiency: "Read, Write and Speak",
    level: 5,
    tag: "FLUENT",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.35)",
    flag: "✨",
  },
  {
    name: "Tamil",
    proficiency: "Native, Speak only",
    level: 5,
    tag: "NATIVE",
    color: "#34d399",
    glow: "rgba(52,211,153,0.35)",
    flag: "🌿",
  },
  {
    name: "Hindi",
    proficiency: "Read, Write and Speak",
    level: 5,
    tag: "FLUENT",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.35)",
    flag: "🪔",
  },
  {
    name: "Marathi",
    proficiency: "Read, Write and Speak",
    level: 4,
    tag: "PROFICIENT",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.35)",
    flag: "🌺",
  },
  {
    name: "German",
    proficiency: "Basic Conversational Level only",
    level: 2,
    tag: "LEARNING",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.35)",
    flag: "🥨",
  },
];

function SignalDots({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex items-end gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="rounded-sm transition-all duration-300"
          style={{
            width: 6,
            height: 6 + i * 3,
            background: i <= level ? color : "rgba(255,255,255,0.08)",
            boxShadow: i <= level ? `0 0 6px ${color}` : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function Languages() {
  return (
    <Reveal>
      <section id="languages" className="py-16 scroll-mt-20 px-6 md:px-14 lg:px-20">
        <SectionHeader label="communication stack" title="My Communication" accent="Stack" />
        <p className="font-mono text-sm text-cyan-400/60 -mt-8 mb-12 tracking-wide">
          // The languages I can actually use — not just debug.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative flex flex-col gap-4 p-5 rounded-2xl cursor-default"
              style={{
                background: "rgba(7,26,61,0.55)",
                border: `1px solid ${lang.color}22`,
                backdropFilter: "blur(12px)",
                boxShadow: `0 0 24px ${lang.glow}18`,
                transition: "box-shadow 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${lang.color}55`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 36px ${lang.glow}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${lang.color}22`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 24px ${lang.glow}18`;
              }}
            >
              {/* flag + icon */}
              <div className="flex items-center justify-between">
                <span className="text-2xl">{lang.flag}</span>
                <MessageSquare size={12} style={{ color: lang.color, opacity: 0.6 }} />
              </div>

              {/* language name */}
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{lang.name}</h3>
                <span
                  className="font-mono text-[9px] tracking-widest px-2 py-0.5 rounded-full border mt-1 inline-block"
                  style={{
                    color: lang.color,
                    borderColor: `${lang.color}40`,
                    background: `${lang.color}10`,
                  }}
                >
                  {lang.tag}
                </span>
              </div>

              {/* signal strength bars */}
              <SignalDots level={lang.level} color={lang.color} />

              {/* divider */}
              <div className="w-full h-px" style={{ background: `linear-gradient(90deg, transparent, ${lang.color}30, transparent)` }} />

              {/* proficiency description — exact text, never changed */}
              <p className="font-mono text-[11px] leading-relaxed" style={{ color: `${lang.color}cc` }}>
                {lang.proficiency}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
