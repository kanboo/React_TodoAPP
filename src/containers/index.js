import React, { Component } from 'react';
import TodoHeader from './TodoApp/TodoHearder.js';
import InputField from './TodoApp/InputField.js';
import TodoList from './TodoApp/TodoList.js';


export default class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
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
      }]
    };
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

    // 使用 Spread Operator 賦值
    const headerProps = {
      title: "Kanboo待辦清單",
      username: "Kanboo",
      todoCount: todos.filter(todo => !todo.completed).length,
    };

    return (
      <div>
        <TodoHeader {...headerProps} />
        <InputField
          placeholder="Add Item"
          // onSubmitEditing={this.updateTodosBy(this._createTodo)}
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
