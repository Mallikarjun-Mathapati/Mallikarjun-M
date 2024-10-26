import React from "react";
import ProjectsData from "../Data/ProjectData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="container">
          <div className="projects-heading">
            <h2>PROJECTS</h2>
          </div>
          <div className="projects-grids">
            {ProjectsData.slice(0, 6).map((curr) => {
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
                    <h4>{curr.complete}</h4>
                  </div>
                  <div className="project-data-tool">
                    <h4>{curr.tool}</h4>
                    <h4>{curr.Categories}</h4>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="project-button">
            <Link to="/Projects">
              <button>Know More>>> </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
