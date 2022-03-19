import React from 'react';
import PropTypes from 'prop-types';
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

Row.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
}

export default Row;