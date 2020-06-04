import React from 'react';

import Typography from '@material-ui/core/Typography'


const Todo = (props) => {
      
 console.log("Todo Props", props)

    return(  
         <div style={{padding: "3%"}}
         className={`item${props.completed ? '-completed' : ''}`}
         onClick={(() => props.toggleItem(props.id))}
         >
             <Typography>{props.task}</Typography>
        </div>
)
}

export default Todo;