import React from 'react';
import PropTypes from 'prop-types';
import './LocalStorageStatsView.css'
import SvgIcon from '../../SvgIcon/SvgIcon';
import withLocalStorageData from '../../../Hoc/withLocalStorageData/withLocalStorageData'
import DotChart from '../../DotChart/DotChart';

const LocalStorageStatsView = ({ ...props }) => {

    const { localStorageSpaceUsedInByte, localStorageFreeSpaceInPercentage } = props.data;
    const { handleStorageData, lastRefreshedDate } = props;

    return (
        <div className={'localStorageStatsView'}>
            <div className="localStorageStats-section-view" style={{ marginBottom: '20px' }}>
                <DotChart title={'Local storage usage'} data={localStorageSpaceUsedInByte} />
            </div>
            <div className="localStorageStats-section-view">
                <div className="localStorageStats-section-title">SPACE USED</div>
                <div className="localStorageStats-section-value">{`${(localStorageSpaceUsedInByte / 1024).toFixed(3)} MB`}</div>
            </div>
            <div className="localStorageStats-section-view">
                <div className="localStorageStats-section-title">FREE SPACE</div>
                <div className="localStorageStats-section-value">{`${localStorageFreeSpaceInPercentage} %`}</div>
            </div>
            <div className="localStorageStats-section-view" style={{ cursor: 'pointer' }} onClick={handleStorageData}>
                <div id="localStorageStats-refresh-data">
                    <SvgIcon
                        name={'refresh'}
                        iconColor={'#ffffff'}
                        bigIcon />
                </div>
                <div className="localStorageStats-section-title" style={{ fontSize: '0.7rem' }}>Refresh</div>
                <div id="last-refresh-date" className="localStorageStats-section-title">{lastRefreshedDate && `Last Refresh: ${lastRefreshedDate}`}</div>
            </div>
        </div >
    )
}

const LocalStorageStatsViewWithData = withLocalStorageData(LocalStorageStatsView);

export default LocalStorageStatsViewWithData;

LocalStorageStatsView.propTypes = {
    data: PropTypes.object
}