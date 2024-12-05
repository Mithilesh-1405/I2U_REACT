import React from "react";
import { NavLink } from "react-router-dom";
import "../styling/footer.scss";
const CustomNavLink = ({ to, children, onClick }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")} onClick={onClick}>
      {children}
    </NavLink>
  );
};
function Footer() {
  return (
    <footer>
      <ul className="footer_list">
        <li>
          <CustomNavLink to="/terms-n-conditions">Terms & Conditions</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/referral-rewards">Referral Reward System Terms & Conditions</CustomNavLink>
        </li>
        <li>
          &copy;2024 <a href="https://i2u.ai">i2u.ai</a>
        </li>
        <li>
          <CustomNavLink to="/privacy-policy">Privacy Policy</CustomNavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
