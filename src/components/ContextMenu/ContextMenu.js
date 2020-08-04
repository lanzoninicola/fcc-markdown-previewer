import React from 'react'
import './ContextMenu.css'
import ContextMenuOption from '../ContextMenuOption/ContextMenuOption';

const ContextMenu = ({ context }) => {

    let options = [];

    const setEditorPanelOptions = () => {
        let editorPanelOptions = [
            {
                label: 'FOCUS MODE',
                eventHandler: context.eventHandler
            }
        ];
        options = [...editorPanelOptions];
        return options;
    }

    switch (context.component) {
        case 'EditorPanel':
            setEditorPanelOptions();
            break;

        default:
            break;
    }

    let optionsMenu = options.map((option, index) => {
        return <ContextMenuOption id={index} label={option.label} eventHandler={option.eventHandler} />
    })

    return (
        <div id="contextmenu">
            {optionsMenu}
        </div>

    )
}

export default ContextMenu;