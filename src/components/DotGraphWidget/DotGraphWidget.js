import React from 'react'
import PropTypes from 'prop-types'
import './DotGraphWidget.css'
import DotGraph from '../DotGraph/DotGraph'

const DotGraphWidget = ({ title, children, data, handleClickEventHandler }) => {

    let value = data;
    let graphTitle = (title) ? title.toUpperCase() : DotGraphWidget.defaultProps.title;

    return (
        <div id="DotGraph" onClick={(handleClickEventHandler) ? handleClickEventHandler : null}>
            <p id="DotGraph-title">{graphTitle}</p>
            <div id="GraphBar">
                <DotGraph
                    dotSize={"small"}
                    increment={(value > 0) ? "very-low" : DotGraph.defaultProps.increment}
                />
                <DotGraph
                    dotSize={"small"}
                    increment={(value > 1000000) ? "low" : DotGraph.defaultProps.increment}
                />
                <DotGraph
                    dotSize={"small"}
                    increment={(value > 3000000) ? "low" : DotGraph.defaultProps.increment}
                />
                <DotGraph
                    dotSize={"small"}
                    increment={(value > 4000000) ? "medium" : DotGraph.defaultProps.increment}
                />
                <DotGraph
                    dotSize={"small"}
                    increment={(value > 4500000) ? "high" : DotGraph.defaultProps.increment}
                />
                <DotGraph
                    dotSize={"small"}
                    increment={(value > 4800000) ? "very-high" : DotGraph.defaultProps.increment}
                />
            </div>
            {children}
        </div >
    )
}



export default DotGraphWidget;

DotGraphWidget.propTypes = {
    title: PropTypes.string,
    data: PropTypes.number,
    handleClickEventHandler: PropTypes.func
}

DotGraphWidget.defaultProps = {
    title: 'DOT GRAPH',
    data: 0
}



// }= ({ title, value }) => {