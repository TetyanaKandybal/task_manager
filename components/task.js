import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  render() {
    return (
      <div className="task">
        <div className="task__summary">{this.props.task.summary}</div>
        <div className="task__details">{this.props.task.details}</div>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object,
};
