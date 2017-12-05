import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import Popover from 'material-ui/Popover';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ShopCartItem from './ShopCartItem';
import Snackbar from 'material-ui/Snackbar';

class ShopCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
            openSnack: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
        this.onBuy = this.onBuy.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }
    handleClick = () => {
        !this.props.cartstate.length ? null : this.setState(prevState => ({
            open: !prevState.open,
            anchorEl: findDOMNode(this.button)
        }));

    }
    handlePopoverClose() {
        this.setState({ open: false });
    }
    handleDelete = id => event => {
        this.props.onDelete(id)
            .then(() => {
                !this.props.cartstate.length ? this.handlePopoverClose() : null;
            })
    }
    handleRequestClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ openSnack: false });
    }
    onBuy = ({ name, count, calcPrice } = item) => {
        this.setState({ openSnack: true, name, count, calcPrice });
    }

    render() {
        const fixStyle = {
            'position': 'fixed',
            'top': '15px',
            'right': '15px'
        }
        const { name, count, calcPrice } = this.state;
        return (
            <div style={fixStyle}>
                <IconButton ref={node => { this.button = node }} onClick={this.handleClick}>
                    <Badge
                        badgeContent={this.props.cartstate.length}
                        color="primary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <Popover
                    open={this.state.open}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    onRequestClose={this.handlePopoverClose}
                    anchorEl={this.state.anchorEl}>
                    <List>
                        {
                            this.props.cartstate.map((item, i) =>
                                <ShopCartItem
                                    key={i}
                                    name={item.name}
                                    price={item.price}
                                    id={item.id}
                                    img={item.img}
                                    deleteItem={this.handleDelete}
                                    buyItem={this.onBuy}
                                />
                            )
                        }
                    </List>
                </Popover>
                <Snackbar
                    onClick={this.handleRequestClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.openSnack}
                    autoHideDuration={6000}
                    onRequestClose={this.handleRequestClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.name}, Count: {this.state.count}, Total: {this.state.calcPrice + '$'}</span>}
                />
            </div>
        );
    }
}

export default ShopCart;
