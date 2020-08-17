import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css'

const logo = (props) => (
    <div className={styles.Logo}>
        <img src={burgerlogo} alt="MyBurger" />
    </div>
);

export default logo;