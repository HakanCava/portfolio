import "./navbar.scss";
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import Toggle from "../Toggle/Toggle";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"tobbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <AiFillHome />
          </a>
          <div className="itemContainer">
            <MdEmail className="icon" />
            <span>hakancavaa@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="toogleMode">
            <Toggle menuOpen={menuOpen}/>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
