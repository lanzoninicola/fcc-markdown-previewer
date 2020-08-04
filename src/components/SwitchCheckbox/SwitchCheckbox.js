import React from 'react'
import './SwitchCheckbox.css'


const SwitchCheckbox = ({ eventHandler }) => {
    return (
        <input
            class="apple-switch"
            type="checkbox"
            onChange={(e) => eventHandler(e)}
        >
        </input>
    )
}

export default SwitchCheckbox;