import React from "react";
import { Link } from "react-router-dom";
import Phone from "../Images/Contact/ion_call.svg";
import GitHub from "../Images/Contact/mdi_github.svg";
import LinkedIn from "../Images/Contact/mingcute_linkedin-fill.svg";
import Email from "../Images/Contact/ic_baseline-email.svg";

const ContactMe = () => {
  return (
    <>
      <div className="contact-me">
        <div className="container">
          <div className="contact-heading" id="contact-me">
            <h2>CONTACT</h2>
          </div>
          <div className="contact-flex">
            <Link
              to="tel:918095183988"
              className=" contact-same-lank contact-phone-no"
            >
              <img src={Phone} alt="" />
              <Link to="tel:918095183988">+91 8095183988</Link>
            </Link>
            <abbr title="Mallikarjun000007@gmail.com">
              <Link
                to="mailto:Mallikarjun000007@gmail.com"
                className=" contact-same-lank contact-email"
              >
                <img src={Email} alt="" />
                <Link to="mailto:Mallikarjun000007@gmail.com">e-Mail</Link>
              </Link>
            </abbr>
            <Link
              to="https://github.com/Mallikarjun-Mathapati"
              target="_blank"
              className=" contact-same-lank contact-github"
            >
              <img src={GitHub} alt="" />
              <Link
                to="https://github.com/Mallikarjun-Mathapati"
                target="_blank"
              >
                GitHub
              </Link>
            </Link>
            <Link
              to="https://www.linkedin.com/in/mallikarjun-mathapati-6277a0215/"
              target="_blank"
              className=" contact-same-lank contact-linkedin"
            >
              <img src={LinkedIn} alt="" />
              <Link
                to="https://www.linkedin.com/in/mallikarjun-mathapati-6277a0215/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
