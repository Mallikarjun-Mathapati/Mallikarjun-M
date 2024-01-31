import React from "react";
import Wireframes_1 from "../Images/Genius/wirefram 1.svg";
import Wireframes_2 from "../Images/Genius/wirefram 2.svg";
import CreativeimageIcon from "../Images/Genius/Image Icon.svg";
import CreativeImage from "../Images/Genius/creative.png";
import CodeGa from "../Images/Genius/code 2.png";

const GeniusIdeas = () => {
  return (
    <>
      <div className="genius-ideas">
        <div className="genius-ideas-heading">
          <h2>
            GENIUS <span className="span-gradient">IDEAS</span>
          </h2>
        </div>
        <div className="genius-ideas-grid">
          <div className="genius-ideas-grid-sub-3 genius-ideas-grid-sub-same">
            <div className="genius-ideas-grid-2-heading">
              <p>Wireframes</p>
            </div>
            <h2>Wireframing Design dance shaping visual experience.</h2>
            <div className="genius-ideas-grid-sub-3-image-1">
              <img src={Wireframes_1} alt="Wireframes" />
            </div>
            <div className="genius-ideas-grid-sub-3-image-2">
              <img src={Wireframes_2} alt="Wireframes" />
            </div>
          </div>
          <div className="genius-ideas-grid-sub-1 genius-ideas-grid-sub-same">
            <h3>
              <span>MERN </span>Stack Development
            </h3>
            <img src={CodeGa} alt="" />
          </div>

          <div className="genius-ideas-grid-sub-2 genius-ideas-grid-sub-same">
            <h3>Creativity </h3>
            <p>
              Our designs are not just about making things look good; they are
              driven by a deep understanding of your audience.
            </p>
            <div className="genius-ideas-grid-sub-2-image">
              <img
                className="genius-ideas-grid-sub-2-image-1"
                src={CreativeImage}
                alt="img"
              />
              <div className="genius-ideas-grid-sub-2-image-icon">
                <img
                  className="genius-ideas-grid-sub-2-image-icon-img"
                  src={CreativeimageIcon}
                  alt="creativeImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeniusIdeas;
