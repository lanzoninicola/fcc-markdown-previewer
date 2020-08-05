import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Menu.css'
import SvgIcon from '../SvgIcon/SvgIcon'
import ContextMenuOption from '../ContextMenuOption/ContextMenuOption'

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showMenuContext: false
        }
    }

    handleOpenContextMenu = () => {
        this.setState({ showMenuContext: !this.state.showMenuContext })
    }


    render() {

        const { showMenuContext } = this.state;
        const { menuItems, iconColor, menuBgColor } = this.props

        let optionsMenu = null;

        if (menuItems && menuItems.length > 0) {
            optionsMenu = menuItems.map((menuItem, index) => {
                return <ContextMenuOption
                    key={index}
                    settingName={menuItem.settingName}
                    label={menuItem.label}
                    eventHandler={menuItem.eventHandler}
                    disabled={menuItem.disabled}
                    visible={menuItem.visible}
                />
            })
        }

        return (
            <div id="menu">
                <div id="menu-icon" onClick={this.handleOpenContextMenu}>
                    <SvgIcon
                        name={(!showMenuContext) ? 'menuopen' : 'menuclose'}
                        color={iconColor}
                        bigIcon={true}
                    />
                </div>
                {showMenuContext &&
                    <div id="context-menu" style={{ background: menuBgColor }}>
                        {optionsMenu}
                    </div>
                }
            </div>
        )
    }
}

export default Menu;

Menu.propTypes = {
    menuItems: PropTypes.array.isRequired

}