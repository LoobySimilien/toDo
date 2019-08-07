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
    if (this.state.currentTodo.length > 0 ){
      this.setState({
        //use filter function to delete the id/index for that item
        // SYNTAX:  array.filter(function(currentValue, index, arr), thisValue)
              todos: this.state.todos.filter((todos, index) => index !== event)
            //todos: [...this.state.todos, this.state.currentTodo.splice(index, 1) ]
            }
          );
        };
  }

  render() {
    console.log("I am logging the array of todos", this.state.todos)
    return (
      <div >
        <form onSubmit={this.addItem}>
          <label htmlFor="taskname">Task Name:</label>
          <input onChange={this.handleChange} name="taskName" type="text" placeholder="  Add todo here!"/>
          <button type="submit"> Type In Your Task </button>
        </form>
        <ul> 
                {this.state.todos.map((todos, index) => {
                return (
                    <li key={index}> 
                         {todos} 
                            < button id={index} onClick={ (event) => this.deleteItem (index, event)} type ="text"> 
                               Delete 
                            </button> 
                    </li>
                )})}
                
          </ul>
        </div>
    )
  }
}

export default TodoList;
