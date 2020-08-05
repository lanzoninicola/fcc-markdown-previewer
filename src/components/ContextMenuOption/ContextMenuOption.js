import React from 'react'
import './ContextMenuOption.css'
import SwitchCheckbox from '../SwitchCheckbox/SwitchCheckbox'
import LabelMenuOption from '../LabelMenuOption/LabelMenuOption'


const ContextMenuOption = ({ settingName, label, eventHandler }) => {

    return (
        <div className="contextMenuOption">
            <LabelMenuOption label={label} />
            <SwitchCheckbox settingName={settingName} eventHandler={eventHandler} />
        </div>
    )
}

export default ContextMenuOption;