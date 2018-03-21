import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import actions from '../../actions/board_actions';

import Column from '../../components/molecules/column/Column';

import BoundForm from '../../components/organisms/boundForm/BoundForm';
import BoundFormModal from '../../components/organisms/boundFormModal/BoundFormModal';
import Card from '../../components/molecules/card/Card';
import Template from '../../templates/innerContent/InnerContent';

class Board extends Component {
  componentWillMount = () => {
    actions.getBoardInfo(this.props.params.boardId);
  };

  onNewTaskSubmit = (listId, task) => actions.addNewTask({
    boardId: this.props.boardInfo.id,
    listId,
    ...task
  });

  onNewListSubmit = list => actions.addNewList({
    boardId: this.props.boardInfo.id,
    ...list
  });

  onModifyBoard = (board) => {
    actions.editBoard({
      ...board,
      id: this.props.boardInfo.id
    });
  };

  renderBoardHeader = () => {
    const fields = {
      title: {
        name: 'title',
        value: this.props.boardInfo.title,
        placeholder: 'Type board title here',
        mandatory: true
      }
    };

    return (
      <React.Fragment>
        <div className="board-page__board-title">
          {this.props.boardInfo.title}
        </div>
        <BoundFormModal
          fields={fields}
          heading="Edit board"
          iconName="pencil"
          onSubmit={this.onModifyBoard} />
      </React.Fragment>
    );
  };

  renderCards = tasks => tasks.map(({ summary, details }) => (
    <Card key={shortid.generate()} heading={summary} content={details} />
  ));

  renderColums = () => {
    const taskFields = {
      summary: {
        name: 'summary',
        placeholder: 'Type task summary here',
        mandatory: true
      },
      details: {
        name: 'details',
        placeholder: 'Type task details here'
      }
    };

    const listFields = {
      title: {
        name: 'title',
        placeholder: 'Type list title here',
        mandatory: true
      }
    };

    return (
      <React.Fragment>
        {this.props.lists.map(({ tasks, title, id }) => (
          <Column
            heading={title}
            key={id}>
            <BoundForm
              fields={taskFields}
              togglerText="Add Task"
              onSubmit={data => this.onNewTaskSubmit(id, data)} />
            {this.renderCards(tasks)}
          </Column>
        ))}
        <BoundForm
          fields={listFields}
          togglerText="Add List"
          onSubmit={data => this.onNewListSubmit(data)} />
      </React.Fragment>
    );
  };

  render() {
    const boardContent = this.props.boardInfo && (
      <Template.InnerContent>
        <Template.Header>
          {this.renderBoardHeader()}
        </Template.Header>
        <Template.MainSection>
          {this.renderColums()}
        </Template.MainSection>
      </Template.InnerContent>
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

