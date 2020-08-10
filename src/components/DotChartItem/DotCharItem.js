import React from 'react';
import PropTypes from 'prop-types';
import './DotChartItem.css';


const DotChartItem = ({ dotSize, increment }) => {

    return (
        <div
            className={`dotchart-increment dotchart-item-${dotSize} increment-${increment}`}>
        </div>
    )

}

export default DotChartItem;

DotChartItem.propTypes = {
    dotSize: PropTypes.oneOf([
        'small', 'medium', 'large'
    ]),
    increment: PropTypes.oneOf(
        ['undefined', 'very-low', 'low', 'medium', 'high', 'very-high']
    )
}

DotChartItem.defaultProps = {
    dotSize: "small",
    increment: "undefined"
}
