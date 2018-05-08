import React, { Component } from 'react';
import TodoHeader from './TodoApp/TodoHearder.js';
import InputField from './TodoApp/InputField.js';
import TodoList from './TodoApp/TodoList.js';


export default class Main extends Component {
  render() {
    return (
      <div>
        <TodoHeader />
        <InputField />
        <TodoList />
      </div>
    );
  }
}