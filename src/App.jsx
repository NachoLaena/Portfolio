import Hero from "./components/hero";
import NavBar from "./components/navBar";
import Projects from "./components/projects";

function App() {
  return (
    <main>
      <div id="home" className="bg-[#00091d] bg-fixed bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:40px_40px] p-4">
        <div className="max-w-5xl mx-auto items-center flex flex-col gap-20">
          <NavBar />
          <Hero />
          <Projects />
        </div>
      </div>
    </main>
  );
}

export default App;
