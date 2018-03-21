import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardHeader extends Component {
  render() {
    return (
      <div className="card__header">{this.props.children}</div>
    );
  }
}

CardHeader.propTypes = {
  children: PropTypes.any
};
