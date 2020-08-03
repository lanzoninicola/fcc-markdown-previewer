import React, { Component } from 'react'
import SvgIcon from '../../components/SvgIcon/SvgIcon'
import { getIcon } from './IconCatalog/IconCatalog'

class SvgIconController extends Component {
    constructor(props) {
        super(props)

        this.state = {
            iconLabel: null,
            iconPath: null
        }

        this.screenWidth = 0;
    }

    componentDidMount() {
        document.addEventListener("resize", this.setWindowDimensions());

        const { name } = this.props;
        let iconFromCatalog = getIcon(name);
        let newState = { ...this.state, iconLabel: iconFromCatalog.label, iconPath: iconFromCatalog.svgPathValue };
        this.setState(newState)
    }

    shouldComponentUpdate(nextState) {
        return this.state.iconLabel !== nextState.iconLabel;
    }

    componentWillUnmount() {
        document.removeEventListener("resize", this.setWindowDimensions())
    }

    setWindowDimensions = () => {
        this.screenWidth = window.innerWidth;
    }

    render() {

        const { iconPath } = this.state;
        const { color } = this.props

        console.log(this.screenWidth)

        let svgWidth = (this.screenWidth <= 950) ? "15" : "30";
        let svgHeight = (this.screenWidth <= 950) ? "15" : "30";
        let svgStyle = { fill: color };

        return (
            <SvgIcon
                width={svgWidth}
                height={svgHeight}
                style={svgStyle}
                path={iconPath}
            />
        )
    }



}

export default SvgIconController;