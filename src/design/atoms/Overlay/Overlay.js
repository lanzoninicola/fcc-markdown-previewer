import React from "react";
import "./Overlay.css";
import { getColorFromPalette } from "../../config/theme";

const Overlay = ({ ...props }) => {
  const backgroundColor = getColorFromPalette("primary-light");

  return (
    <div
      id="overlay"
      style={{
        display: "none",
        backgroundColor: backgroundColor,
      }}
    >
      {props.children}
    </div>
  );
};

export default Overlay;
