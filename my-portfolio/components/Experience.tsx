import Reveal from "./Reveal";
export default function Experience() {
  const experiences = [
    {
      role: "UX Design Virtual Experience",
      org: "Lloyds Banking Group (Forage)",
      period: "2025",
      points: [
        "Conducted competitor research and analyzed user feedback",
        "Designed survey insights and improved user journeys",
        "Created data-driven UX recommendations supported by visualizations",
      ],
    },
    {
      role: "Data Analytics Virtual Experience",
      org: "Tata Group (Forage)",
      period: "2025",
      points: [
        "Performed exploratory data analysis using GenAI-assisted tools",
        "Designed a no-code predictive model framework",
        "Proposed an AI-powered collections strategy with compliance focus",
      ],
    },
    {
      role: "Cybersecurity Analyst Virtual Experience",
      org: "Tata Group (Forage)",
      period: "2025",
      points: [
        "Assessed IAM strategies and identified security risks",
        "Created threat models and mitigation frameworks",
        "Applied cybersecurity best practices in real-world scenarios",
      ],
    },
    {
      role: "Partnering with AI Virtual Experience",
      org: "Datacom (Forage)",
      period: "2025",
      points: [
        "Used GenAI tools for writing, debugging, and problem-solving",
        "Prepared client-ready documentation and UI concepts",
      ],
    },
    {
      role: "Graphic Designer",
      org: "CodeZilla — Technical Club, SRMIST",
      period: "2025",
      points: [
        "Designed posters and banners for recruitment and technical events",
        "Created social media creatives published on official Instagram page",
      ],
    },
    {
      role: "Graphic Designer",
      org: "Campus Life — Cultural Community, SRMIST",
      period: "2025",
      points: [
        "Designed event posters for cultural and college-wide events",
        "Collaborated with team members to align visual branding",
      ],
    },
  ];

  return (
    <Reveal>
    <section className="py-20 max-w-5xl mx-auto scroll-mt-24" id="experience">
      <h2 className="text-4xl font-bold mb-12 text-center">
        My <span className="text-purple-500">Experience</span>
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white/5 border border-white/10 rounded-2xl p-6
            backdrop-blur-lg shadow-md hover:shadow-purple-500/20 transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>

            <p className="text-purple-400 font-medium mb-3">{exp.org}</p>

            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}
