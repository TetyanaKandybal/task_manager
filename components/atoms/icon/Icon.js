import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactIcon from 'react-fontawesome';

export default class Icon extends Component {
  render() {
    return (
      <ReactIcon
        className={`icon ${this.props.className}`}
        name={this.props.name}
        {...this.props} />
    );
  }
}

Icon.defaultProps = {
  className: ''
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};
