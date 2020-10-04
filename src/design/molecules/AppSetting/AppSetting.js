import React from "react";
import PropTypes from "prop-types";
import "./AppSetting.css";
import SwitchCheckbox from "../../atoms/SwitchCheckbox/SwitchCheckbox";
import LabelMenuOption from "../../atoms/LabelMenuOption/LabelMenuOption";

const AppSetting = ({ settingName, label, eventHandler, disabled }) => {
  return (
    <div className="appSetting">
      <LabelMenuOption label={label} disabled={disabled} />
      <SwitchCheckbox
        settingName={settingName}
        eventHandler={eventHandler}
        disabled={disabled}
      />
    </div>
  );
};

export default AppSetting;

AppSetting.propTypes = {
  settingName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  eventHandler: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

AppSetting.defaultProps = {
  disabled: false,
};
