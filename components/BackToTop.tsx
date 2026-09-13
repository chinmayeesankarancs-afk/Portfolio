"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
          style={{
            background: "rgba(7,20,50,0.85)",
            border: "1px solid rgba(34,211,238,0.3)",
            boxShadow: "0 0 14px rgba(34,211,238,0.15)",
            backdropFilter: "blur(12px)",
            color: "rgba(34,211,238,0.8)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 22px rgba(34,211,238,0.35)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(34,211,238,0.6)";
            (e.currentTarget as HTMLButtonElement).style.color = "#22d3ee";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 14px rgba(34,211,238,0.15)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(34,211,238,0.3)";
            (e.currentTarget as HTMLButtonElement).style.color = "rgba(34,211,238,0.8)";
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={15} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
