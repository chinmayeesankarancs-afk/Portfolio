"use client";

import { useState, useEffect } from "react";
import { Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const links = ["About", "Skills", "Projects", "Certifications", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // outer container — full width, sticky
    <div className="sticky top-0 z-50 w-full px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl"
        style={{
          background: scrolled
            ? "rgba(2,6,23,0.92)"
            : "rgba(7,26,61,0.75)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(34,211,238,0.22)",
          boxShadow: "0 0 32px rgba(34,211,238,0.07), inset 0 1px 0 rgba(34,211,238,0.08)",
          transition: "background 0.3s",
        }}
      >
        {/* ── Logo ── */}
        <div className="flex items-center gap-3">
          {/* shield icon with pulse */}
          <div
            className="relative w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: "rgba(34,211,238,0.1)",
              border: "1px solid rgba(34,211,238,0.3)",
              boxShadow: "0 0 14px rgba(34,211,238,0.15)",
            }}
          >
            <Shield size={17} className="text-cyan-400" />
            {/* animated status pulse */}
            <motion.span
              className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400"
              animate={{ opacity: [1, 0.2, 1], scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* name + tagline */}
          <div>
            <p className="font-bold text-white text-sm leading-none tracking-tight">
              Chinmayee
            </p>
            <p className="font-mono text-[10px] text-cyan-400/70 tracking-widest leading-none mt-0.5">
              AI · CYBER · DESIGN
            </p>
          </div>
        </div>

        {/* ── Nav links ── */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="group relative px-4 py-2 font-mono text-xs text-gray-400 tracking-widest uppercase rounded-lg transition-colors duration-200 hover:text-cyan-300"
              style={{ letterSpacing: "0.1em" }}
            >
              {/* terminal hover prefix */}
              <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity mr-0.5">
                &gt;
              </span>
              {l}
              {/* underline glow */}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-px bg-cyan-400/50 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* ── CTA ── */}
        <a
          href="#projects"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs text-white font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-[1.04]"
          style={{
            background: "rgba(34,211,238,0.1)",
            border: "1px solid rgba(34,211,238,0.4)",
            boxShadow: "0 0 16px rgba(34,211,238,0.1)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 28px rgba(34,211,238,0.3)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 16px rgba(34,211,238,0.1)")
          }
        >
          View My Work
          <ArrowRight size={13} />
        </a>

        {/* ── Mobile hamburger (minimal) ── */}
        <div className="flex md:hidden gap-3">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-[10px] text-gray-400 hover:text-cyan-400 transition uppercase tracking-widest"
            >
              {l.slice(0, 3)}
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
