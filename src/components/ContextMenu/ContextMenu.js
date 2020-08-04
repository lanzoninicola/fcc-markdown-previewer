import React, { Fragment } from 'react'
import './ContextMenu.css'
import ContextMenuOption from '../ContextMenuOption/ContextMenuOption';

const ContextMenu = ({ menuItems, handleCloseContextMenu }) => {

    let optionsMenu = menuItems.map((menuItem, index) => {
        return <ContextMenuOption
            key={index}
            name={menuItem.name}
            label={menuItem.label}
            eventHandler={menuItem.eventHandler}
        />
    })

    return (
        <div id="context-menu">
            <Fragment>
                {optionsMenu}
                <p id="context-menu-close" onClick={handleCloseContextMenu}>Close</p>
            </Fragment>
        </div>

    )
}

export default ContextMenu;