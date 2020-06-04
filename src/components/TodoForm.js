// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';


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
            <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                name="item"
                value={this.state.item}
                onChange={this.inputChange}
                />
                <button>Add Todo Item</button>
            </form>
        )
    }
}

export default TodoForm;