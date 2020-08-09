import React from 'react';
import PropTypes from 'prop-types';
import './DotGraph.css';


const DotGraph = ({ dotSize, increment }) => {

    return (
        <div
            className={`graph-dot-increment graph-dot-${dotSize} increment-${increment}`}>
        </div>
    )

}

export default DotGraph;

DotGraph.propTypes = {
    dotSize: PropTypes.oneOf([
        'small', 'medium', 'large'
    ]),
    increment: PropTypes.oneOf(
        ['undefined', 'very-low', 'low', 'medium', 'high', 'very-high']
    )
}

DotGraph.defaultProps = {
    dotSize: "small",
    increment: "undefined"
}
