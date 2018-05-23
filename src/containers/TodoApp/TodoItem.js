import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField.js';


export default class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);

    // 使用 class constructor (類別建構子) 初始元件狀態
    this.state = { editable: false };
  }


  // 切換 閱讀/編輯 模式
  toggleMode = () => {
    this.setState({ editable: !this.state.editable });
    // console.log(this);
  }

  // 閱讀模式
  renderViewMode() {
    // 從 this.props 中，取得父元件傳遞的參數
    const {
      title,
      completed,
      onToggle,
      onDelete
    } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(!completed)}
        />
        <span onClick={this.toggleMode}>{title}</span>
        <button onClick={() => onDelete()}><i className="fa fa-trash" aria-hidden="true" /></button>
      </div>
    );
  }

  // 編輯模式
  renderEditMode() {
    const { title, onUpdate } = this.props;
    return (
      <InputField
        autoFocus // autoFocus 讓使用者切換到編輯模式後，可以立即編打
        placeholder="編輯待辦事項"
        value={title}
        onBlur={this.toggleMode}
        onKeyDown={(e) => { // 當使用者按下 ESC，則切換為「瀏覽模式」
          if (e.keyCode === 27) {
            e.preventDefault();
            this.toggleMode();
          }
        }}
        onSubmitEditing={(content) => {
          onUpdate(content);
          this.toggleMode();
        }}
      />
    );
  }

  render() {
    return this.state.editable ?
      this.renderEditMode() :
      this.renderViewMode();
  }
}


TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

