import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import PropTypes from 'prop-types';
import shortid from  'shortid';

import actions from '../actions/board_actions';

import Button from '../components/button';
import TasksList from '../components/tasks_list';

import EditBoard from '../containers/modify_board_container';

class Board extends Component {
  componentWillMount = () => {
    actions.getBoardInfo(this.props.params.boardId);
  };

  _renderBoardHeader = () => {
    const control = (
      <Button
        className="edit-board-btn">
        <Icon
          name="pencil" />
      </Button>
    );

    return (
      <div className="board-page__header">
        <div className="board-page__board-title">
          {this.props.boardInfo.title}
        </div>
        <EditBoard
          heading="Edit board"
          control={control}
          value={this.props.boardInfo.title}
          actionOptions={{ id: this.props.params.boardId }}
          action={actions.editBoard} />
      </div>
    );
  };

  _renderTasksSection = () => (
    <div className="board-page__tasks">
      {this.props.lists.map(({ tasks, ...list }) => (
        <TasksList
          key={shortid.generate()}
          listOptions={list}
          tasks={tasks} />)
      )}
    </div>
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
        { boardContent }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boardInfo: state.boardReducers.boardFull,
    lists: state.boardReducers.lists
  };
};

Board.propTypes = {
  params: PropTypes.object,
  boardInfo: PropTypes.object,
  lists: PropTypes.array
};

export default connect(mapStateToProps)(Board);

