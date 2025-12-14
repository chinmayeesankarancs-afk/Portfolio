import Reveal from "./Reveal";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section 
    id = "contact"
    className="py-20 max-w-4xl mx-auto px-6 scroll-mt-24">
      {/* Heading */}
    <Reveal>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          Let’s <span className="text-purple-500">Connect</span>
        </h2>

        {/* Status Badge */}
        <span className="inline-block px-4 py-1 text-sm rounded-full 
        bg-green-500/10 text-green-400 border border-green-400/20">
          Available for internships
        </span>

        {/* 👆 Later you can change text to:
            "Working with XYZ"
            "Currently interning at ___"
            "Open to collaborations"
        */}
      </div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=chinmayee.sankaran.cs@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition"
        >
          <div className="flex items-center gap-4">
            <Mail className="text-purple-400 group-hover:scale-110 transition" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium text-purple-400">
                chinmayee.sankaran.cs@gmail.com
              </p>
            </div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/chinmayee-sankaran-17b767330"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/5 border border-white/10 rounded-xl p-6
          transition-all duration-300
          hover:bg-white/10 hover:-translate-y-1
          hover:shadow-purple-500/30 shadow-md"
        >
          <div className="flex items-center gap-4">
            <Linkedin className="text-purple-400 group-hover:scale-110 transition" />
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="font-medium text-purple-400">
                linkedin.com/in/chinmayee-sankaran-17b767330
              </p>
            </div>
          </div>
        </a>

        {/* Location */}
        <div
          className="bg-white/5 border border-white/10 rounded-xl p-6
          shadow-md"
        >
          <p className="text-sm text-gray-400 mb-1">Location</p>
          <p className="font-medium text-white">Chennai, India</p>
        </div>

        {/* Resume */}
        <a
          href="/public/resume.pdf"
          className="group bg-purple-600 hover:bg-purple-700 transition-all
          rounded-xl p-6 text-center font-medium text-white
          hover:-translate-y-1 shadow-md"
        >
          Download Resume
        </a>
      </div>
      </Reveal>
    </section>
  );
}
