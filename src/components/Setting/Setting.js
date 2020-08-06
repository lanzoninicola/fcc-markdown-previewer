import React from 'react'
import './Setting.css'
import SwitchCheckbox from '../SwitchCheckbox/SwitchCheckbox'
import LabelMenuOption from '../LabelMenuOption/LabelMenuOption'


const Setting = ({
    menuContextBgColor,
    settingName,
    label,
    eventHandler,
    disabled,
    visible
}) => {

    return (
        visible &&
        <div className="setting">
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

export default Setting;