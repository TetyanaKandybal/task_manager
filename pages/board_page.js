import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import PropTypes from 'prop-types';

import actions from '../actions/board_actions';

import Button from '../components/button';

class Board extends Component {
  componentWillMount = () => {
    actions.getBoardInfo(this.props.params.boardId);
  };

  _renderBoardHeader = () => (
    <div className="board-page__header">
      <div className="board-page__board-title">
        {this.props.boardInfo.title}
      </div>
      <Button
        className="edit-board-btn">
        <Icon
          name="pencil" />
      </Button>
    </div>
  );

  _renderTasksSection = () => (
    <div className="board-page__tasks"></div>
  );

  render() {
    const boardContent = this.props.boardInfo && (
      <div className="board-page__inner">
        {this._renderBoardHeader()}
        {this._renderTasksSection()}
      </div>
    );

    return (
      <div className="board-page">
        { boardContent}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boardInfo: state.boardReducers.boardFull
  };
};

Board.propTypes = {
  params: PropTypes.object,
  boardInfo: PropTypes.object
};

export default connect(mapStateToProps)(Board);

