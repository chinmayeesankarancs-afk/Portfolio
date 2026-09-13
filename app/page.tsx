import AboutMe from "../components/AboutMe";
import Spotlight from "../components/Spotlight";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Languages from "../components/Languages";
import CyberNavRail from "../components/CyberNavRail";

export default function Home() {
  return (
    <>
      {/* ── Fixed right-side cyber nav rail (88 px wide) ── */}
      <div
        className="hidden lg:block"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: 88,
          height: "100vh",
          zIndex: 40,
          overflow: "visible",
        }}
      >
        <CyberNavRail />
      </div>

      {/* ── Main content — right padding reserves space for the fixed rail ── */}
      <div className="lg:pr-[88px]">
        <div id="hero">
          <Spotlight />
        </div>
        <AboutMe />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Languages />
      </div>
    </>
  );
}
