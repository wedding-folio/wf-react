import { useState } from "react";
import "./styles.css"

function Navbar() {

  const [isHidden, setIstHidden] = useState(true);

  function handleNavToggle() {
    setIstHidden(!isHidden)
  }

  return (
    <nav className="navbar">
      <div className="navContainer">
        <h1>Wedding Folio</h1>

        <a href="#" className="toggleNav" onClick={() => handleNavToggle()}>
          <span className="toggleBar"></span>
          <span className="toggleBar"></span>
          <span className="toggleBar"></span>
        </a>

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