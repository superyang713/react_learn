import React, {Component} from "react";
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedToDos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });
      return {
        todos: updatedToDos
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(
      item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>);

    return(
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default App;
