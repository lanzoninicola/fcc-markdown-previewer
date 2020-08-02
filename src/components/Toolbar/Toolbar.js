import React from 'react'
import './Toolbar.css'
import ToolbarItem from './ToolbarItem/ToolbarItem'
import { getToolbarConfig } from './ToolbarConfig/ToolbarIConfig'

const Toolbar = ({
    screenWidth,
    editingStatus,
    handleNewmarkdownContent,
    handleAddmarkdownContentToHistory,
    handleClearmarkdownContent,
    handleTextFormatting,
    handleInsertImage
}) => {

    const toolbarItems = getToolbarConfig({
        screenWidth,
        editingStatus,
        handleNewmarkdownContent,
        handleAddmarkdownContentToHistory,
        handleClearmarkdownContent,
        handleTextFormatting,
        handleInsertImage
    });

    const renderToolbarItems = toolbarItems.map((item, i) => {
        let toolbarItem = null;

        if (item.disabled === false) {
            toolbarItem = <ToolbarItem
                key={i}
                screenWidth={screenWidth}
                label={item.label}
                icon={item.icon}
                disabled={item.disabled}
                eventHandler={item.eventHandler} />
        }

        return toolbarItem;
    })

    let toolbarPositionStyle = (screenWidth) < 1400 ? 'top' : 'bottom';

    return (
        <div className={`toolbarArea-${toolbarPositionStyle}`}>
            <div id="toolbar">{renderToolbarItems}</div>
        </div >
    )
}

export default Toolbar;