import { Linkedin, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 mt-32 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center text-gray-400">

        {/* Name + Email (NO icon here) */}
        <p className="text-lg font-medium text-white">
          Chinmayee Sankaran
          <span className="text-gray-400 font-normal">
            {" "}· chinmayee.sankaran.cs@gmail.com
          </span>
        </p>

        {/* Icons row */}
        <div className="flex gap-6">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/chinmayee-sankaran-17b767330"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition"
            aria-label="Resume"
          >
            <FileText />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Chinmayee Sankaran
        </p>

      </div>
    </footer>
  );
}
