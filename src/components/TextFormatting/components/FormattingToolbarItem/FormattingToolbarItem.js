import React from "react";
import "./FormattingToolbarItem.css";
import SvgIcon from "../../../../design/atoms/SvgIcon/index";

const FormattingToolbarItem = ({ label, icon, disabled, eventHandler }) => {
  let showLabel = false;
  let colorSchema = icon.color;

  if (disabled) {
    colorSchema = "disabled";
    eventHandler = null;
  }

  return (
    <div className="toolbar-item">
      <button
        className="toolbar-button"
        onClick={eventHandler}
        disabled={disabled}
      >
        <span>
          <SvgIcon name={icon.name} color={colorSchema} />
        </span>
        {showLabel && <span className="toolbar-label">{label}</span>}
      </button>
    </div>
  );
};

export default React.memo(FormattingToolbarItem);
