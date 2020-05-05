// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';
import "../App.css";

// import todo here

const TodoList = props => {

    // console.log(`this is props inside TodoList`, props)
    return(
        <>
        <div className="center-mid">This is TodoList:
            {props.toDoTasks.map(item => 
                // {console.log(`===>`,item.id)}
                //pass down the props to the ToDo component
                (<ToDo key={item.id} item={item} toggleTodo={props.toggleTodo}/>)                
            )} 
            <button className="clear-btn button" onClick={props.clearCompleted}>Clear</button>   
        </div>                   
         </>
    )
}

export default TodoList;
