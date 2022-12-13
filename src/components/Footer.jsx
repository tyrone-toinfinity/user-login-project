import "./Footer.css";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__options">
        <ul className="About">
          <li>
            <h3>About Us</h3>
          </li>
          <li>Story</li>
          <li>Clients</li>
          <li>Testimonials</li>
        </ul>
        <ul className="Services">
          <li>
            <h3>Services</h3>
          </li>
          <li>Marketing</li>
          <li>Consulting</li>
          <li>Development</li>
          <li>Design</li>
        </ul>
        <ul className="Contact">
          <li>
            <h3>Contact Us</h3>
          </li>
          <li>United States</li>
          <li>United Kingdom</li>
          <li>Australia</li>
          <li>Support</li>{" "}
        </ul>
        <ul className="Social">
          <li>
            <h3>Social</h3>
          </li>
          <li>
            <FaFacebookF className="social__icons" /> Facebook
          </li>
          <li>
            <FaInstagram className="social__icons" /> Instagram
          </li>

          <li>
            <FaYoutube className="social__icons" /> Youtube
          </li>
          <li>
            <FaTwitter className="social__icons" /> Twitter
          </li>
        </ul>
      </div>
    </div>
  );
};
