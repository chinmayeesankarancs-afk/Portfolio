export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-6 bg-black/60 backdrop-blur-md sticky top-0 z-50">
      <h1 className="font-bold text-xl">Chinmayee</h1>

      <div className="flex gap-6 text-sm">
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
        <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
      </div>
    </nav>
  );
}
