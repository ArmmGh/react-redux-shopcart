import React, { Component, Fragment } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Delete from 'material-ui-icons/Delete';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'

class ShopCartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            calcPrice: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.buyItem = this.buyItem.bind(this);
    }
    handleChange = price => e => {
        const val = e.target.value;
        const result = price * val;
        console.log()
        val > 0 ? this.setState({ count: val, calcPrice: result }) : null;
    }
    buyItem = (name, count, calcPrice) => event => {
        const item = { name, count, calcPrice };
        this.props.buyItem(item);
    }
    componentDidMount() {
        this.setState({ calcPrice: this.props.price });
    }

    render() {
        const { calcPrice } = this.state;
        const { name, price, img, id, deleteItem } = this.props;
        return (
            <Fragment>
                <ListItem>
                    <ListItemIcon>
                        <Delete onClick={deleteItem(id)} />
                    </ListItemIcon>
                    <img width='50' height='50' src={img} alt={name} />
                    <ListItemText primary={name} secondary={price + '$'} />
                    <TextField
                        type="number"
                        label="Count"
                        value={this.state.count}
                        style={{ 'width': 50 }}
                        onChange={this.handleChange(price)} />
                    <ListItemText primary={calcPrice ? calcPrice + '$' : price + '$'} />
                    <Button onClick={this.buyItem(name, this.state.count, calcPrice)} raised dense color="primary">Buy</Button>
                </ListItem>
            </Fragment>
        )
    }
}

export default ShopCartItem;