import React, { Component } from 'react';
import List from 'material-ui/List';
import ShopItemContainer from '../containers/ShopItemContainer';

class ShopList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List style={{ 'display': 'inline-block' }}>
                {this.props.listState.shopcart.map(item =>
                    <ShopItemContainer
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        count={item.count}
                        price={item.price}
                        imgSrc={item.img}
                        isAdded={item.isAdded}
                    />
                )}
            </List>
        );
    }
}

export default ShopList;