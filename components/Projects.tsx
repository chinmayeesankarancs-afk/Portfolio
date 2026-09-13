"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { CyberPanel, SectionHeader, StatusBadge, CyberLabel, CyberDivider } from "./CyberUI";
import { ExternalLink, Shield, Layers } from "lucide-react";

// ── Screenshot assets ────────────────────────────────────────────────────────
// Place actual project screenshots in /public/screenshots/.
// If a screenshot path is undefined the preview slot is hidden gracefully.
// Aspect ratio is kept at 16/9 via the container; images use object-cover.
const projects = [
  // ── 1. CyberLens — Flagship ──────────────────────────────────────────────
  {
    codename: "CYBERLENS",
    title: "CyberLens — AI-Powered Cybersecurity Chrome Extension",
    status: "Active",
    statusColor: "green" as const,
    flagship: true,
    description:
      "A self-initiated Chrome extension that analyzes websites in real time to identify phishing attempts, suspicious domains, insecure connections, misleading URLs, and other security risks before a user interacts with a site. Features AI-generated safety explanations and a dynamic Trust Score with visual risk indicators.",
    capabilities: [
      "AI-powered website trust analysis",
      "Real-time phishing & typosquatting detection",
      "HTTPS & SSL certificate verification",
      "Cookie and browser security analysis",
      "Dynamic Trust Score with visual risk indicators",
    ],
    tech: ["React", "TypeScript", "Chrome Extensions API", "Tailwind CSS", "AI-assisted"],
    meta: { type: "Cybersecurity Tool", pub: "Personal Project" },
    link: "https://github.com/chinmayeesankarancs-afk/CyberLens",
    pubLink: undefined as string | undefined,
    screenshots: [
      "/screenshots/cyberlens-1.png",
      "/screenshots/cyberlens-2.png",
      "/screenshots/cyberlens-3.png",
      "/screenshots/cyberlens-4.png",
    ],
  },
  // ── 2. IEEE Research Paper ────────────────────────────────────────────────
  {
    codename: "TRICODE-ARTGEN",
    title: "TRICODE ARTGEN — ASCII Art Encryption System",
    status: "Published",
    statusColor: "blue" as const,
    flagship: false,
    description:
      "A three-layer secure communication system using ASCII art encoding, fragile watermarking, and encrypted message handling. Full-stack project with ReactJS UI, Flask backend, and MySQL database. Published as IEEE research paper.",
    capabilities: [] as string[],
    tech: ["React.js", "Flask", "JavaScript", "MySQL", "Security"],
    meta: { type: "Security Research", pub: "IEEE Paper" },
    link: undefined as string | undefined,
    pubLink: "https://ieeexplore.ieee.org/document/11581131",
    screenshots: [] as string[],
  },
  // ── 3. LifelineMeds ───────────────────────────────────────────────────────
  {
    codename: "LIFELINE-MEDS",
    title: "LifelineMeds — Family Healthcare App",
    status: "Active",
    statusColor: "cyan" as const,
    flagship: false,
    description:
      "Complete UI/UX flow for a medicine lookup and health tracking platform. Interactive components, analytics-friendly layouts, and backend schema plans for AI-based recommendations.",
    capabilities: [] as string[],
    tech: ["React.js", "UI/UX", "Node.js", "Wireframing"],
    meta: { type: "UI/UX + Analytics", pub: "Live Project" },
    link: "https://lifeline-meds-copy-4b753bc2.base44.app",
    pubLink: undefined as string | undefined,
    screenshots: ["/screenshots/lifeline-meds.png"],
  },
];

// ── Static single-image preview ─────────────────────────────────────────────
function ProjectPreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden flex items-center justify-center"
      style={{
        background: "rgba(3,12,36,0.6)",
        border: "1px solid rgba(34,211,238,0.18)",
        boxShadow: "0 0 20px rgba(34,211,238,0.07)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={500}
        className="w-full h-auto rounded-xl"
        style={{ display: "block", objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

// ── 4-image auto-slideshow with prev/next controls ───────────────────────────
function ProjectSlideshow({ srcs, alt }: { srcs: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (dir: 1 | -1) => {
    setPaused(true);
    setCurrent((c) => (c + dir + srcs.length) % srcs.length);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % srcs.length);
    }, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, srcs.length]);

  // resume auto-play 4 s after last manual interaction
  useEffect(() => {
    if (!paused) return;
    const t = setTimeout(() => setPaused(false), 4000);
    return () => clearTimeout(t);
  }, [paused, current]);

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden"
      style={{
        background: "rgba(3,12,36,0.6)",
        border: "1px solid rgba(34,211,238,0.18)",
        boxShadow: "0 0 24px rgba(34,211,238,0.10)",
      }}
    >
      {/* slides */}
      <div className="relative w-full">
        {srcs.map((src, i) => (
          <div
            key={src}
            className="transition-opacity duration-700"
            style={{
              opacity: i === current ? 1 : 0,
              position: i === current ? "relative" : "absolute",
              top: 0, left: 0, width: "100%",
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <Image
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              width={800}
              height={500}
              className="w-full h-auto rounded-xl"
              style={{ display: "block", objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* prev / next buttons */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous screenshot"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200"
        style={{
          background: "rgba(3,12,36,0.75)",
          border: "1px solid rgba(34,211,238,0.35)",
          color: "rgba(34,211,238,0.9)",
          backdropFilter: "blur(4px)",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next screenshot"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200"
        style={{
          background: "rgba(3,12,36,0.75)",
          border: "1px solid rgba(34,211,238,0.35)",
          color: "rgba(34,211,238,0.9)",
          backdropFilter: "blur(4px)",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* dot indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {srcs.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPaused(true); setCurrent(i); }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 14 : 6,
              height: 6,
              background: i === current ? "rgba(34,211,238,0.9)" : "rgba(34,211,238,0.3)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Reveal>
      <section id="projects" className="py-16 scroll-mt-20 px-6 md:px-14 lg:px-20">
        <SectionHeader label="mission archive" title="Active" accent="Projects" />

        <div className="grid md:grid-cols-2 gap-5 items-start">
          {projects.map((p) => (
            <CyberPanel key={p.codename} className="p-5 flex flex-col gap-3" hover>

              {/* top metadata strip — secLevel badge removed */}
              <div className="flex items-center gap-2 flex-wrap">
                <Shield size={13} className="text-cyan-400" />
                <CyberLabel>PROJECT · {p.codename}</CyberLabel>
                <div className="ml-auto flex items-center gap-2">
                  {p.flagship && (
                    <span
                      className="font-mono text-[9px] px-2 py-0.5 rounded border text-yellow-300 border-yellow-400/30"
                      style={{ background: "rgba(234,179,8,0.07)" }}
                    >
                      ⭐ FLAGSHIP
                    </span>
                  )}
                  <StatusBadge label={p.status} color={p.statusColor} />
                </div>
              </div>

              <CyberDivider />

              {/* ── Screenshot preview ── */}
              {p.screenshots.length === 4 && (
                <ProjectSlideshow srcs={p.screenshots} alt={p.title} />
              )}
              {p.screenshots.length === 1 && (
                <ProjectPreview src={p.screenshots[0]} alt={p.title} />
              )}

              {/* title */}
              <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>

              {/* meta row */}
              <div className="flex gap-4">
                {Object.entries(p.meta).map(([k, v]) => (
                  <div key={k}>
                    <CyberLabel>{k.toUpperCase()}</CyberLabel>
                    <p className="font-mono text-xs text-cyan-300 mt-0.5">{v}</p>
                  </div>
                ))}
              </div>

              {/* description */}
              <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>

              {/* key capabilities — only shown when present */}
              {p.capabilities.length > 0 && (
                <ul className="space-y-1 mt-1">
                  {p.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                      <span className="text-cyan-400/60 mt-0.5 shrink-0">›</span>
                      {c}
                    </li>
                  ))}
                </ul>
              )}

              {/* tech stack */}
              <div className="flex items-center gap-2 flex-wrap">
                <Layers size={12} className="text-cyan-400/60" />
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-lg text-cyan-300 border border-cyan-400/18"
                    style={{ background: "rgba(34,211,238,0.06)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-auto flex flex-wrap gap-3">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 self-start font-mono text-xs text-cyan-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={13} />
                    &gt; Launch Mission
                  </a>
                )}
                {p.pubLink && (
                  <a
                    href={p.pubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 self-start font-mono text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
                    style={{
                      color: "rgba(34,211,238,1)",
                      border: "1px solid rgba(34,211,238,0.35)",
                      background: "rgba(34,211,238,0.07)",
                      boxShadow: "0 0 10px rgba(34,211,238,0.12)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(34,211,238,0.15)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 18px rgba(34,211,238,0.28)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(34,211,238,0.07)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 10px rgba(34,211,238,0.12)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(34,211,238,1)";
                    }}
                  >
                    <ExternalLink size={13} />
                    &gt; View Publication
                  </a>
                )}
              </div>
            </CyberPanel>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
