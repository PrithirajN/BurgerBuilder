import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Burger from './containers/BurgerMaker/BurgerMaker';


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Burger/>
                </Layout>
            </div>
        );
    }
}

export default App;
