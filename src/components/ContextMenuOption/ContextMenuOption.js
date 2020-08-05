import React, { Fragment } from 'react'
import './ContextMenuOption.css'
import SwitchCheckbox from '../SwitchCheckbox/SwitchCheckbox'
import LabelMenuOption from '../LabelMenuOption/LabelMenuOption'


const ContextMenuOption = ({
    menuContextBgColor,
    settingName,
    label,
    eventHandler,
    disabled,
    visible
}) => {

    return (
        visible &&
        <div className="contextMenuOption">
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

export default ContextMenuOption;