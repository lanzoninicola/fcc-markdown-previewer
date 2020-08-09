import React from 'react';
import PropTypes from 'prop-types';
import './AppSetting.css';
import SwitchCheckbox from '../SwitchCheckbox/SwitchCheckbox';
import LabelMenuOption from '../LabelMenuOption/LabelMenuOption';


const AppSetting = ({
    settingName,
    label,
    eventHandler,
    disabled,
    visible
}) => {

    return (
        visible &&
        <div className="appSetting">
            <LabelMenuOption
                label={label}
                disabled={disabled}
            />
            <SwitchCheckbox
                settingName={settingName}
                eventHandler={eventHandler}
                disabled={disabled}
            />
        </div>

    )
}

export default AppSetting;

AppSetting.propTypes = {
    settingName: PropTypes.string,
    label: PropTypes.string,
    eventHandler: PropTypes.func,
    disabled: PropTypes.bool,
    visible: PropTypes.bool
}

AppSetting.defaultProps = {
    disabled: false,
    visible: true
}
