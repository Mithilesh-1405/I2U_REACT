import React, { useState } from "react";
import "../styling/navbar.scss";
import logo from "../Assets/icons/i2u_logo.jpg";

function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);
  function handleHamburgerClick() {
    setNavOpen(!isNavOpen);
    console.log(isNavOpen);
  }
  return (
    <nav>
      <div className="navTab"></div>
      <div className="menu" onClick={handleHamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav_cont">
        <div className="navbar_wrapper">
          <div className="navbar_1">
            <ul className={isNavOpen ? "navOpen" : ""}>
              <li>Login</li>
              <li>Signup</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="nav2_wrapper">
          <div className="navbar_2">
            <img src={logo} alt="i2u Logo" />
            <ul className={isNavOpen ? "navOpen" : ""}>
              <li>Startups</li>
              <li>Mentors</li>
              <li>Investors</li>
              <li>Accelerators</li>
              <li>Influencers</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
