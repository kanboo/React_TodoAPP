import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: props.value || '' };

  }


  // 設定 default 值(方法2)
  static defaultProps = {
    value: '',
    placeholder: '新增待辦事項',
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleKeyDown = (e) => {
    const {
      onKeyDown,
      onSubmitEditing
    } = this.props;
    const { value } = this.state;
    switch (e.keyCode) {
      case 13:
        if (value.trim()) {
          onSubmitEditing && onSubmitEditing(value);
        }
        this.setState({ value: '' });
        break;
    }
    onKeyDown && onKeyDown(e);
  };


  render() {

    // 從 this.props 中，取得父元件傳遞的參數
    // const { placeholder } = this.props;
    // return <input type="text" placeholder={placeholder} />;

    return (
      <input
        {...this.props}
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

InputField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onKeyDown: PropTypes.string,
};
