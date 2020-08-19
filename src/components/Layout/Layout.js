import React from 'react';
import styles from './Layout.module.css'
import Aux from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <Sidedrawer/>
            <main className={styles.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;