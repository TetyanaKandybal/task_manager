import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Separator from './separator';
import Task from './task';
import AddNewTask from '../containers/add_task_container';

export default class TasksList extends Component {
  renderListHeader = () => <div className="task-list__header">{this.props.listOptions.title}</div>;

  renderTasks = () => this.props.tasks.map(task => <Task task={task} key={shortid.generate()} />);

  render() {
    return (
      <div className="task-list">
        {this.renderListHeader()}
        <Separator />
        <div className="task-list__body">
          <AddNewTask
            boardId={this.props.boardId}
            listId={this.props.listOptions.id} />
          {this.renderTasks()}
        </div>
      </div>
    );
  }
}

TasksList.propTypes = {
  listOptions: PropTypes.object,
  tasks: PropTypes.array,
  boardId: PropTypes.string
};
