import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import "./styles.css"

function Navbar() {

  const [isHidden, setIstHidden] = useState(true);

  function handleNavToggle() {
    setIstHidden(!isHidden)
  }

  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to="/">
          <h1 className="logo">Wedding Folio</h1>
        </Link>
        <span className="toggleNav" onClick={() => handleNavToggle()}>
          <span className="toggleBar"></span>
          <span className="toggleBar"></span>
          <span className="toggleBar"></span>
        </span>

        <ul className={isHidden ? "navList" : "navList navListVisible"}>
          <li className="navItem">
            <NavLink to={"/signup"} className="navButton buttonBlue">Sign Up</NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/login"} className="navButton buttonBlack">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;