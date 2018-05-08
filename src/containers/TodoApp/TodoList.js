import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        <li>
          <TodoItem />
        </li>
        <li>
          <TodoItem />
        </li>
        <li>
          <TodoItem />
        </li>
      </ul>
    );
  }
}