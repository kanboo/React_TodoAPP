import React, { Component } from 'react';
import { prototype } from 'events';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.js';


export default class TodoList extends Component {

  render() {

    const {
      todos,
      onUpdateTodo,
      onToggleTodo,
      onDeleteTodo,
    } = this.props;

    const todoElements = todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onUpdate={content => onUpdateTodo(todo.id, content)}
          onToggle={completed => onToggleTodo(todo.id, completed)}
          onDelete={() => onDeleteTodo(todo.id)} />
      </li>
      ));

    return <ul>{todoElements}</ul>;
  }
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
