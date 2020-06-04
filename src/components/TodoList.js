import React from 'react';

import Todo from './Todo';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'


const TodoList = (props) => {
      
 console.log("TodoList Props", props)

    return( 
            <div>
                <Card style={{minWidth: 200, maxWidth: 200, height: "40%", marginTop: "4%", marginLeft: "2%", padding: "1%", backgroundColor: "white", color: "black"}}>
                    <CardActionArea style={{height: ""}}>
                {props.item.map(todo => {
                    return(
                        <div>
                  <Todo task={todo.task} id={todo.id} completed={todo.completed} toggleItem={props.toggleItem} />
                    </div>
                    )
                })}
                </CardActionArea>
                <CardActions>
                <Button onClick={props.clearCompleted} variant="outlined" style={{color: "black", marginTop: "20%"}}>Clear Completed Items</Button>
                </CardActions>
                </Card>
            </div>
)
}

export default TodoList;