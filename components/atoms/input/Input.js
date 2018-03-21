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
      value: value, name: this.props.name, isValid: this.state.isValid
    }));
  };

  render() {
    const classes = classnames({
      'base-input': true,
      'base-input--invalid': !this.state.isValid
    }, this.props.className);
    return (
      <input
        className={classes}
        type={this.props.type}
        name={this.props.name}
        defaultValue={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.onChange} />
    );
  }
}

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
};
