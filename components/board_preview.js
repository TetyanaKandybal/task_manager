import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';
import Icon from 'react-fontawesome';
import DeleteBoard from '../containers/delete_board_container';

export default class BoardPreview extends Component {
  render() {
    return (
      <div className="board-preview">
        <div className="board-preview__content">
          <div>
            <Icon
              className="board-preview__icon"
              name="trello" />
            <Link
              className="board-preview__title"
              to={`/boards/${this.props.board.id}`}>
              {this.props.board.title}
            </Link>
          </div>
          <DeleteBoard
            controlClass="board-preview__delete-board-btn"
            board={this.props.board} />
        </div>
      </div>
    );
  }
}

BoardPreview.propTypes = {
  board: PropTypes.object
};
