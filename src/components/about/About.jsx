import "./about.scss";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BsFront } from "react-icons/bs";
import { BsBack } from "react-icons/bs";
import { useThemeContext } from "../../Context";

const About = () => {
  const theme = useThemeContext();
  const { darkMode } = theme.state;
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: darkMode ? "#232526" : "whitesmoke" }}
    >
      <h1>About Me</h1>
      <div className="aboutContainer">
        <div className="left">
          <img src="assets/my_photo.JPG" alt="" />
        </div>
        <div className="right">
          <div className="carts">
            <div className="box" >
              <MdOutlineWorkspacePremium className="box-icon" />
              <h3>Experience</h3>
              <p>2 Years Working</p>
            </div>
            <div className="box">
              <BsFront className="box-icon" />
              <h3>Frontend</h3>
              <p>10+ Projects</p>
            </div>
            <div className="box">
              <BsBack className="box-icon" />
              <h3>Backend</h3>
              <p>5+ Projects</p>
            </div>
          </div>
          <div className="desc">
            <p>
              I'm a skilled fullstack developer with experience in JavaScript, 
              TypeScript, and Python, and expertise in frameworks like React,
              React Native, and Django. I'm a quick learner and collaborate closely
              with clients to create efficient, scalable, and user-friendly
              solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
