// Ref: https://github.com/wonism/TIL/blob/master/front-end/reactjs/chapter/06.refs.md
import React, { Component } from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  handleOnChange(e) {
    console.log(this.textInput.current.value);
  }

  componentDidMount() {
    this.refs.myInput.value = 'Hi, I used ref to do this.';
    this._input.value = 'This is ref using callback';
  }

  render() {
    // tell React that we want the associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div style={{ marginBottom: 20 }}>
        <div>
          <h3>Example of Refs</h3>
          <div>
            <input type="text" ref="myInput" style={{ width: 200 }} />
          </div>
          <div>
            <input ref={ref => (this._input = ref)} style={{ width: 200 }} />
          </div>
        </div>
        <div>
          <h3>Example of Ref focusing</h3>
          <input
            type="text"
            ref={this.textInput}
            onChange={e => this.handleOnChange(e)}
            placeholder="Changes of value is now watched by `this.textInput.urrent.value`. Check out console."
            style={{ width: 500 }}
          />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      </div>
    );
  }
}

export default CustomTextInput;
