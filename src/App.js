import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./App.css";


const toDoTasks = [
  {
    task: '',
    id: Date.now(),
    completed: false
  }  
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super();
  this.state = { 
    toDoTasks 
  }   
}


//Create add to do item that is being passed down to the form
addTodoItem = (event, item) => {
  event.preventDefault();  
  const newTodoItem = {
    task: item,
    id: Date.now(),
    completed: false
  }
  this.setState({
    toDoTasks: [...this.state.toDoTasks, newTodoItem]
  })  
}

//Create toggle

toggleTodo = (itemId) => {

  this.setState({
    toDoTasks: this.state.toDoTasks.map((item) => {
      console.log(`item-->`, item);
      if(itemId === item.id){
        return {
          ...item, 
          completed: !item.completed
        }
      }
      return item;
    })
  })
}

//Clear completed
clearCompleted = e => {
  e.preventDefault();

  this.setState({
    toDoTasks: this.state.toDoTasks.filter(item => !item.completed)
  })
}


  render() {
    return (
      <div className="App">
        <h2>To do, or not to do, that is the question:</h2>  
          
          
          <TodoForm 
          addTodoItem={this.addTodoItem}
          /> 


          <TodoList
           toDoTasks={this.state.toDoTasks}
           toggleTodo={this.toggleTodo}
           clearCompleted={this.clearCompleted}
           />         

      </div>
    );
  }
}

export default App;
