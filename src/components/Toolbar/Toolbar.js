import React from 'react'
import './Toolbar.css'
import ToolbarItem from './ToolbarItem/ToolbarItem'
import { svgNewIcon, svgSnapshotIcon, svgClearIcon } from './ToolbarIcons'

const Toolbar = ({ editingStatus, handleNewMarkupContent, handleAddMarkupContentToHistory, handleClearMarkupContent }) => {

    const toolbarItems = [
        {
            label: 'New',
            icon: svgNewIcon,
            alt: 'New markup content',
            disabled: false,
            eventHandler: handleNewMarkupContent
        },
        {
            label: 'Snapshot',
            icon: svgSnapshotIcon,
            alt: 'Take a snapshot of markup text',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleAddMarkupContentToHistory
        },
        {
            label: 'Clear',
            icon: svgClearIcon,
            alt: 'Remove Markup Content',
            disabled: editingStatus === 'idle' ? true : false,
            eventHandler: handleClearMarkupContent
        }
    ]

    const toolbarItemsRender = toolbarItems.map((item, i) => {
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
            <div id="toolbar">{toolbarItemsRender}</div>
        </div>
    )
}

export default Toolbar;