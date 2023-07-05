import React from "react";
import "./projectCard.scss";
import { github } from "./projectsImg";
import { Link } from "react-router-dom";
const ProjectCard = ({ name, description, tags, image, link }) => {
  return (
    <div className="projectCard">
      <div className="projectCardContainer">
        <div className="cardContainer">
          <div className="imgContainer">
            <img src={image} alt="" className="image" />
            <div className="githubImg">
              <Link to={link} target="_blank">
                <img src={github} alt="" className="github" />
              </Link>
            </div>
          </div>

          <div className="titleContainer">
            <div className="titleDescription">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div className="tag">
              {tags.map((tag, i) => (
                <p key={i} style={{ color: `${tag.color}` }}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
