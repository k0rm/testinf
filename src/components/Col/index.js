import React from 'react';
import styles from './col.module.css';

const Col = ({ size = 1 }) => {

    let item = `c${size}`;
    if (!size) {
        item = "c1";
    }

    return (
        <div className={ styles[item] }></div>
    )
}

export default Col;