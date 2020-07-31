import React from 'react';
import styles from './Layout.module.css'
import Aux from '../../hoc/Auxiliary'

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;