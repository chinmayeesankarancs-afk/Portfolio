"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { CyberPanel, SectionHeader, CyberLabel, CyberDivider } from "./CyberUI";
import { Award, X, ZoomIn } from "lucide-react";

const certifications = [
  {
    id: "google-cybersecurity",
    codename: "CERT-GOOGLE",
    title: "Google Professional Cybersecurity Certificate",
    issuer: "Google",
    platform: "Coursera",
    status: "Verified",
    year: "2026",
    skills: ["Network Security", "SIEM Tools", "Python", "Linux", "Threat Analysis", "IDS", "Vulnerability Management"],
    image: "/screenshots/google certificate.jpeg",
  },
];

function CertLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(2,6,23,0.92)", backdropFilter: "blur(8px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(34,211,238,0.3)", boxShadow: "0 0 60px rgba(34,211,238,0.15)" }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={900}
            className="w-full h-auto"
            style={{ display: "block" }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
            style={{ background: "rgba(3,12,36,0.85)", border: "1px solid rgba(34,211,238,0.35)", color: "rgba(34,211,238,0.9)" }}
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Certifications() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const activeCert = certifications.find((c) => c.id === lightbox);

  return (
    <Reveal>
      <section id="certifications" className="py-16 scroll-mt-20 px-6 md:px-14 lg:px-20">
        <SectionHeader label="verified credentials" title="Certifications &" accent="Achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <CyberPanel key={cert.id} className="p-0 overflow-hidden flex flex-col" hover>

              {/* certificate image preview — click to expand */}
              <div
                className="relative w-full group cursor-pointer"
                onClick={() => setLightbox(cert.id)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={900}
                  height={640}
                  className="w-full h-auto"
                  style={{ display: "block" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(3,12,36,0.55)" }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs"
                    style={{
                      background: "rgba(34,211,238,0.12)",
                      border: "1px solid rgba(34,211,238,0.4)",
                      color: "rgba(34,211,238,1)",
                      boxShadow: "0 0 20px rgba(34,211,238,0.2)",
                    }}
                  >
                    <ZoomIn size={13} />
                    View Full Certificate
                  </div>
                </div>
              </div>

              {/* card body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* header strip */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Award size={13} className="text-cyan-400" />
                  <CyberLabel>{cert.codename}</CyberLabel>
                  <div className="ml-auto">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-widest uppercase border"
                      style={{
                        color: "#34d399",
                        borderColor: "rgba(52,211,153,0.35)",
                        background: "rgba(52,211,153,0.07)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                      {cert.status}
                    </span>
                  </div>
                </div>

                <CyberDivider />

                {/* title + meta */}
                <div>
                  <h3 className="text-base font-bold text-white leading-snug">{cert.title}</h3>
                  <p className="font-mono text-xs text-cyan-400/80 mt-1">
                    {cert.issuer} · {cert.platform} · {cert.year}
                  </p>
                </div>

                {/* skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-lg text-cyan-300 border border-cyan-400/18"
                      style={{ background: "rgba(34,211,238,0.06)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* view button */}
                <div className="mt-auto pt-2">
                  <button
                    onClick={() => setLightbox(cert.id)}
                    className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
                    style={{
                      color: "rgba(34,211,238,1)",
                      border: "1px solid rgba(34,211,238,0.35)",
                      background: "rgba(34,211,238,0.07)",
                      boxShadow: "0 0 10px rgba(34,211,238,0.12)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(34,211,238,0.15)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 18px rgba(34,211,238,0.28)";
                      (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(34,211,238,0.07)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 10px rgba(34,211,238,0.12)";
                      (e.currentTarget as HTMLButtonElement).style.color = "rgba(34,211,238,1)";
                    }}
                  >
                    <ZoomIn size={13} />
                    &gt; View Certificate
                  </button>
                </div>
              </div>
            </CyberPanel>
          ))}
        </div>

        {/* lightbox */}
        {lightbox && activeCert && (
          <CertLightbox
            src={activeCert.image}
            alt={activeCert.title}
            onClose={() => setLightbox(null)}
          />
        )}
      </section>
    </Reveal>
  );
}
