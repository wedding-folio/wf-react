import { useState } from "react";
import { Link } from "react-router-dom"
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
            <a href="#" className="navButton buttonBlue">Sign Up</a>
          </li>
          <li className="navItem">
            <a href="#" className="navButton buttonBlack">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;