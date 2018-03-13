import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Separator from './separator';
import Task from './task';

export default class TasksList extends Component {

  renderListHeader = () => <div className="task-list__header">{this.props.listOptions.title}</div>;

  renderTasks = () => this.props.tasks.map(task => <Task task={task} key={shortid.generate()} />);

  render() {
    return (
      <div className="task-list">
        {this.renderListHeader()}
        <Separator />
        <div className="task-list__body">
          {this.renderTasks()}
        </div>
      </div>
    );
  }
}

TasksList.propTypes = {
  listOptions: PropTypes.object,
  tasks: PropTypes.array
};
