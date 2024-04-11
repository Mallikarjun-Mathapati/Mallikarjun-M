import React from "react";
import HTML from "../Images/Home/TechSt/vscode-icons_file-type-html.svg";
import CSS from "../Images/Home/TechSt/vscode-icons_file-type-css.svg";
import JavaS from "../Images/Home/TechSt/logos_javascript.svg";
import ReactJs from "../Images/Home/TechSt/logos_react.svg";
import Node from "../Images/Home/TechSt/vscode-icons_file-type-node.svg";
import Mongodb from "../Images/Home/TechSt/devicon_mongodb.svg";
import WordPress from "../Images/Home/TechSt/bi_wordpress.svg";
import Figma from "../Images/Home/TechSt/logos_figma.svg";
import XD from "../Images/Home/TechSt/logos_adobe-xd.svg";
import Illustrator from "../Images/Home/TechSt/logos_adobe-illustrator.svg";
import NextJs from "../Images/Home/TechSt/nextjs.svg";

const TechStack = () => {
  const TechStackData = [
    {
      id: 1,
      tittle: "HTML",
      img: HTML,
    },
    {
      id: 2,
      tittle: "CSS",
      img: CSS,
    },
    {
      id: 3,
      tittle: "JavaScript",
      img: JavaS,
    },
    {
      id: 4,
      tittle: "React.js",
      img: ReactJs,
    },
    {
      id: 5,
      tittle: "Next.js",
      img: NextJs,
    },
    {
      id: 6,
      tittle: "Node.js",
      img: Node,
    },
    {
      id: 7,
      tittle: "MongoDB",
      img: Mongodb,
    },
    {
      id: 8,
      tittle: "WordPress",
      img: WordPress,
    },
    {
      id: 9,
      tittle: "Figma",
      img: Figma,
    },
    {
      id: 10,
      tittle: "Adobe XD",
      img: XD,
    },
    {
      id: 11,
      tittle: "Adobe Illustrator",
      img: Illustrator,
    },
  ];
  return (
    <>
      <div className="tach-stack">
        <div className="container">
          <div className="tech-stack-heading">
            <h2>
              TECH <span className="span-gradient">STACK</span>
            </h2>
            <p>
              Discover the tools driving my website's magic. A potent blend of
              backend prowess and sleek frontend frameworks ensures a smooth,
              modern user experience.
            </p>
          </div>
          <div className="tach-stack-main-software">
            {TechStackData.map((curr) => {
              return (
                <div className="tech-stack-main-software-same" key={curr.id}>
                  <img src={curr.img} alt={curr.tittle} />
                  <h4>{curr.tittle}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
