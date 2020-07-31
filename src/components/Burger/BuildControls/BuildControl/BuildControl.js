import React from 'react';

import styles from './BuildControl.module.css'

const buildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <di className={styles.Label}>{props.label}</di>
            <button className={styles.Less}>Less</button>
            <button className={styles.More}>More</button>
        </div>
    )
};

export default buildControl;