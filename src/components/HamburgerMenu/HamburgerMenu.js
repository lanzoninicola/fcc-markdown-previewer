import React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '../SvgIcon/SvgIcon'

const HamburgerMenu = ({
    showContextMenu,
    config,
    handleOnClickEvent,
    bigIcon
}) => {

    const { iconColor } = config;

    return (
        <div id="hamburger-menu-icon" onClick={handleOnClickEvent}>
            <SvgIcon
                name={(!showContextMenu) ? 'menuopen' : 'menuclose'}
                iconColor={iconColor}
                bigIcon={true}
            />
        </div>
    )
}

export default React.memo(HamburgerMenu);

HamburgerMenu.propTypes = {
    showContextMenu: PropTypes.bool,
    config: PropTypes.object,
    contextMenuBgColor: PropTypes.string,
    contextMenuSpaceBetween: PropTypes.string
}

HamburgerMenu.defaultProps = {
    showContextMenu: false,
    config: {
        iconColor: 'rgb(0,109,119)'
    },
    bigIcon: true
}