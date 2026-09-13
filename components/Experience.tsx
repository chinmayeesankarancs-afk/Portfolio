import Reveal from "./Reveal";
import { CyberPanel, SectionHeader, StatusBadge, CyberLabel, CyberDivider } from "./CyberUI";
import { CheckCircle2, Briefcase } from "lucide-react";

const operations = [
  // 1. Mastercard — Cybersecurity Awareness Analyst
  {
    op: "CS-MASTERCARD-2025",
    role: "Cyber Security Awareness Analyst Virtual Experience",
    org: "Mastercard (Forage)",
    period: "2026",
    category: "Cybersecurity Operations",
    color: "green" as const,
    points: [
      "Helped identify and report cybersecurity threats, including phishing attacks",
      "Analyzed organizational security awareness gaps and identified areas requiring stronger employee security training",
    ],
  },
  // 2. Tata — Cybersecurity Analyst
  {
    op: "CS-TATA-2025",
    role: "Cybersecurity Analyst Virtual Experience",
    org: "Tata Group (Forage)",
    period: "2025",
    category: "Security Operations",
    color: "green" as const,
    points: [
      "Assessed IAM strategies and identified security risks",
      "Created threat models and mitigation frameworks",
      "Applied cybersecurity best practices in real-world scenarios",
    ],
  },
  // 3. Lloyds — UX Design
  {
    op: "UX-LBG-2025",
    role: "UX Design Virtual Experience",
    org: "Lloyds Banking Group (Forage)",
    period: "2025",
    category: "Design Intelligence",
    color: "blue" as const,
    points: [
      "Conducted competitor research and analyzed user feedback",
      "Designed survey insights and improved user journeys",
      "Created data-driven UX recommendations supported by visualizations",
    ],
  },
  // 4. Datacom — Partnering with AI
  {
    op: "AI-DATACOM-2025",
    role: "Partnering with AI Virtual Experience",
    org: "Datacom (Forage)",
    period: "2025",
    category: "AI Engineering",
    color: "cyan" as const,
    points: [
      "Used GenAI tools for writing, debugging, and problem-solving",
      "Prepared client-ready documentation and UI concepts",
    ],
  },
  // 5. BCG — GenAI Consulting Team Data Scientist
  {
    op: "AI-BCG-2025",
    role: "GenAI Consulting Team Data Scientist Virtual Experience",
    org: "BCG (Forage)",
    period: "2026",
    category: "AI Engineering / Data Analytics",
    color: "cyan" as const,
    points: [
      "Gained hands-on experience in Python programming using libraries such as pandas for data manipulation",
      "Integrated and interpreted financial data from SEC 10-K and 10-Q reports",
      "Built a rule-based GenAI chatbot that provides user-friendly financial insights and analysis",
    ],
  },
  // 6. Tata Group — Data Analytics
  {
    op: "DA-TATA-2025",
    role: "Data Analytics Virtual Experience",
    org: "Tata Group (Forage)",
    period: "2025",
    category: "Analytics Operations",
    color: "cyan" as const,
    points: [
      "Performed exploratory data analysis using GenAI-assisted tools",
      "Designed a no-code predictive model framework",
      "Proposed an AI-powered collections strategy with compliance focus",
    ],
  },
  // ── Club / design roles ──────────────────────────────────────────────────
  {
    op: "GD-CODEZILLA-2025",
    role: "Graphic Designer",
    org: "CodeZilla — Technical Club, SRMIST",
    period: "2025",
    category: "Visual Design",
    color: "blue" as const,
    points: [
      "Designed posters and banners for recruitment and technical events",
      "Created social media creatives published on official Instagram page",
    ],
  },
  {
    op: "GD-CAMPUSLIFE-2025",
    role: "Graphic Designer",
    org: "Campus Life — Cultural Community, SRMIST",
    period: "2025",
    category: "Visual Design",
    color: "blue" as const,
    points: [
      "Designed event posters for cultural and college-wide events",
      "Collaborated with team members to align visual branding",
    ],
  },
];

export default function Experience() {
  return (
    <Reveal>
      <section id="experience" className="py-16 scroll-mt-20 px-6 md:px-14 lg:px-20">
        <SectionHeader label="operation records" title="Experience &" accent="Credentials" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {operations.map((op) => (
            <CyberPanel key={op.op} className="p-4 flex flex-col gap-2.5" hover>

              {/* header */}
              <div className="flex items-center gap-2 flex-wrap">
                <Briefcase size={13} className="text-cyan-400" />
                <CyberLabel>{op.op}</CyberLabel>
                <div className="ml-auto">
                  <StatusBadge label="Completed" color={op.color} />
                </div>
              </div>

              <CyberDivider />

              {/* role & org */}
              <div>
                <h3 className="text-sm font-bold text-white leading-snug">{op.role}</h3>
                <p className="font-mono text-[11px] text-cyan-400/80 mt-0.5">{op.org}</p>
              </div>

              {/* category + period */}
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[9px] px-2 py-0.5 rounded border text-blue-300 border-blue-400/22"
                  style={{ background: "rgba(96,165,250,0.07)" }}
                >
                  {op.category}
                </span>
                <span className="font-mono text-[10px] text-gray-500">{op.period}</span>
              </div>

              {/* bullet points */}
              <ul className="space-y-1.5 mt-1">
                {op.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                    <CheckCircle2 size={11} className="text-cyan-400/60 mt-0.5 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </CyberPanel>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
