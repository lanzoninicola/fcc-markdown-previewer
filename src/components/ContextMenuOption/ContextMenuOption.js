import React from 'react'
import './ContextMenuOption.css'
import SwitchCheckbox from '../SwitchCheckbox/SwitchCheckbox'
import LabelMenuOption from '../LabelMenuOption/LabelMenuOption'


const ContextMenuOption = ({ name, label, eventHandler }) => {

    return (
        <div className="contextMenuOption">
            <LabelMenuOption label={label} />
            <SwitchCheckbox name={name} eventHandler={eventHandler} />
        </div>
    )
}

export default ContextMenuOption;