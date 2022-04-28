import React from 'react'

export default class Todo extends React.Component {
  handleCLick = () => {
    this.props.handleToggle(this.props.todo.id);
  }
  render() {
    return (
      <div>
        <li onClick={this.handleCLick}>{this.props.todo.name}{this.props.todo.completed? <span>-completed</span> : <span></span>}</li>
      </div>
    )
  }
}
