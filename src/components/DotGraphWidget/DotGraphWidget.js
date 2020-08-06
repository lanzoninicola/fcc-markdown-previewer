import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DotGraphWidget.css'
import DotGraph from '../DotGraph/DotGraph'
import ContextMenu from '../ContextMenu/ContextMenu'


class DotGraphWidget extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showContextMenu: false
        }
    }

    // value = 0;
    handleContextMenuAppearance = () => {
        console.log('handlefunction fired')
        this.setState({ showContextMnu: !this.state.showContextMenu })
    }

    render() {

        const { showContextMenu } = this.state;
        const { title, value } = this.props;

        console.log(showContextMenu)

        let graphTitle = (title) ? title.toUpperCase() : DotGraphWidget.defaultProps.title;

        return (
            <div id="DotGraph" onClick={this.handleContextMenuAppearance}>
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
                {true && <ContextMenu />}
            </div >


        )
    }

}

export default DotGraphWidget;

DotGraphWidget.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
}

DotGraphWidget.defaultProps = {
    title: 'DOT GRAPH',
    value: 0
}



// }= ({ title, value }) => {