import React from 'react';
import PropTypes from 'prop-types';
import AppSetting from '../AppSetting/AppSetting'

const AppSettingsList = ({ menuItems }) => {

    // let optionsMenu = null;

    // if (menuItems && menuItems.length > 0) {
    let optionsMenu = menuItems.map((menuItem, index) => {
        return <AppSetting
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
        <div id="app-settings-list">
            {optionsMenu}
        </div >
    )
}

export default AppSettingsList;

AppSettingsList.propTypes = {
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

AppSettingsList.defaultProps = {
    menuItems: [],
}
