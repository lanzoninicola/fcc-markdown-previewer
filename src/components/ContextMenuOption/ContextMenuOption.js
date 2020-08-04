import React from 'react'
import './ContextMenuOption.css'
import SwitchCheckbox from '../SwitchCheckbox/SwitchCheckbox'
import LabelMenuOption from '../LabelMenuOption/LabelMenuOption'


const ContextMenuOption = ({ label, eventHanlder }) => {

    return (
        <div className="contextMenuOption">
            <LabelMenuOption label={label} />
            <SwitchCheckbox eventHanlder={eventHanlder} />
        </div>
    )
}

export default ContextMenuOption;