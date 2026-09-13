import Reveal from "./Reveal";
import { CyberPanel, SectionHeader, StatusBadge, CyberLabel, CyberDivider } from "./CyberUI";
import { User, GraduationCap, Cpu, Target } from "lucide-react";

const specializations = [
  { label: "AI & Machine Learning", icon: "🤖" },
  { label: "Cybersecurity", icon: "🛡" },
  { label: "UI / UX Design", icon: "🎨" },
  { label: "Data Analytics", icon: "📊" },
  { label: "Prompt Engineering", icon: "⚡" },
];

export default function AboutMe() {
  return (
    <Reveal>
      <section id="about" className="py-16 px-6 md:px-16 lg:px-20 scroll-mt-20">
        <SectionHeader label="operator profile" title="About" accent="Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* ── Profile card ── */}
          <CyberPanel className="p-5 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <User size={14} className="text-cyan-400" />
              <CyberLabel>Operator Profile</CyberLabel>
              <div className="ml-auto"><StatusBadge label="Active" color="green" /></div>
            </div>
            <CyberDivider />
            <p className="text-gray-300 leading-relaxed text-sm mt-3">
              I&apos;m an{" "}
              <span className="text-white font-medium">AI-driven Computer Science undergraduate</span>{" "}
              with industrial experience in data analytics, UI/UX design, prompt engineering, and
              cybersecurity. I build clean, user-centric digital solutions that combine logic, design,
              and real-world impact.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm mt-3">
              I&apos;ve completed{" "}
              <span className="text-white font-medium">industry-grade simulations</span> with Tata
              Group, Lloyds Banking Group, and Datacom — applying problem-solving in analytics,
              security, and AI-assisted workflows.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm mt-3">
              My academic work includes an{" "}
              <span className="text-white font-medium">IEEE-published research paper</span> on secure
              ASCII-based communication systems.
            </p>
          </CyberPanel>

          {/* ── Education card ── */}
          <CyberPanel className="p-5" hover>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={14} className="text-cyan-400" />
              <CyberLabel>Education Clearance</CyberLabel>
              <div className="ml-auto"><StatusBadge label="Verified" color="blue" /></div>
            </div>
            <CyberDivider />
            <div className="mt-3 space-y-3">
              <div>
                <p className="text-white font-semibold text-sm">B.Tech — Computer Science & Engineering</p>
                <p className="font-mono text-xs text-cyan-400/80 mt-0.5">SRM Institute of Science & Technology</p>
                <p className="font-mono text-[10px] text-gray-500 mt-1 tracking-widest">2023 – 2027 · Chennai, India</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {["IEEE Publication", "Cybersecurity Research", "AI & ML Track"].map((h) => (
                  <span
                    key={h}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-lg text-cyan-300 border border-cyan-400/20"
                    style={{ background: "rgba(34,211,238,0.06)" }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </CyberPanel>

          {/* ── Specializations card ── */}
          <CyberPanel className="p-5" hover>
            <div className="flex items-center gap-2 mb-3">
              <Cpu size={14} className="text-cyan-400" />
              <CyberLabel>Core Specializations</CyberLabel>
              <div className="ml-auto"><StatusBadge label="Loaded" color="cyan" /></div>
            </div>
            <CyberDivider />
            <div className="mt-3 space-y-2.5">
              {specializations.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 hover:border-cyan-400/25 cursor-default"
                  style={{
                    background: "rgba(34,211,238,0.04)",
                    border: "1px solid rgba(34,211,238,0.1)",
                  }}
                >
                  <span className="text-base">{s.icon}</span>
                  <span className="font-mono text-xs text-gray-300 tracking-wide">{s.label}</span>
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                </div>
              ))}
            </div>
          </CyberPanel>

          {/* ── Career Objective card ── */}
          <CyberPanel className="p-5 md:col-span-2" hover>
            <div className="flex items-center gap-2 mb-3">
              <Target size={14} className="text-cyan-400" />
              <CyberLabel>Mission Objective</CyberLabel>
              <div className="ml-auto"><StatusBadge label="In Progress" color="purple" /></div>
            </div>
            <CyberDivider />
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              Seeking{" "}
              <span className="text-white font-medium">short-term virtual internships</span> and
              collaborative projects to deepen practical, hands-on industry experience. Focused on
              building at the intersection of{" "}
              <span className="text-cyan-400">AI engineering</span>,{" "}
              <span className="text-cyan-400">cybersecurity</span>, and{" "}
              <span className="text-cyan-400">user-centered design</span> — delivering solutions that
              are secure, intelligent, and human-first.
            </p>
          </CyberPanel>

        </div>
      </section>
    </Reveal>
  );
}
