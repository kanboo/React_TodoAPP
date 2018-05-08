import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);

    // 1. 使用 class constructor (類別建構子) 初始元件狀態
    this.state = { editable: false };
  }

  // 設定 default 值(方法2)
  static defaultProps = {
    title: 'Item1',
    completed: false,
  }

  render() {
    // 從 this.props 中，取得父元件傳遞的參數
    const { title, completed } = this.props;
    return (
      <div>
        <input type="checkbox" checked={completed} />
        <span>{title}</span>
        <button>x</button>
      </div>
    );
  }
}

// 設定 default 值(方法1)
// TodoItem.defaultProps = {
//   title: 'Item1',
//   completed: false,
// };


TodoItem.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool
};

