
import React from 'react';
import LocalStorageStatsViewWithData from '../LocalStorageStatsView/LocalStorageStatsView'
import withContextMenu from '../../../Hoc/withContextMenu/withContextMenu';
import SvgIcon from '../../SvgIcon/SvgIcon';

const LocalStorageMenu = ({ ...props }) => {

    const { handleOnClickEvent } = props;

    return (
        <div id='localstorage-menu' onClick={handleOnClickEvent}>
            <SvgIcon
                name={'storagestats'}
                iconColor={'#ffffff'}
                bigIcon />
        </div>
    )
}

const LocalStorageStatsMenu = withContextMenu(LocalStorageStatsViewWithData, { spaceBetween: 'large' })(LocalStorageMenu);

export default LocalStorageStatsMenu;