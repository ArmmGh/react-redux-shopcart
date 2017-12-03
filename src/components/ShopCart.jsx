import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import Popover from 'material-ui/Popover';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Delete from 'material-ui-icons/Delete';

class ShopCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlePopoverClose = this.handlePopoverClose.bind(this);
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

    render() {
        const fixStyle = {
            'position': 'fixed',
            'top': '15px',
            'right': '15px'
        }
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
                                <ListItem key={i} button>
                                    <ListItemIcon>
                                        <Delete onClick={this.handleDelete(item.id)} />
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} secondary={item.price + '$'} />
                                </ListItem>
                            )
                        }
                    </List>
                </Popover>
            </div>
        );
    }
}

export default ShopCart;
