import React from 'react';

import Todo from './Todo';


const TodoList = (props) => {
      
 console.log("TodoList Props", props)

    return( 
            <div>
                {props.item.map(todo => {
                    return(
                        <div>
                  <Todo task={todo.task} id={todo.id} completed={todo.completed} toggleItem={props.toggleItem} />
                    </div>
                    )
                })}
                <button onClick={props.clearCompleted}>Clear Completed Items</button>
            </div>
)
}

export default TodoList;