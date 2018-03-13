import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';
import Icon from 'react-fontawesome';

export default class BoardPreview extends Component {
  render() {
    return (
      <div className="board-preview">
        <Icon
          className="board-preview__icon"
          name="clipboard" />
        <Link
          className="board-preview__title"
          to={`/boards/${this.props.board.id}`}>
          {this.props.board.title}
        </Link>
      </div>
    );
  }
}

BoardPreview.propTypes = {
  board: PropTypes.object
};
