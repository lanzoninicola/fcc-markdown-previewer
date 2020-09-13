import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./PopUpBox.css";

const PopUpBox = ({ style, ...props }) => {
  let spaceBetween = style.spaceBetween
    ? style.spaceBetween
    : PopUpBox.defaultProps.style.spaceBetween;
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
    <Fragment>
      {/* <div id="overlay"></div> */}
      <div
        id="popup-box"
        className={"fadeInDown"}
        style={{
          top: topStyle,
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default PopUpBox;

PopUpBox.propTypes = {
  style: PropTypes.shape({
    spaceBetween: PropTypes.string,
    menuBgColor: PropTypes.string,
  }),
};

PopUpBox.defaultProps = {
  style: {
    spaceBetween: "medium",
  },
};
