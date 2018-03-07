import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

export default class Button extends Component {
  render() {
    const classes = classnames({ 'base-btn': true }, this.props.className);
    return (
      <button
        className={classes}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func
};
