import Reveal from "./Reveal";
export default function Projects() {
  const projects = [
    {
      title: "TRICODE ARTGEN — ASCII Art Encryption System",
      description:
        "A three-layer secure communication system using ASCII art encoding, fragile watermarking, and encrypted message handling. Full-stack project with ReactJS UI, Flask backend, and MySQL database. Published as IEEE research paper.",
      tech: ["React.js", "Flask", "JavaScript", "MySQL", "Security"]
    },
    {
      title: "LifeLine Meds — Family Healthcare App (UI/UX + Analytics)",
      description:
        "Designed a complete UI/UX flow for a medicine lookup and health tracking platform. Created interactive components, analytics-friendly layouts, and backend schema plans for AI-based recommendations.",
      link: "https://lifeline-meds-copy-4b753bc2.base44.app", // Replace dot with actual domain
      tech: ["React.js", "UI/UX", "Node.js", "Wireframing"]
    },
  ];

  return (
    <Reveal>
    <section className="py-20 scroll-mt-24" id="projects">
      <h2 className="text-4xl font-bold mb-10 text-center">
        My <span className="text-purple-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            className="block bg-white/5 border border-white/10 p-6 rounded-2xl
            hover:bg-white/10 hover:scale-[1.03] transition-all backdrop-blur-lg
            shadow-md hover:shadow-purple-500/30 cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

            <p className="text-sm text-gray-300 mb-4">{p.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full border border-purple-400/20"
                >
                  {t}
                </span>
              ))}
            </div>
          {p.link && (
            <span className="text-purple-400 font-medium hover:underline">
              View Project →
            </span>
          )}
          </a>
        ))}
      </div>
    </section>
    </Reveal>
  );
}
