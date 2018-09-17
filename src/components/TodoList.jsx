import React, { Component } from 'react';
import AutoFocusTextInput from './Refs/AutoFocusTextInput';
import TodoItems from './TodoItems';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    if (this._inputElement.value !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        this._inputElement.value = '';
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
  }

  deleteItem(key) {
    console.log(this.state);
    const filterItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filterItems
    });
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <AutoFocusTextInput />
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
