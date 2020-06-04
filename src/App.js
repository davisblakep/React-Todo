import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const item = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      item: item
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      item: [...this.state.item, newItem]
    })
  }

  toggleItem = itemID => {
    console.log("toggleItem itemID", itemID);
    this.setState({
      item: this.state.item.map(item => {
        if (itemID === item.id) {
          return {
            ...item, completed: !item.completed
          }
        }
        return item;
      }
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList item={this.state.item} toggleItem={this.toggleItem}  />
      </div>
    );
  }
}

export default App;
