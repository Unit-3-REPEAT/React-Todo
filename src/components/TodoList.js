// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

//   console.log(`props inside TodoList`, {props})
 
    return (
        <div>        
        <h3>Add another unwanted task here: </h3>
        {props.toDoTasks.map((item) => {
            console.log(`item -->`, item)
            return (<Todo key={item.id} item={item}/>)
        })}
        

        
      </div>
     
    );
  }

export default TodoList;