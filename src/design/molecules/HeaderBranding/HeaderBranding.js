import React from "react";
import "./HeaderBranding.css";
import SvgIcon from "../../atoms/SvgIcon/index";

const HeaderBranding = ({ screenWidth }) => {
  return (
    <div className="header-branding">
      <div className="header-branding-item header-branding-logo">
        <SvgIcon name={"applogo"} iconColor={"#006d77"} bigIcon={true} />
      </div>
      <div className="header-branding-item">
        <h1 id="appname">MARKDOWN EDITOR</h1>
      </div>
    </div>
  );
};

export default React.memo(HeaderBranding);
