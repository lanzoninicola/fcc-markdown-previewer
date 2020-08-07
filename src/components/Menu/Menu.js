import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Menu.css'
import SvgIcon from '../SvgIcon/SvgIcon'
import ContextMenu from '../ContextMenu/ContextMenu'
import AppSettingsList from '../AppSettingsList/AppSettingsList';

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
        const { menuIconColor, contextMenuBgColor, contextMenuSpaceBetween, menuItems } = this.props

        return (
            <div id="menu">
                <div id="menu-icon" onClick={this.handleOpenContextMenu}>
                    <SvgIcon
                        name={(!showMenuContext) ? 'menuopen' : 'menuclose'}
                        iconColor={menuIconColor}
                        bigIcon={true}
                    />
                </div>
                {showMenuContext &&
                    <ContextMenu spaceBetween={contextMenuSpaceBetween}>
                        <AppSettingsList menuItems={menuItems} />
                    </ContextMenu>
                }
            </div>
        )
    }
}

export default Menu;

Menu.propTypes = {
    menuItems: PropTypes.array,
    menuIconColor: PropTypes.string,
    contextMenuBgColor: PropTypes.string,
    contextMenuSpaceBetween: PropTypes.string
}