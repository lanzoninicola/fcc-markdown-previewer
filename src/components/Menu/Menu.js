import React, { Component } from 'react'
import './Menu.css'
import SvgIcon from '../SvgIcon/SvgIcon'
import ContextMenu from '../ContextMenu/ContextMenu'

class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showMenuContext: false
        }
    }

    handleOpenContextMenu = () => {
        this.setState({ showMenuContext: true })
    }

    handleCloseContextMenu = () => {
        this.setState({ showMenuContext: false })
    }

    render() {

        const { showMenuContext } = this.state;

        return (
            <div id="menu" >
                <div id="menu-icon" onClick={this.handleOpenContextMenu}>
                    <SvgIcon
                        name={'settings'}
                        color={'#006d77'}
                        bigIcon={true}
                    />
                </div>
                {showMenuContext &&
                    <ContextMenu
                        menuItems={this.props.menuItems}
                        handleCloseContextMenu={this.handleCloseContextMenu}
                    />}

            </div>


        )
    }
}

export default Menu;