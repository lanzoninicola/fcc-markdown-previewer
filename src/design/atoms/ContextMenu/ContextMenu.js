import React from "react";
import PropTypes from "prop-types";
import "./ContextMenu.css";

const style = (props) => {
  return {
    contextMenu: {
      position: "absolute",
      right: "0",
      width: "250px",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.3)",
      padding: "10px 20px 10px 20px",
      transition: "width 2s",
      cursor: "initial",
      zIndex: "1",
      "&:after": {
        transition: "all 0.3s ease-out",
      },
    },
    spaceBetween: {
      topStyle: props.something,
    },
  };
};

const ContextMenu = ({ config, ...props }) => {
  let spaceBetween = config.spaceBetween
    ? config.spaceBetween
    : ContextMenu.defaultProps.config.spaceBetween;
  let menuBgColor = config.menuBgColor
    ? config.menuBgColor
    : ContextMenu.defaultProps.config.menuBgColor;

  let topStyle;

  switch (spaceBetween) {
    case "small":
      topStyle = "15px";
      break;
    case "medium":
      topStyle = "35px";
      break;
    case "large":
      topStyle = "50px";
      break;
    default:
      topStyle = "35px";
      break;
  }

  return (
    <div
      id="context-menu"
      className={"fadeInDown"}
      style={{
        background: menuBgColor,
        top: topStyle,
      }}
    >
      {props.children}
    </div>
  );
};

export default ContextMenu;

ContextMenu.propTypes = {
  config: PropTypes.shape({
    spaceBetween: PropTypes.string,
    menuBgColor: PropTypes.string,
  }),
};

ContextMenu.defaultProps = {
  config: {
    menuBgColor:
      "linear-gradient(90deg,  rgb(0,0,0, 0.5) 2%, rgba(0,0,0,0.7) 98%)",
    spaceBetween: "medium",
  },
};
