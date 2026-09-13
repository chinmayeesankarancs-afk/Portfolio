import { Linkedin, FileText, Shield } from "lucide-react";
import { CyberLabel } from "./CyberUI";

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 px-6 md:px-14 lg:px-20 pb-6">
      <div
        className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          background: "rgba(7,26,61,0.55)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(34,211,238,0.15)",
          boxShadow: "0 0 32px rgba(34,211,238,0.05)",
        }}
      >
        {/* left — branding */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: "rgba(34,211,238,0.1)",
              border: "1px solid rgba(34,211,238,0.25)",
            }}
          >
            <Shield size={15} className="text-cyan-400" />
          </div>
          <div>
            <p className="font-bold text-white text-sm leading-none">Chinmayee Sankaran</p>
            <p className="font-mono text-[10px] text-cyan-400/60 tracking-widest mt-0.5">
              AI · CYBER · DESIGN
            </p>
          </div>
        </div>

        {/* center — contact */}
        <div className="text-center">
          <CyberLabel>Secure Channel</CyberLabel>
          <p className="font-mono text-xs text-gray-400 mt-1">
            chinmayee.sankaran.cs@gmail.com
          </p>
        </div>

        {/* right — links + copyright */}
        <div className="flex flex-col items-end gap-3">
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/chinmayee-sankaran-17b767330"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="/Chinmayee Sankaran - 2026 Cyber Resume.pdf"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Resume"
            >
              <FileText size={16} />
            </a>
          </div>
          <p className="font-mono text-[10px] text-gray-600 tracking-widest">
            © {new Date().getFullYear()} · ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </div>
    </footer>
  );
}
