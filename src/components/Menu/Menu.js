import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Menu.css'
import SvgIcon from '../SvgIcon/SvgIcon'
import ContextMenu from '../ContextMenu/ContextMenu'
import SettingsList from '../SettingsList/SettingsList';

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
                    // <ContextMenu
                    //     menuItems={menuItems}
                    //     menuBgColor={menuBgColor}
                    // />
                    // <SettingsListWithContextMenu menuItems={menuItems}  />
                    <ContextMenu menuBgColor={menuBgColor}>
                        <SettingsList menuItems={menuItems} />
                    </ContextMenu>
                }
            </div>
        )
    }
}

export default Menu;

Menu.propTypes = {
    menuItems: PropTypes.array.isRequired

}