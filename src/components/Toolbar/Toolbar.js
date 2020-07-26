import React from 'react'
import './Toolbar.css'
import ToolbarItem from './ToolbarItem/ToolbarItem'


const Toolbar = ({ status, handleNewMarkupContent, handleAddMarkupContentToHistory, handleClearMarkupContent }) => {

    const toolbarItems = [
        {
            label: 'New',
            icon: 'https://img.icons8.com/material-outlined/25/000000/plus.png',
            alt: 'New markup content',
            disabled: false,
            eventHandler: handleNewMarkupContent
        },
        {
            label: 'Snapshot',
            icon: 'https://img.icons8.com/material-outlined/25/000000/camera--v2.png',
            alt: 'Take a snapshot of markup text',
            disabled: status === 'idle' ? true : false,
            eventHandler: handleAddMarkupContentToHistory
        },
        {
            label: 'Clear',
            icon: 'https://img.icons8.com/material-outlined/25/000000/filled-trash.png',
            alt: 'Remove Markup Content',
            disabled: status === 'idle' ? true : false,
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
                alt={item.alt}
                disabled={item.disabled}
                eventHandler={item.eventHandler} />
        }

        return toolbarItem;
    })

    return (
        <div id="toolbar">{toolbarItemsRender}</div>
    )
}

export default Toolbar;