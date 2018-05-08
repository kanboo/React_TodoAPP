import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoHeader extends Component {
  // 設定 default 值(方法2)
  static defaultProps = {
    title: '我的待辦清單',
    username: '無名氏',
    todoCount: 0,
  }

  render() {

    const {title, username, todoCount} = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <span>哈囉，{username}：你有 {todoCount} 項未完成待辦事項</span>
      </div>
    );
  }
}


TodoHeader.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  todoCount: PropTypes.number,
};
