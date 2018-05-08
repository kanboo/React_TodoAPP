import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        <li>
          <TodoItem
            title="Item1"
            completed={false} />
        </li>
        <li>
          <TodoItem
            title="Item2"
            completed={false} />
        </li>
        <li>
          <TodoItem
            title="Item2" />
        </li>
      </ul>
    );
  }
}
