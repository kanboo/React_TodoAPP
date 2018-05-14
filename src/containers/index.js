import React, { Component } from 'react';
import TodoHeader from './TodoApp/TodoHearder.js';
import InputField from './TodoApp/InputField.js';
import TodoList from './TodoApp/TodoList.js';


export default class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    // 使用 ajax 請求 API，並將取回的待辦資料更新元件 state（見下一步）
    fetch('http://jsonplaceholder.typicode.com/todos') // 1. 使用 fetch 回傳的是 promise 物件
    .then(response => response.json()) // 2. 解析 response 資料，將它轉成 js 物件
    .then(todos => this.setState({ todos })); // 3. 更新元件 state
  }

  // 更新todos
  updateTodosBy(updateFn) {
    return (...args) => {
      this.setState({
        todos: updateFn(this.state.todos, ...args)
      });
    };
  }

  // 新增todos項目
  _createTodo = (todos, title) => {
    todos.push({
      id: todos[todos.length - 1].id + 1,
      title,
      completed: false
    });
    return todos;
  }

  // 更新todos項目
  _updateTodo = (todos, id, title) => {
    const target = todos.find(todo => todo.id === id);
    if (target) target.title = title;
    return todos;
  }

  // 切換編輯模式todos項目
  _toggleTodo = (todos, id, completed) => {
    const target = todos.find(todo => todo.id === id);
    if (target) target.completed = completed;
    return todos;
  }

  // 刪除todos項目
  _deleteTodo = (ary, id) => {
    const idx = ary.findIndex(todo => todo.id === id);
    if (idx !== -1) ary.splice(idx, 1);
    return ary;
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoHeader
          title="Kanboo待辦清單"
          username="Kanboo"
          todoCount={todos.filter(todo => !todo.completed).length}
        />

        <InputField
          placeholder="Add Item"
          onSubmitEditing={this.updateTodosBy(this._createTodo)}
        />

        <TodoList
          todos={todos}
          onUpdateTodo={this.updateTodosBy(this._updateTodo)}
          onToggleTodo={this.updateTodosBy(this._toggleTodo)}
          onDeleteTodo={this.updateTodosBy(this._deleteTodo)}
        />
      </div>
    );
  }
}
