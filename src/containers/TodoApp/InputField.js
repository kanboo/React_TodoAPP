import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: props.value || '' };
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
          onSubmitEditing(value);
        }
        this.setState({ value: '' });
        break;
      default:
        break;
    }
    onKeyDown(e);
  };


  render() {

    // 從 this.props 中，取得父元件傳遞的參數
    // const { placeholder } = this.props;
    // return <input type="text" placeholder={placeholder} />;
    // const { onSubmitEditing } = this.props;

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

InputField.defaultProps = {
  value: '',
  placeholder: '新增待辦事項',
  onKeyDown: () => {},
  onSubmitEditing: () => {},
};

InputField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onKeyDown: PropTypes.func,
  onSubmitEditing: PropTypes.func,
};
