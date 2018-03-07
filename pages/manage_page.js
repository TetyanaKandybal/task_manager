import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../actions/manage_actions';

class Manage extends Component {
  componentWillMount = () => {
    actions.getManagedBoardsData();
  };

  _renderBoards = () =>
    this.props.boards.map((board, id) => this._renderBoard(board, id));

  _renderBoard = (board, id) =>
    (
      <div key={id} className="board">
        <div className="board__title">{board.title}</div>
      </div>
    );

  render() {
    return (
      <div className="manage-page">
        <div className="boards-section">{this.props.boards && this._renderBoards()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boards
  };
};

Manage.propTypes = {
  boards: PropTypes.array
};

export default connect(mapStateToProps)(Manage);
