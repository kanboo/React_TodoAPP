import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {
  // 設定 default 值(方法2)
  static defaultProps = {
    placeholder: '新增待辦事項',
  }

  render() {

    // 從 this.props 中，取得父元件傳遞的參數
    const { placeholder } = this.props;

    return <input type="text" placeholder={placeholder} />;
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string,
};
