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

    handleContextMenu = () => {
        this.setState({ showMenuContext: !this.state.showMenuContext })
    }

    render() {

        const { showMenuContext } = this.state;

        return (
            <div id="menu" onClick={this.handleContextMenu}>
                <SvgIcon name={'settings'} color={'#006d77'} bigIcon={true} />
                {showMenuContext && <ContextMenu context={this.props.context} />}
            </div>
        )
    }
}

export default Menu;