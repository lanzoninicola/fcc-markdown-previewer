import React from 'react';
import PropTypes from 'prop-types';
import './DotGraph.css';


const DotGraph = ({ dotSize, intensity }) => {

    return (
        <div
            className={`graph-dot-increment graph-dot-${dotSize} intesity-${intensity}`}>
        </div>
    )

}

export default DotGraph;

DotGraph.propTypes = {
    dotSize: PropTypes.oneOf([
        'small', 'medium', 'large'
    ]),
    intensity: PropTypes.oneOf(
        ['undefined', 'very-low', 'low', 'medium', 'high', 'very-high']
    )
}

DotGraph.defaultProps = {
    dotSize: "small",
    intensity: "undefined"
}
