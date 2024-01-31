import React from "react";
import "./Pages.css";
import HeroSection from "../Home/HeroSection";
import TechStack from "../Home/TechStack";
import GeniusIdeas from "../Home/GeniusIdeas";
import Projects from "../Home/Projects";
import Abouus from "../Home/Abouus";
import ContactMe from "../Home/ContactMe";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TechStack />
      <GeniusIdeas />
      <Projects />
      <Abouus />
      <ContactMe />
    </>
  );
};

export default Home;
