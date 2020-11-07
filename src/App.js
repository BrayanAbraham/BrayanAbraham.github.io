import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import data from "./data/data.json";
import Canvas from "./components/layout/Canvas";
import Navbar from "./components/layout/Navbar";
import Welcome from "./components/content/Welcome";
import Skills from "./components/content/skill/Skills";
import About from "./components/content/about/About";
import Experience from "./components/content/Experience";
import Projects from "./components/content/Projects";
import Contact from "./components/content/Contact";
import Social from "./components/layout/Social";
import Top from "./components/layout/Top";

function App() {
  return (
    <div>
      <Canvas />
      <div id="content">
        <Navbar links={data.links} />
        <Welcome />
        <About />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects />
        <Contact social={data.social} />
        <Social links={data.social} />
        <Top />
      </div>
    </div>
  );
}

export default App;
