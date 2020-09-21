import React from "react";
import "./HeaderToolbarItem.css";

const HeaderToolbarItem = ({ ...props }) => {
  return <div className="header-toolbar-item">{props.children}</div>;
};

export default HeaderToolbarItem;
