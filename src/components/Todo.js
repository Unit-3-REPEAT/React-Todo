import React from 'react';
import "./Todo.css"



const Todo = props => {

    // console.log(`this is props inside Todo.js`, props)
    return(
        <div
        //className = 'item' -- if completed === true className ='item completed' otherwise return an empty string
        className={`item${props.item.completed ? ' completed ': ''}`}
        onClick={() => props.toggleTodo(props.item.id)}        
        >

            {/* We only want to display task here to be seen */}
            <p>{props.item.task}</p>
            
        </div>
    )
}

export default Todo;