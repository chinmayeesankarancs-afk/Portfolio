import Reveal from "./Reveal";
export default function Spotlight() {
  return (
    <Reveal>
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-start px-8 md:px-20 lg:px-32">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hi, I'm <span className="text-blue-500">Chinmayee Sankaran</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl">
        Tech that <span className="text-purple-300 font-semibold">works </span>, 
        Design that <span className="text-purple-300 font-semibold">communicates </span>, 
        and AI that <span className="text-purple-300 font-semibold">elevates </span> - that's my workflow.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
          View My Work
        </a>

      </div>
    </section>
    </Reveal>
  );
}
