import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "../../atoms/SvgIcon/index";

const HamburgerMenu = ({ showContextMenu, handleOnClickEvent }) => {
  return (
    <div id="hamburger-menu-icon" onClick={handleOnClickEvent}>
      <SvgIcon name={!showContextMenu ? "menuopen" : "menuclose"} />
    </div>
  );
};

export default React.memo(HamburgerMenu);

HamburgerMenu.propTypes = {
  showContextMenu: PropTypes.bool,
  contextMenuBgColor: PropTypes.string,
  contextMenuSpaceBetween: PropTypes.string,
};

HamburgerMenu.defaultProps = {
  showContextMenu: false,
};
