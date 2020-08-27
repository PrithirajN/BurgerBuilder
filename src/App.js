import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerMaker from './containers/BurgerMaker/BurgerMaker';


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <BurgerMaker/>
                </Layout>
            </div>
        );
    }
}

export default App;
