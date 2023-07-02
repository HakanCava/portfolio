import React, { useEffect, useState } from "react";

import "./skills.scss";
import { frontendSkills, backendSkills, otherSkills } from "../../data";
import SkillList from "../skilllist/SkillList";
import { useThemeContext } from "../../Context";

const Skills = () => {
  const theme = useThemeContext();
  const { darkMode } = theme.state;
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontend",
      title: "Frontend",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontend":
        setData(frontendSkills);
        break;
      case "backend":
        setData(backendSkills);
        break;
      case "other":
        setData(otherSkills);
        break;
      default:
        setData(frontendSkills);
        break;
    }
  }, [selected]);

  console.log(data);

  return (
    <div
      className="skills"
      id="skills"
      
    >
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillList
            title={item.title}
            key={item.id}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((item) => (
          <div className={"item " + (darkMode && "itemDarkmode")} key={item.id}>
            <img src={item.img} alt="" />
            <h5 className={darkMode ? "h5Darkmode" : null}>{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
