// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'



class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ""
            
        };
    };


    inputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
        }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ item: "" });
        this.props.addItem(e, this.state.item)
    }

    
   

    render() {
        console.log("TodoForm props", this.props)
        return(
            <Card style={{minWidth: 200, maxWidth: 200, marginTop: "4%", marginLeft: "2%", padding: "1%", backgroundColor: "white", color: "black"}}>
            <form onSubmit={this.onSubmit} style={{color: "white"}}>
                <Input 
                style={{color: 'black', borderColor: "red"}}
                autoFocus
                placeHolder="Type Item Here"
                color="primary"
                type="text"
                name="item"
                value={this.state.item}
                onChange={this.inputChange}
                />
                <Button type="submit" variant="outlined" style={{color: "black"}}>Add Todo Item</Button>
            </form>
            </Card>
        )
    }
}

export default TodoForm;