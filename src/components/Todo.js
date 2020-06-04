import React from 'react';


const Todo = (props) => {
      
 console.log("Todo Props", props)

    return(  
         <div
         className={`item${props.completed ? '-completed' : ''}`}
         onClick={(() => props.toggleItem(props.id))}
         >
             <p>{props.task}</p>
        </div>
)
}

export default Todo;