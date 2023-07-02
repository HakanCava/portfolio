import React, { useState } from "react";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import "./projects.scss";
import { useThemeContext } from "../../Context";

const Projects = () => {
  const theme = useThemeContext();
  const { darkMode } = theme.state;
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < projects.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div
      className="projects"
      id="projects"
      style={{ backgroundColor: darkMode ? "#232526" : "whitesmoke" }}
    >
      <h1>Projects</h1>
      <div className="projectContainer">
        <div
          className=" slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {projects.map((project) => (
            <div
              style={{
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ProjectCard key={project.id} {...project} />
            </div>
          ))}
        </div>
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
};

export default Projects;
