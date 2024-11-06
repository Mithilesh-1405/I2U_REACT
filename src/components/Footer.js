import React from "react";
import "../styling/footer.scss";
function Footer() {
  return (
    <footer>
      <ul className="footer_list">
        <li>
          <a href="https://i2u.ai/TermsNConditions/">Terms & Conditions</a>
        </li>
        <li>
          <a href="https://i2u.ai/RRSTnC/">
            Referral Reward System Terms & Conditions
          </a>
        </li>
        <li>
          &copy;2024 <a href="">i2u.ai</a>
        </li>
        <li>
          <a href="https://i2u.ai/PrivacyPolicy/">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
