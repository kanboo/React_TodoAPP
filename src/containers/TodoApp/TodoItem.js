import React, { Component } from 'react';


export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" />
        <span>Item 1222</span>
        <button>x</button>
      </div>
    );
  }
}