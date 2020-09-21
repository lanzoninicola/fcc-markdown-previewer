import React from "react";
import "./HeaderToolbar.css";
import HeaderToolbarItem from "../../atoms/HeaderToolbarItem/index";

const HeaderToolbar = ({ screenWidth, items, ...props }) => {
  let reactComponents = items();
  return (
    <div className="header-toolbar">
      <div className="header-toolbar-items">
        {Object.keys(reactComponents).map((component, index) => {
          return (
            <HeaderToolbarItem key={index}>
              {reactComponents[component]()}
            </HeaderToolbarItem>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderToolbar;
