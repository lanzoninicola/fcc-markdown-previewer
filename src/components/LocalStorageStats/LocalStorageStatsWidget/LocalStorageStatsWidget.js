import React from 'react';
import PropTypes from 'prop-types';
import './LocalStorageWidget.css';
import SvgIcon from '../../SvgIcon/SvgIcon';

import LocalStorageStatsViewWithData from '../LocalStorageStatsView/LocalStorageStatsView';
import withLocalStorageData from '../../../Hoc/withLocalStorageData/withLocalStorageData';
import withContextMenu from '../../../Hoc/withContextMenu/withContextMenu';

const LocalStorageFilledCircle = ({ ...props }) => {

    const { handleOnClickEvent } = props;
    const { localStorageSpaceUsedInByte } = props.data;
    let iconColor = '#ffffff';

    if (localStorageSpaceUsedInByte > 0) {
        iconColor = '#47ebd3';
    }

    if (localStorageSpaceUsedInByte > 1000000) {
        iconColor = '#47ebd3';
    }

    if (localStorageSpaceUsedInByte > 3000000) {
        iconColor = '#47ebd3';
    }

    if (localStorageSpaceUsedInByte > 4000000) {
        iconColor = '#fcb045';
    }

    if (localStorageSpaceUsedInByte > 4500000) {
        iconColor = '#fd1d1d';
    }

    if (localStorageSpaceUsedInByte > 4800000) {
        iconColor = '#833ab4';
    }

    return (
        <div id="localstoragestatswidget" onClick={handleOnClickEvent}>
            <SvgIcon
                name={'filledcircle'}
                iconColor={iconColor}
                bigIcon={true}
            />
        </div>
    )
}


const LocalStorageFilledCircleWithData = withLocalStorageData(LocalStorageFilledCircle);
const LocalStorageStatsWidget = withContextMenu(LocalStorageStatsViewWithData, { spaceBetween: 'large' })(LocalStorageFilledCircleWithData);

export default LocalStorageStatsWidget;

LocalStorageFilledCircle.propTypes = {
    data: PropTypes.object
}