import React, { Fragment } from 'react'
import './Modal.css'

const Modal = (props) => {

    const { title, message, inputs, children } = props;

    let inputForm;

    if (inputs) {
        inputForm = inputs.map((input, index) => {
            return (
                <Fragment key={`input_${index}`}>
                    <input
                        // key={`input_${index}`}
                        id={index}
                        type="text"
                        value={input.value}
                        placeholder={input.placeholder}
                        onChange={input.onChangeEventHandler}
                        required={input.required}
                    />
                    <label
                        key={`label_${index}`}
                        htmlFor={index}
                    >
                        {input.label}
                    </label>
                </Fragment>
            )
        })
    }

    return (
        <div className="modal-container">
            <div className="modal-window">
                <div className="modal-content">
                    <h3 id="modal-title">{title}</h3>
                    {(message) ? <p id="modal-message">{message}</p> : null}
                    <div id="modal-inputs">
                        {inputs ? inputForm : null}
                    </div>
                    <div id="modal-buttons">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal;