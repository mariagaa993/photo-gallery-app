import React, { Fragment } from "react";
import './Modal.scss';
import closeButton from './close-button.svg';

const Modal = ({ title, children, close }) => {
    return (
        <Fragment>
            <div className="overlay"></div>
            <section className="modal">
                <header>
                    <h2 className="modal-title">{title}</h2>
                    <button 
                        className="close-button"
                        type="button" 
                        onClick={close}>
                        <img src={closeButton} alt="Close" />
                        </button>
                </header>
                <article className="modal-content">
                    {children}
                </article>
            </section>
        </Fragment>
    );
}

export default Modal;
