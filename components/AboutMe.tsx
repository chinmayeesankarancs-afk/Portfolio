import Reveal from "./Reveal";
export default function AboutMe() {
  return (
    <Reveal>
    <section 
    id = "about"
    className="py-20 max-w-5xl mx-auto px-6 scroll-mt-24">
      <h2 className="text-4xl font-bold mb-6">
        About <span className="text-purple-500">Me</span>
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I’m an <span className="text-white font-medium">AI-driven Computer Science undergraduate</span> with
        basic industrial experience in data analytics, UI/UX design, prompt engineering, and cybersecurity.
        I enjoy building clean, user-centric digital solutions that combine logic, design, and impact.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I’ve worked on <span className="text-white font-medium">industry-grade simulations</span> with
        organizations like Tata Group, Lloyds Banking Group, and Datacom, applying real-world problem-solving
        approaches in analytics, security, and AI-assisted workflows.
      </p>

      <p className="text-lg text-gray-300 leading-relaxed">
        My academic work includes an <span className="text-white font-medium">IEEE-published research paper</span> on
        secure ASCII-based communication systems. I’m currently seeking short-term virtual internship
        opportunies and collaborative projects to further strengthen my practical and hands-on industry experience.
      </p>
    </section>
    </Reveal>
  );
}
