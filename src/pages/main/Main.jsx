import React, { useState } from "react";
import "./main.scss";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Intro from "../../components/intro/Intro";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import About from "../../components/about/About";



const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <div className="main">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
