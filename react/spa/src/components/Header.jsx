import "../Exe.css"
import { Link } from "react-router-dom"
function Header() {
  return (
    <div><ul className="nav">
        <li>
          <Link to={"/home"}>Home </Link>
        </li>
        <li>
          <Link to={"/services"}>Services </Link>
        </li>
        <li>
          <Link to={"/aboutus"}>About-Us </Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact-Us </Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile </Link>
        </li>
        <li>
          <Link to={"/customhook"}>Custom-Hook </Link>
        </li>
        <li>
          <Link to={"/debounce"}>Debounce  </Link>
        </li>
        <li>
          <Link to={"/isonline"}>Is-Online-Hook  </Link>
        </li>
      </ul></div>
  )
}

export default Header