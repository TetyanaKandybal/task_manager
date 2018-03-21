import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardHeader from './CardHeader';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <CardHeader>{this.props.heading}</CardHeader>
        <div className="card__content">{this.props.content}</div>
      </div>
    );
  }
}

Card.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string
};
