import React from "react";
import "./Components.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-copyright">
            <h4>COPYRIGHT 2023 DESIGNED AND DEVELOPED BY ME</h4>
            <Link to="mailto:Mallikarjun000007@gmail.com">
              Mallikarjun000007@gmail.com
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
