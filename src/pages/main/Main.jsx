import React, { useState } from "react";
import "./main.scss";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import Intro from "../../components/intro/Intro";
import Skills from "../../components/skills/Skills";
import { useThemeContext } from "../../Context";
import Projects from "../../components/projects/Projects";

const Drawer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        border: ` 1px solid rgba(128, 128, 128, 0.2)  `,
      }}
    ></div>
  );
};

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useThemeContext();
  const { darkMode } = theme.state;

  return (
    <div className="main">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        {/* <Drawer /> */}
        <Skills />
        {/* <Drawer /> */}
        <Projects />
      </div>
    </div>
  );
};

export default Main;
