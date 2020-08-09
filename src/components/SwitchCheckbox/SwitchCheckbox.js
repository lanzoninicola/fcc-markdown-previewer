import React from 'react'
import './SwitchCheckbox.css'
import PropTypes from 'prop-types';

class SwitchCheckbox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            settingIsEnable: false
        }
    }

    componentDidMount() {
        const { settingName } = this.props;

        let isSettingEnabled = localStorage.getItem(settingName);
        if (isSettingEnabled) {
            this.setState({ settingIsEnable: isSettingEnabled === "true" ? true : false });
        }
    }

    onChangeEventHandler = () => {
        this.setState({ settingIsEnable: !this.state.settingIsEnable }, this.dispatchEvent);
    }

    dispatchEvent = () => {
        const { settingIsEnable } = this.state;
        const { settingName, eventHandler } = this.props;

        localStorage.setItem(settingName, settingIsEnable);
        eventHandler(settingIsEnable);
    }

    render() {

        const { settingIsEnable } = this.state;
        const { settingName, disabled } = this.props;

        return (
            <input
                className="apple-switch"
                type="checkbox"
                name={settingName}
                // defaultChecked={false}
                onChange={this.onChangeEventHandler}
                checked={settingIsEnable}
                disabled={disabled}
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

SwitchCheckbox.defaultProps = {
    disabled: false
}