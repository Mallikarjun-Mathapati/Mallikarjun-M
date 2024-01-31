import React from "react";
import "./Components.css";

const TextScroll = (props) => {
  return (
    <>
      <div className={`text-scroll-auto ${props.textScrollClassName}`}>
        <div className="text-scroll-auto-1">
          <p>REACT DEVELOPER #WEB DESIGNER #MERN DEVELOPER #UX DESIGNER </p>
        </div>
      </div>
    </>
  );
};

export default TextScroll;
