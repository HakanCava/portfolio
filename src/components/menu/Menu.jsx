import './menu.scss'
import {AiOutlineHome} from "react-icons/ai"

const Menu = ({menuOpen,setMenuOpen}) => {

    const handleClick=()=>{
        setMenuOpen(!menuOpen)
    }
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            <li onClick={handleClick}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={handleClick}>
                <a href="#about">About Me</a>
            </li>
            <li onClick={handleClick}>
                <a href="#skills">Skills</a>
            </li>
            <li onClick={handleClick}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={handleClick}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu