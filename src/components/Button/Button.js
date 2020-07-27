import React from 'react'
import './Button.css'


const Button = (props) => {

    const { type, eventHandler } = props;

    return (
        <button className={`button button-${type}`} onClick={eventHandler}>{props.children}</button>
    )
}

export default Button;