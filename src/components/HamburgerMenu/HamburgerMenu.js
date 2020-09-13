import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "../SvgIcon/SvgIcon";

const HamburgerMenu = ({
  showPopUpBox,
  config,
  handleOnClickEvent,
  bigIcon,
}) => {
  const { iconColor } = config;

  return (
    <div id="hamburger-menu-icon" onClick={handleOnClickEvent}>
      <SvgIcon
        name={!showPopUpBox ? "menuopen" : "menuclose"}
        iconColor={iconColor}
        bigIcon={true}
      />
    </div>
  );
};

export default React.memo(HamburgerMenu);

HamburgerMenu.propTypes = {
  showPopUpBox: PropTypes.bool,
  config: PropTypes.object,
  PopUpBoxBgColor: PropTypes.string,
  PopUpBoxSpaceBetween: PropTypes.string,
};

HamburgerMenu.defaultProps = {
  showPopUpBox: false,
  config: {
    iconColor: "rgb(0,109,119)",
  },
  bigIcon: true,
};
