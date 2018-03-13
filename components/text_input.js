import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default class Input extends Component {
  state = {
    isValid: true
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({ isValid: /\S/.test(value) }, () => this.props.onChange({
      value: value, isValid: this.state.isValid
    }));
  };

  render() {
    const classes = classnames({
      'base-input': true,
      'base-input--invalid': !this.state.isValid
    }, this.props.className);
    return (
      <input
        type="text"
        className={classes}
        defaultValue={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.onChange} />
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
