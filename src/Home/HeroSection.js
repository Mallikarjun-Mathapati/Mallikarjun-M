import React from "react";
import "./Home.css";
import Git_hub from "../Images/Home/icons/github.svg";
import Linked_in from "../Images/Home/icons/linkedin.svg";
import { Link } from "react-router-dom";
import TextScroll from "../Components/TextScroll";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="hero-section-flex flex">
            <div className="hero-section-my-name">
              <p>Mallikarjun</p>
            </div>
            <div className="hero-section-heading">
              <h1>
                I am a <span className="span-gradient">MERN</span> Stack{" "}
              </h1>
              <h1>Developer And UX/UI Designer</h1>
            </div>
            <div className="hero-section-description">
              <p>
                Hi, I'm Mallikarjun Mathapati A passionate Front-end Developer
                and UX Designer based in Karnataka Bengaluru.
              </p>
            </div>
            <div className="hero-section-social-link">
              <abbr title="LinkedIn">
                <Link
                  to="https://www.linkedin.com/in/mallikarjun-mathapati-6277a0215/"
                  target="_blank"
                  className="hero-section-social-link-linkedin flex"
                >
                  <img src={Linked_in} alt="" />
                </Link>
              </abbr>
              <abbr title="GitHub">
                <Link
                  to="https://github.com/Mallikarjun-Mathapati"
                  target="_blank"
                  className="hero-section-social-link-linkedin hero-section-social-link-github flex"
                >
                  <img src={Git_hub} alt="" />
                </Link>
              </abbr>
            </div>
          </div>
        </div>
        <div className="hero-section-text-scroll">
          <TextScroll />
          <div className="hero-section-text-scroll-2">
            <TextScroll textScrollClassName="text-scroll-auto-rotate" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
