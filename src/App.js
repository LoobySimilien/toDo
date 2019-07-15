import React, {Component} from 'react';

Class TodoList extends Component {

constructor(){
  super();
  this.state = {
      todos: [],
      currentTodo: "",
  }
}
}

????????
handleChange = event => {
  console.log(event.target.value);
}

addItem = event => {
  //// stop propagation
event.prevent.Default???
  console.log("addItem method ");
}

render() {
return (
    <div className="container">
    <form onSubmit={this.addItem}>
      <label htmlFor="taskname">Task Name:</label>
      <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add todo here!"/>
      <button type="submit"> Add Task </button>
    </form>
    </div>
  );
}

export default TodoList;
