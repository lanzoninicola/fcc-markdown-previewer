import React from 'react'
import PropTypes from 'prop-types'
import './DotGraphWidget.css'
import DotGraph from '../DotGraph/DotGraph'


const DotGraphWidget = ({ title, value }) => {

    // value = 0;

    let graphTitle = (title) ? title.toUpperCase() : DotGraphWidget.defaultProps.title;

    return (
        <div id="DotGraph">
            <p id="DotGraph-title">{graphTitle}</p>
            <div id="GraphBar">
                <DotGraph
                    dotSize={"small"}
                    intensity={(value > 0) ? "very-low" : DotGraph.defaultProps.intensity}
                />
                <DotGraph
                    dotSize={"small"}
                    intensity={(value > 1000000) ? "low" : DotGraph.defaultProps.intensity}
                />
                <DotGraph
                    dotSize={"small"}
                    intensity={(value > 3000000) ? "low" : DotGraph.defaultProps.intensity}
                />
                <DotGraph
                    dotSize={"small"}
                    intensity={(value > 4000000) ? "medium" : DotGraph.defaultProps.intensity}
                />
                <DotGraph
                    dotSize={"small"}
                    intensity={(value > 4500000) ? "high" : DotGraph.defaultProps.intensity}
                />
                <DotGraph
                    dotSize={"small"}
                    intensity={(value > 4800000) ? "very-high" : DotGraph.defaultProps.intensity}
                />

            </div>
        </div >

    )
}

export default DotGraphWidget;

DotGraphWidget.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
}

DotGraphWidget.defaultProps = {
    value: 0,
    title: 'DOT GRAPH'
}
