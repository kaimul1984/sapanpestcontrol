import React from "react";
import './footer.scss'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <div className="social">
          <h3>follow us on:</h3>
          <div className="icon">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </div>
        </div>
        <div>
          <p>Sapan @ copyright all right reserved, 2021.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
