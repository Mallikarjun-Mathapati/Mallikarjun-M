import React from "react";
import "./Components.css";

const TextScroll = (props) => {
  return (
    <>
      <div className={`text-scroll-auto ${props.textScrollClassName}`}>
        <div className="text-scroll-auto-1">
          <p>
            REACT DEVELOPER #WEB DESIGNER #MERN STACK DEVELOPER #UX DESIGNER{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextScroll;
