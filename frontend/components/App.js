import React from 'react'
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos:[
        {
          name: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Study Modules',
          id: 1528817084359,
          completed: true
        }
      ]
    }
  }

  handleAdd = (name) => {
    //set state, change the todo list, make a copy of todos, add a new todo item

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos:[...this.state.todos, newTodo]
    });
  }
  handleClear =()=>{
    //set state, filter/loop through completed tasks and clear them
    this.setState({
      ...this.state, // spreadstate
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    })
  }

  handleToggle = (idClicked) => {
    //set state, change to do, find to do that was clicked, flip the value of completed, keep all other todos same
    
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === idClicked) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1>Things I need done!</h1>
        <TodoList todos={todos} handleToggle={this.handleToggle}/>
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Delete</button>
      </div>
    )
  }
}
