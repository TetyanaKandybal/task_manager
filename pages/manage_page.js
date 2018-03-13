import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import actions from '../actions/manage_actions';

import BoardPreview from '../components/board_preview';

class Manage extends Component {
  componentWillMount = () => {
    actions.getManagedBoardsData();
  };

  _renderBoards = () =>
    this.props.boards.map((board, id) => this._renderBoard(board, id));

  _renderBoard = board =>
    (
      <BoardPreview board={board} key={shortid.generate()} />
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
    boards: state.manageReducers.boards
  };
};

Manage.propTypes = {
  boards: PropTypes.array
};

export default connect(mapStateToProps)(Manage);
