import React from "react";
import "./Pages.css";
import TextScroll from "../Components/TextScroll";
import { Link } from "react-router-dom";
import ProjectsData from "../Data/ProjectData";
import "../Home/Home.css";

const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <TextScroll textScrollClassName="project-page-text-scroll" />
        <div className="container">
          <div className="project-page-heading">
            <h2>
              {" "}
              <span className="span-gradient">ALL</span> PROJECTS
            </h2>
            <div className="projects-grids project-page-grid">
              {ProjectsData.map((curr) => {
                return (
                  <Link
                    to={curr.link}
                    target="_blank"
                    className="projects-grid-1"
                    key={curr.id}
                  >
                    <div className="project-data-img">
                      <img src={curr.image} alt={curr.tittle} />
                    </div>
                    <div className="project-data-tittle">
                      <h4>{curr.tittle}</h4>
                    </div>
                    <div className="project-data-tool">
                      <h4>{curr.tool}</h4>
                      <h4>{curr.Categories}</h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
