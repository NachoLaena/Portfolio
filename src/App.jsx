import Hero from "./components/hero";
import Projects from "./components/projects";

function App() {
  return (
    <main>
      <div className=" bg-[#00091d] bg-fixed bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:40px_40px] p-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-20 md:py-20">
          <Hero />
          <Projects />
        </div>
      </div>
    </main>
  );
}

export default App;
