export default function NavBar() {
  return (
    <nav className="fixed top-2 lg:top-4">
      <div className="flex bg-primary text-primary-foreground rounded-md p-1 border border-slate-700 *:px-2 *:rounded-sm shadow-sm shadow-slate-700">
        <a
          href="#home"
          className="active:bg-slate-200 active:bg-opacity-20 lg:hover:bg-slate-200 lg:hover:bg-opacity-20 transition-colors duration-300 ease-in-out"
        >
          Home
        </a>
        <a
          href="#projects"
          className="active:bg-slate-200 active:bg-opacity-20 lg:hover:bg-slate-200 lg:hover:bg-opacity-20 transition-colors duration-300 ease-in-out"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="active:bg-slate-200 active:bg-opacity-20 lg:hover:bg-slate-200 lg:hover:bg-opacity-20 transition-colors duration-300 ease-in-out"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
