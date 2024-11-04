import React, { useEffect, useState } from "react";
import "../styling/navbar.scss";
import logo from "../Assets/icons/i2u_logo.jpg";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsNavOpen(false);
      }
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  function toggleSidebar() {
    setIsNavOpen(!isNavOpen);
    const sidebar = document.querySelector(".sidebar");
    const sidebarStatus = sidebar.style.display;
    if (sidebarStatus === "flex") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "flex";
    }
  }
  return (
    <nav>
      {/* <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <div className="nav_cont">
        <div className="navbar_wrapper">
          <div className="navbar_1">
            <ul>
              <li>Login</li>
              <li>Signup</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="nav2_wrapper">
          <div className="navbar_2">
            {isMobile && (
              <div className="menu_icons">
                {!isNavOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="34px"
                    viewBox="0 -960 960 960"
                    width="34px"
                    onClick={toggleSidebar}
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="34px"
                    viewBox="0 -960 960 960"
                    width="34px"
                    onClick={toggleSidebar}
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                )}
              </div>
            )}
            <img src={logo} alt="i2u Logo" />
            <ul>
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
      <div className="sidebar">
        <ul>
          <li>Startups</li>
          <li>Mentors</li>
          <li>Investors</li>
          <li>Accelerators</li>
          <li>Influencers</li>
          <li>About Us</li>
          <li>Login</li>
          <li>Signup</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;