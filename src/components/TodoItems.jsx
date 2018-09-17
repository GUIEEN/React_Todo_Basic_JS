import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTask(item) {
    return (
      <li key={item.key} onClick={() => this.delete(item.key)}>
        {item.text}
      </li>
    );
  }
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTask);
    return (
      <ul className="theList">
        <FlipMove duration={150} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
