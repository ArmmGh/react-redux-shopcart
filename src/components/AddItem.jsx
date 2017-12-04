import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = [{
            newItem: {
                name: null,
                price: 0,
            }
        }]
        this.handleChange = this.handleChange.bind(this);
        this.AddItem = this.AddItem.bind();
    }
    handleChange(e) {
        this.setState({
            newItem: {
                name: e.target.value
            }
        })
    }
    
    AddItem(newItem) {

    }

    render() {
        return (
            <div>
                <TextField
                    type="text"
                    id="uncontrolled"
                    label="Product Name"
                    onChange={this.handleChange}
                />
                <Button raised color="primary" onClick={this.AddItem(this.state.newItem)}>
                    Add
                </Button>
            </div>
        )
    }
}

export default AddItem;