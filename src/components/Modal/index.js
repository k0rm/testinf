import React from 'react';
import styles from './modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
    console.log(children);
    console.log(isOpen);


    return (
    
    isOpen === true
    ?
    <div className={ styles.modal }>
            {children}
        <button className={ styles.modalToggler } onClick={onClose}>CLICK ME</button>
    </div>
    :
    <div className='modalNo'></div>
)
    }


// Modal.OnClose = ({ children }) => <button>Close Me</button>;
Modal.Title = ({ children }) => <div className={ styles.title }>{children}</div>;
Modal.Body = ({ children }) => <div className={ styles.body }>{children}</div>;
Modal.Footer = ({ children }) => <div className={ styles.footer }>{children}</div>;

export default Modal;