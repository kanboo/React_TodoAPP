import React, { Component } from 'react';


export default class TodoHeader extends Component {
  render() {
    return (
      <div>
        <h1>我的待辦清單</h1>
        <span>哈囉，Jason：你有 99 項未完成待辦事項</span>
      </div>
    );
  }
}