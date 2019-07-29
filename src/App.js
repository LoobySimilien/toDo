import React, {Component} from 'react';

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
        todos: [],
        currentTodo: "",
    }
  }


  handleChange = event => { 
    console.log(event.target.value);
    // next line catches the event.target.value and places it on the currentTodo in state
    this.setState ({
      currentTodo: event.target.value,
    })
  }
  
  addItem = event => {
    //// stop propagation
    event.preventDefault();
    // take currentTodo on state and then add it to todos array to build todos list
    if (this.state.currentTodo !==""){
      this.setState({
        todos: [...this.state.todos, this.state.currentTodo],
      })
    }
    console.log("addItem Method fired");
  }

  deleteItem = event => {
    //// enter code here
  }


  render() {
    console.log("I am logging the array of todos", this.state.todos)
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskname">Task Name:</label>
          <input onChange={this.handleChange} name="taskName" type="text" placeholder="  Add todo here!"/>
          <button type="submit"> Add Task </button>
        </form>
        <ul> TaskList  </ul>

      </div>
    )
  }

}



export default TodoList;
