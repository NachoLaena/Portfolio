import Hero from "./components/hero";
import Projects from "./components/projects";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <main>
      <div className="bg-[#000000] bg-fixed bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="max-w-5xl mx-auto p-4">
          <Hero />
          <AboutMe />
          <Projects />
        </div>
      </div>
    </main>
  );
}

export default App;
