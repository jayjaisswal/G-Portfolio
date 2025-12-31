import Nav from "./components/Nav"
import MySkills from "./components/MySkills"
import Home from './components/Home'
import Education from "./components/Education"
import MyProjects from "./components/MyProjects"
import MyInvolvement from "./components/MyInvolvement"
import Contact from "./components/Contact"
import ParticlesBackground from "./components/ParticlesBackground"
import { useEffect, useState } from "react"

// import VeiwAnimation from "./animations/veiwAnimation"
function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      {/* Bottom-most layer */}
      <ParticlesBackground theme={theme} />

      <div
        // className="w-11/12"
      >
        <Nav setTheme={setTheme} theme={theme} />
        <Home />
        <MySkills />
        <Education />
        {/* <MyProjects /> */}
        {/* <MyInvolvement /> */}
        {/* <Contact /> */}
      </div>
    </>
  );
}

export default App