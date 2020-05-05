import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();     
        
        this.state = {
            todo: ''
        }
    }

    //On input change
    onInputChange = event => {       
       this.setState({[event.target.name] : event.target.value })
    }

    submitTodo = event => {
        event.preventDefault();
        this.setState({todo: ''})
        console.log(`THIS IS this.props -->`, this.props) // they are not passed in CONSTRUCTOR I'm not sure how this works
        this.props.addTodoItem(event, this.state.todo)
    }
    
    render () {
        return (
            <form onSubmit={this.submitTodo}>                
                <input
                    name="todo"
                    type="text"
                    placeholder="Type new todo"
                    value={this.state.todo}
                    onChange={this.onInputChange}
                />
                <button>Add New to do</button>
            </form>
        )
    }
}

export default TodoForm;