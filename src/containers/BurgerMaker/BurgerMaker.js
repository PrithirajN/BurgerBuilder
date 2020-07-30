import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'

class BurgerMaker extends Component
{
    render() {
        return (
            <Aux>
                <Burger/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerMaker;