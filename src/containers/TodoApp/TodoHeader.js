import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoHeader extends Component {
  // 設定 default 值(方法2)
  static defaultProps = {
    // title: '我的待辦清單',
    username: '訪客',
    todoCount: 0,
  }

  render() {

    const {title, username, todoCount} = this.props;

    return (
      <div className="TodoHeader">
        <h1><i className="fa fa-address-book-o" aria-hidden="true" /> {title}</h1>
        <span>哈囉，{username}：你有 {todoCount} 項未完成待辦事項</span>
      </div>
    );
  }
}

// 設定 default 值(方法1)
// TodoHeader.defaultProps = {
//     title: '我的待辦清單',
//     username: '訪客',
//     todoCount: 0,
// };

TodoHeader.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string,
  todoCount: PropTypes.number,
};

// .isRequired：代表一直要傳進來的值，所以defaultProps 就不必設定預設值。
