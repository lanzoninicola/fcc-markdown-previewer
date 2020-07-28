import React from 'react'
import './Toolbar.css'
import ToolbarItem from './ToolbarItem/ToolbarItem'
import { getToolbarConfig } from './ToolbarConfig/ToolbarIConfig'

const Toolbar = ({
    editingStatus,
    handleNewMarkupContent,
    handleAddMarkupContentToHistory,
    handleClearMarkupContent,
    handleTextFormatting,
}) => {

    const toolbarItems = getToolbarConfig({
        editingStatus,
        handleNewMarkupContent,
        handleAddMarkupContentToHistory,
        handleClearMarkupContent,
        handleTextFormatting,
    });

    const renderToolbarItems = toolbarItems.map((item, i) => {
        let toolbarItem = null;

        if (item.disabled === false) {
            toolbarItem = <ToolbarItem
                key={i}
                label={item.label}
                icon={item.icon}
                disabled={item.disabled}
                eventHandler={item.eventHandler} />
        }

        return toolbarItem;
    })

    return (
        <div id="toolbarArea">
            <div id="toolbar">{renderToolbarItems}</div>
        </div>
    )
}

export default Toolbar;