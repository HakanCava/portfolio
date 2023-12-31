import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import "./intro.scss";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="intro">
      {/* Left */}
      <div className="left">
        <div className="leftContainer">
          <div className="iconContainer">
            <a href="https://www.linkedin.com/in/hakancava/" target="_blank" rel="noreferrer" >
              <AiOutlineLinkedin className={"icon "+ (darkMode && "darkMod")} />
            </a>
          </div>
          <div className="iconContainer">
            <a href="https://github.com/HakanCava" target="_blank" rel="noreferrer">
              <AiOutlineGithub className={"icon "+ (darkMode && "darkMod")} />
            </a>
          </div>
        
        </div>
      </div>

      {/* Center */}
      <div className="center">
        <div className="centerContainer">
          <h1>Hakan Cava</h1>
          <h3>Full Stack Developer</h3>
        </div>
      </div>

      {/* Right */}
      <div className="right">
        <div className="rightContainer">
          <div className="imgContainer">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
