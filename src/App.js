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
import { useEffect, useState } from "react";

function App() {
  const [opacity, setopacity] = useState(false);
  const [hide, sethide] = useState(false);
  const [timer, settimer] = useState(false);
  const [load, setload] = useState(false);

  setTimeout(() => {
    settimer(true);
  }, 2500);

  useEffect(() => {
    const show = () => {
      setopacity(true);
      setTimeout(() => {
        sethide(true);
      }, 1000);
    };

    if (timer && load) {
      show();
    }
  }, [load, timer]);

  return (
    <div>
      <Preloader opacity={opacity} hide={hide} />
      <Canvas />
      <div id="content" onLoad={(e) => setload(true)}>
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
