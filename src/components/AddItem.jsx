import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import ShopCart from './ShopCart';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        }
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handlePrice(e) {
        const val = e.target.value;
        val > 0 ? this.setState({ price: val }) : null;
    }

    addItem = (name, price) => event => {
        name ? this.props.onAdd(name, price) : null;
        this.setState({ name: '', price: '' });
    }

    render() {
        return (
            <div>
                <TextField
                    type="text"
                    id="uncontrolled"
                    label="Product Name"
                    onChange={this.handleName}
                    value={this.state.name}
                />
                <TextField
                    type="number"
                    id="uncontrolled"
                    label="Price $"
                    onChange={this.handlePrice}
                    value={this.state.price}
                />
                <Button raised color="primary" onClick={this.addItem(this.state.name, this.state.price)}>
                    Add
                </Button>
            </div>
        )
    }
}

export default AddItem;