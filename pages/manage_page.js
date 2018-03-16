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

  renderBoards = () =>
    this.props.boards.map(board => this.renderBoard(board));

  renderBoard = board => (<BoardPreview board={board} key={shortid.generate()} />);

  render() {
    return (
      <div className="manage-page">
        <div className="boards-section">{this.props.boards && this.renderBoards()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ boards: state.manageReducers.boards });

Manage.propTypes = {
  boards: PropTypes.array
};

export default connect(mapStateToProps)(Manage);
