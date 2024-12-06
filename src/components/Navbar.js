import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styling/navbar.scss";
import logo from "../Assets/icons/i2u_logo.jpg";
import ReservationModal from './ReservationModal';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import SubscriptionModal from './SubscriptionModal';
import PreviewModal from './PreviewModal';

const CustomNavLink = ({ to, children, onClick }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
      {children}
    </NavLink>
  );
};

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const sidebar = document.querySelector(".sidebar");
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsNavOpen(false);
        sidebar.style.display = "none";
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

  const handleSidebarLinkClick = () => {
    setIsNavOpen(false);
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=admin@i2u.ai', '_blank');
  };

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };

  const closeSubscriptionModal = () => {
    setIsSubscriptionModalOpen(false);
  };

  return (
    <nav>
      <div className="nav_cont">
        <div className="navbar_wrapper">
          <div className="navbar_1">
            <ul>
            <li id="reservation_li">
                <div>
                </div>
                <a id="reservation_link" href="#" onClick={(e) => {
                  e.preventDefault();
                  setIsReservationModalOpen(true);
                }}>i2u.ai, Ideas to Unicorns through AI Ecosystem! Reservation</a>
                <div>
                </div>
              </li>
              <li>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setIsLoginModalOpen(true);
                }}>Login</a>
              </li>
              <li>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setIsSignupModalOpen(true);
                }}>Signup</a>
              </li>
              <li>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  setIsSubscriptionModalOpen(true);
                }}>Subscription</a>
            </li>
              <li>
                <a href="mailto:admin@i2u.ai" onClick={handleEmailClick}>Contact Us</a>
              </li>
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
            <CustomNavLink to="/">
              <img src={logo} alt="i2u Logo" />
            </CustomNavLink>

            <ul>
              <li>
                <CustomNavLink to="/startups">Startups</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/mentors">Mentors</CustomNavLink>
              </li>
              {/* <li>
                <CustomNavLink to="/investors">Investors</CustomNavLink>
              </li> */}
              <li>
                <CustomNavLink to="/enablers">Enablers</CustomNavLink>
              </li>
              <li>
            <a href="#" onClick={(e) => { e.preventDefault(); openPreviewModal(); handleSidebarLinkClick(); }}>Preview</a>
          </li>
              {/* <li>
                <CustomNavLink to="/i2useries">What We Do</CustomNavLink>
              </li> */}
              {/* <li>
                <CustomNavLink to="/about">About Us</CustomNavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <ul>
          <li>
            <CustomNavLink to="/startups" onClick={handleSidebarLinkClick}>Startup</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/mentors" onClick={handleSidebarLinkClick}>Mentors</CustomNavLink>
          </li>
          <li>
            <CustomNavLink to="/enablers" onClick={handleSidebarLinkClick}>Enablers</CustomNavLink>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); openPreviewModal(); handleSidebarLinkClick(); }}>Preview</a>
          </li>
          <li id="reservation_li">
                <div>
                </div>
                <a id="reservation_link" href="#" onClick={(e) => {
                  e.preventDefault();
                  setIsReservationModalOpen(true);
                }}>i2u.ai, Ideas to Unicorns through AI Ecosystem! Reservation</a>
                <div>
                </div>
              </li>
          <li>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setIsLoginModalOpen(true);
            }}>Login</a>
          </li>
          <li>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setIsSignupModalOpen(true);
            }}>Signup</a>
          </li>
          <li>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setIsSubscriptionModalOpen(true);
            }}>Subscription</a>
          </li>
          <li>
            <a href="mailto:admin@i2u.ai" onClick={handleEmailClick}>Contact Us</a>
          </li>
        </ul>
      </div>
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
      <PreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
      />
    </nav>
  );
}

export default Navbar;
