import React from 'react';
import styles from './row.module.css';

import Col from '../Col';

const Row = ({ children }) => {



    return (
        <div className={ styles.Row }>
            {children.map((item) => {
                return (
                    <Col
                        size={item.props.size}
                    />
                )
            })}
        </div>
        )
    }


export default Row;