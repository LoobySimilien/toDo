import React, {Component} from 'react';
import { tsPropertySignature } from '@babel/types';
import { format } from 'util';

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
    if (this.state.currentTodo.length > 0 ){
      this.setState({
        todos: [...this.state.todos, this.state.currentTodo],
        //use filter function to delete the id/index for that item - change the line above
      })
  }
}


  render() {
    console.log("I am logging the array of todos", this.state.todos)
    return (
      <div >
        <form onSubmit={this.addItem}>
          <label htmlFor="taskname">Task Name:</label>
          <input onChange={this.handleChange} name="taskName" type="text" placeholder="  Add todo here!"/>
          <button type="submit"> Add Task </button>
        </form>
        <ul> 
          {this.state.todos.length} > 0
          {this.state.todos.map(todos => {
          return (
                  <li key={index}>
                      {todos} 
                      <button id={index} onClick={(event) => deleteItem(index, event)} type="text"> 
                        Delete 
                      </button> } 
                  </li>
                 )}
          ) : defaultStatus }
          //The above conditional (ternary operator) format...  (age >= 21) ? "Beer" : "Juice";
          // The return state will be a base??? for clearing the list?
          //The above section can be destructured to "TaskList" to wrap with unlisted item tags
        </ul>

      </div>
    )
  
  }
}

export default TodoList;
