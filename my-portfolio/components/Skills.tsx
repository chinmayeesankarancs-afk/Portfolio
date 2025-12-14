import Reveal from "./Reveal";
export default function Skills() {
  const skills = [
    "Python",
    "C/C++",
    "Canva/Design UI",
    "Prompt Engineering/AI Tools",
    "React.js/Front-end Basics",
    "Next.js",
    "Tailwind CSS",
  ];

  return (
    <Reveal>
    <section 
    id="skills"
    className="py-20 scroll-mt-24">
      <h2 className="text-4xl font-bold mb-10 text-center">
        My <span className="text-purple-500">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white/5 border border-white/10 text-center py-4 rounded-xl 
            hover:bg-white/10 transition-all cursor-default
            shadow-md hover:shadow-purple-500/30 backdrop-blur-sm"
          >
            <p className="font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}
