import React from 'react'
import './AppSetting.css'
import SwitchCheckbox from '../SwitchCheckbox/SwitchCheckbox'
import LabelMenuOption from '../LabelMenuOption/LabelMenuOption'


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