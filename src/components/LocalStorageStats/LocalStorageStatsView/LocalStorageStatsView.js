import React from 'react';
import PropTypes from 'prop-types';
import './LocalStorageStatsView.css'
import SvgIcon from '../../SvgIcon/SvgIcon';
import withLocalStorageData from '../../../Hoc/withLocalStorageData/withLocalStorageData'

const LocalStorageStatsView = ({ ...props }) => {

    const { localStorageSpaceUsedInByte, localStorageFreeSpaceInPercentage } = props.data;
    const { handleStorageData } = props;

    return (
        <div className={'localStorageStatsView'}>
            <div className="localStorageStats-section-view">
                <p className="localStorageStats-section-title">SPACE USED</p>
                <p className="localStorageStats-section-value">{`${(localStorageSpaceUsedInByte / 1024).toFixed(3)} MB`}</p>
            </div>
            <div className="localStorageStats-section-view">
                <p className="localStorageStats-section-title">FREE SPACE</p>
                <p className="localStorageStats-section-value">{`${localStorageFreeSpaceInPercentage} %`}</p>
            </div>
            <div className="localStorageStats-section-view" style={{ cursor: 'pointer' }} onClick={handleStorageData}>
                <SvgIcon
                    name={'refresh'}
                    iconColor={'#ffffff'}
                    bigIcon />
                <p className="localStorageStats-section-title" style={{ fontSize: '0.7rem' }}>Refresh</p>
            </div>
        </div >
    )
}

const LocalStorageStatsViewWithData = withLocalStorageData(LocalStorageStatsView);

export default LocalStorageStatsViewWithData;

LocalStorageStatsView.propTypes = {
    data: PropTypes.object
}