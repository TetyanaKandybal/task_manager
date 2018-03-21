import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ColumnHeader extends Component {
  render() {
    return (
      <div className="column__header">{this.props.heading}</div>
    );
  }
}

ColumnHeader.propTypes = {
  heading: PropTypes.string
};
