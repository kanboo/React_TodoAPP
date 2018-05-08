import React, { Component } from 'react';
import TodoHeader from './TodoApp/TodoHearder.js';
import InputField from './TodoApp/InputField.js';
import TodoList from './TodoApp/TodoList.js';

const todos = [
  {
    id: 1,
    title: '去買飯 1',
    completed: false
  },
  {
    id: 2,
    title: '去買飯 2',
    completed: true
  },
  {
    id: 3,
    title: '去買飯 3',
    completed: false
  },
  {
    id: 4,
    title: '去買飯 4',
    completed: false
  },
];

export default class Main extends Component {
  render() {

    // 使用 Spread Operator 賦值
    const headerProps = {
      title: "Kanboo待辦清單",
      username: "Kanboo",
      todoCount: todos.filter(todo => !todo.completed).length,
    };

    return (
      <div>
        <TodoHeader {...headerProps} />
        <InputField placeholder="Add Item" />
        <TodoList todos={todos} />
      </div>
    );
  }
}
