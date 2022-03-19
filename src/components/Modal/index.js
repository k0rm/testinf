import React from 'react';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.node)
}

export default Modal;