import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.js';


export default class TodoList extends Component {
  // 設定 default 值(方法2)
  static defaultProps = {
    todos: [],
  }

  render() {

    const {todos} = this.props;

    const todoElements = todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todos.completed} />
      </li>
      ));

      // console.log(todoElements);

    return <ul>{todoElements}</ul>;

    // return (
    //   <ul>
    //     <li>
    //       <TodoItem
    //         title="Item1"
    //         completed={false} />
    //     </li>
    //     <li>
    //       <TodoItem
    //         title="Item2"
    //         completed={false} />
    //     </li>
    //     <li>
    //       <TodoItem
    //         title="Item2" />
    //     </li>
    //   </ul>
    // );
  }
}


TodoList.propTypes = {
  todos: PropTypes.array,
};
