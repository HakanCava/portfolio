import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { useThemeContext } from "../../Context";

const Toggle = ({menuOpen}) => {
  const theme=useThemeContext()
  const {darkMode} = theme.state;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className={"toggle "+ (menuOpen&&"active1")} onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className={"t-button "+ (menuOpen&&"active2")}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
