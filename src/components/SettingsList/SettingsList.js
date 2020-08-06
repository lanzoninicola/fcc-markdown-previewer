import React from 'react';
import PropTypes from 'prop-types';
import Setting from '../Setting/Setting'

const SettingsList = ({ menuItems }) => {

    // let optionsMenu = null;

    // if (menuItems && menuItems.length > 0) {
    let optionsMenu = menuItems.map((menuItem, index) => {
        return <Setting
            key={index}
            settingName={menuItem.settingName}
            label={menuItem.label}
            eventHandler={menuItem.eventHandler}
            disabled={menuItem.disabled}
            visible={menuItem.visible}
        />
    })
    // }

    return (
        <div id="context-menu-options">
            {optionsMenu}
        </div >
    )
}

export default SettingsList;

SettingsList.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            settingName: PropTypes.string,
            label: PropTypes.string,
            eventHandler: PropTypes.func,
            disabled: PropTypes.bool,
            visible: PropTypes.bool
        })
    )
}

SettingsList.defaultProps = {
    menuItems: [],
}
