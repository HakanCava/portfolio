import React from 'react'
import "./skillList.scss";

const SkillList = ({ title, active, setSelected, id }) => {
  
  return (
    <li
      className={active ? "skillList active" : "skillList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}

export default SkillList