import React from 'react';

const Todo = (props) => {
    console.log(`this is props inside todo`, {props})


    return (
            <>
              <p>{props.item.task}</p>
            </>
    )
  
}

export default Todo;