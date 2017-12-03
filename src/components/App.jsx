import React, { Component, Fragment } from 'react';
import ShopListContainer from '../containers/ShopListContainer';
import ShopCartContainer from '../containers/ShopCartContainer';

class App extends Component {
    
    render() {
        return (
            <div>
                <ShopListContainer />
                <ShopCartContainer />
            </div>
        );
    }

}

export default App;