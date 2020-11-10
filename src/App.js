import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import data from "./data/data.json";
import icons from "./assets/icons/icons";
import Canvas from "./components/layout/Canvas";
import Navbar from "./components/layout/Navbar";
import Welcome from "./components/content/Welcome";
import Skills from "./components/content/skill/Skills";
import About from "./components/content/about/About";
import Experience from "./components/content/experience/Experience";
import Projects from "./components/content/projects/Projects";
import Contact from "./components/content/Contact";
import Social from "./components/layout/Social";
import Top from "./components/layout/Top";
import Preloader from "./components/layout/Preloader";

function App() {
  return (
    <div>
      <Preloader />
      <Canvas />
      <div id="content">
        <Navbar links={data.links} />
        <Welcome resume={data.resume} social={data.social} />
        <About />
        <Skills skills={data.skills} icons={icons} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Contact social={data.social} resume={data.resume} />
        <Social links={data.social} />
        <Top />
      </div>
    </div>
  );
}

export default App;
