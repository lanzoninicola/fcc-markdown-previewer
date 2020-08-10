import React from 'react'
import PropTypes from 'prop-types'
import './DotChart.css'
import DotChartItem from '../DotChartItem/DotCharItem'

const DotChart = ({ title, ...props }) => {

    const { data, handleOnClickEvent } = props;

    let value = data.localStorageSpaceUsedInByte;
    let graphTitle = (title) ? title.toUpperCase() : DotChart.defaultProps.title;

    return (
        <div id="dotchart" onClick={handleOnClickEvent}>
            <p id="dotchart-title">{graphTitle}</p>
            <div id="dotchart-bar">
                <DotChartItem
                    dotSize={"small"}
                    increment={(value > 0) ? "lower" : DotChart.defaultProps.increment}
                />
                <DotChartItem
                    dotSize={"small"}
                    increment={(value > 1000000) ? "low" : DotChart.defaultProps.increment}
                />
                <DotChartItem
                    dotSize={"small"}
                    increment={(value > 3000000) ? "low" : DotChart.defaultProps.increment}
                />
                <DotChartItem
                    dotSize={"small"}
                    increment={(value > 4000000) ? "medium" : DotChart.defaultProps.increment}
                />
                <DotChartItem
                    dotSize={"small"}
                    increment={(value > 4500000) ? "high" : DotChart.defaultProps.increment}
                />
                <DotChartItem
                    dotSize={"small"}
                    increment={(value > 4800000) ? "higher" : DotChart.defaultProps.increment}
                />
            </div>
        </div >
    )
}

export default DotChart;

DotChart.propTypes = {
    title: PropTypes.string,
    data: PropTypes.number,
    handleClickEventHandler: PropTypes.func
}

DotChart.defaultProps = {
    title: 'DOT GRAPH',
    data: 0
}



// }= ({ title, value }) => {