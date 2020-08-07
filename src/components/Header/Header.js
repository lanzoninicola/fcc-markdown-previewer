import React from 'react'
import './Header.css'
import DotGraphWidget from '../DotGraphWidget/DotGraphWidget';
import Menu from '../Menu/Menu'
import SvgIcon from '../SvgIcon/SvgIcon'

const Header = ({ storemarkdownVersionHistory }) => {

    const menuItems = [
        {
            component: 'EditorPanel',
            settingName: 'focusMode',
            label: 'FOCUS MODE',
            eventHandler: '',
            disabled: false,
            visible: true
        },
        {
            component: 'EditorPanel',
            settingName: 'ultraFocusMode',
            label: 'ULTRA FOCUS MODE',
            eventHandler: 'handleUltraFocusMode',
            disabled: false,
            visible: true
        }
        // ,
        // {
        //     component: 'EditorPanel',
        //     name: 'hideNumbers',
        //     label: 'HIDE NUMBERS',
        //     eventHandler: handleHideGridNumbers
        // },
    ]

    return (
        <div className="header">
            <div className="header-title">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="50" height="50"
                    viewBox="0 0 172 172"
                    style={{ fill: '#000000' }}>
                    <g fill="none"
                        style={{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M13.76,34.4c-7.56531,0 -13.76,6.19469 -13.76,13.76v82.56c0,7.56531 6.19469,13.76 13.76,13.76h144.48c7.56531,0 13.76,-6.19469 13.76,-13.76v-82.56c0,-7.56531 -6.19469,-13.76 -13.76,-13.76zM13.76,41.28h144.48c3.84313,0 6.88,3.03688 6.88,6.88v82.56c0,3.84313 -3.03687,6.88 -6.88,6.88h-144.48c-3.84312,0 -6.88,-3.03687 -6.88,-6.88v-82.56c0,-3.84312 3.03688,-6.88 6.88,-6.88zM27.52,61.92v55.04h13.76v-36.6575l17.2,22.8975l17.2,-22.8975v36.6575h13.76v-55.04h-13.76l-17.2,23.1125l-17.2,-23.1125zM120.4,61.92v27.52h-17.2l24.08,27.52l24.08,-27.52h-17.2v-27.52z"></path></g></g></svg>
                <h1 id="title">MARKDOWN EDITOR</h1>
            </div>
            <div className="header-toolbar">
                <div className="header-toolbar-items">
                    <div className="header-toolbar-item">
                        <DotGraphWidget
                            title="local storage space used"
                            value={0} />
                    </div>
                    <div className="header-toolbar-item">
                        <SvgIcon
                            name={'notification'}
                            iconColor={'#ffffff'}
                            bigIcon={true}
                        />
                    </div>
                    <div className="header-toolbar-item">
                        <Menu
                            menuIconColor={'#ffffff'}
                            contextMenuSpaceBetween={'large'}
                            contextMenuBgColor={'linear-gradient(90deg, rgb(30, 43, 92,0.7) 60%, rgba(51,112,150,0.7) 100%)'}
                            menuItems={menuItems}
                        />
                    </div>
                </div>

            </div>
        </div >
    )
}



export default Header;