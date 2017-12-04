import React, { Component, Fragment } from 'react';
import ShopListContainer from '../containers/ShopListContainer';
import ShopCartContainer from '../containers/ShopCartContainer';
import AddItemContainer from '../containers/AddItemContainer';

class App extends Component {
    
    render() {
        return (
            <div>
                <AddItemContainer />
                <ShopListContainer />
                <ShopCartContainer />
            </div>
        );
    }

}

export default App;