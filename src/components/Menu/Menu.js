import React, { Component } from 'react'
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
        const { menuItems } = this.props

        let optionsMenu = menuItems.map((menuItem, index) => {
            return <ContextMenuOption
                key={index}
                settingName={menuItem.settingName}
                label={menuItem.label}
                eventHandler={menuItem.eventHandler}
                disabled={menuItem.disabled}
                visible={menuItem.visible}
            />
        })

        return (
            <div id="menu">
                <div id="menu-icon" onClick={this.handleOpenContextMenu}>
                    <SvgIcon
                        name={(!showMenuContext) ? 'menuopen' : 'menuclose'}
                        color={'#006d77'}
                        bigIcon={true}
                    />
                </div>
                {showMenuContext &&
                    <div id="context-menu">
                        {optionsMenu}
                    </div>
                }
            </div>
        )
    }
}

export default Menu;