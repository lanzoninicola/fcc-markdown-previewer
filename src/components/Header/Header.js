import React from "react";
import "./Header.css";
import SvgIcon from "../SvgIcon/SvgIcon";
import HeaderToolbar from "../HeaderToolbar/HeaderToolbar";

const Header = ({ screenWidth }) => {
  return (
    <div className="header header-anchor">
      <div className="header-branding">
        <div className="header-branding-item header-branding-logo">
          <SvgIcon name={"applogo"} iconColor={"#006d77"} bigIcon={true} />
        </div>
        <div className="header-branding-item">
          <h1 id="appname">MARKDOWN EDITOR</h1>
        </div>
      </div>
      <HeaderToolbar screenWidth={screenWidth} />
    </div>
  );
};

export default React.memo(Header);
