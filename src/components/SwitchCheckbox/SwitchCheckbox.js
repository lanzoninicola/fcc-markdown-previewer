import React from 'react'
import './SwitchCheckbox.css'
import PropTypes from 'prop-types';

class SwitchCheckbox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOptionEnable: false
        }
    }

    componentDidMount() {
        let isOptionEnabled = localStorage.getItem(this.props.settingName);
        this.setState({ menuOptionEnable: isOptionEnabled === "true" ? true : false });
    }

    onChangeEventHandler = () => {
        this.setState({ menuOptionEnable: !this.state.menuOptionEnable }, this.dispatchEvent);
    }

    dispatchEvent = () => {
        const { menuOptionEnable } = this.state;
        localStorage.setItem(this.props.settingName, menuOptionEnable);
        this.props.eventHandler(menuOptionEnable);
    }

    render() {

        return (
            <input
                className="apple-switch"
                type="checkbox"
                name={this.props.settingName}
                // defaultChecked={false}
                onChange={this.onChangeEventHandler}
                checked={this.state.menuOptionEnable}
            >
            </input>
        )
    }
}

export default SwitchCheckbox;

SwitchCheckbox.propTypes = {
    settingName: PropTypes.string.isRequired,
    eventHandler: PropTypes.func.isRequired
}