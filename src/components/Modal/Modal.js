import React from 'react'
import './Modal.css'

const Modal = (props) => {

    const { title, message, children } = props;

    return (
        <div className="modal-container">
            <div className="modal-window">
                <div className="modal-content">
                    <h3 id="modal-title">{title}</h3>
                    <p id="modal-message">{message}</p>
                    <div id="modal-buttons">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal;