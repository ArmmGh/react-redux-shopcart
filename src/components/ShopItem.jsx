import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import AddShoppingCart from 'material-ui-icons/AddShoppingCart';
import ShopCart from './ShopCart';

class ShopItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let val = e.target.value;
        if (val < 6 && val > -1) {
            this.setState({ count: e.target.value });
        }
    }

    handleAdd = id => event => {
        this.props.onAdd(id);
    }

    render() {
        const { name, price, count, imgSrc, id } = this.props;
        return (
            <ListItem>
                <img width='80' height='80' src={imgSrc} />
                <ListItemText primary={name} secondary={price + '$'}></ListItemText>
                <TextField value={this.state.count} onChange={this.handleChange} type="number" id="number" label="Count" max="5" />
                <IconButton aria-label="Delete">
                    <AddShoppingCart onClick={this.handleAdd(id)} />
                </IconButton>
            </ListItem>
        );
    }
}

export default ShopItem;