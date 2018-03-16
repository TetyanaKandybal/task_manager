import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';

import Button from '../components/button';
import TextInput from '../components/text_input';
import Separator from '../components/separator';

import actions from '../actions/tasks_actions';

export default class AddTaskContainer extends Component {
  state = {
    isAddingPanelOpen: false,
    summary: {
      isValid: false
    }
  };

  onTaskFieldChange = ({ name, value, isValid }) => this.setState({ [name]: { value: value, isValid: isValid } });

  onAddNewTask = () => actions.addNewTask({
    boardId: this.props.boardId,
    listId: this.props.listId,
    summary: this.state.summary.value,
    details: this.state.details.value
  });

  onAddingPanelToggle = () => this.setState({isAddingPanelOpen: !this.state.isAddingPanelOpen});

  renderAddingPanel = () => (
    <div className="add-task-panel">
      <TextInput
        className="add-task-panel__field"
        type="text"
        name="summary"
        placeholder="Type task summary here"
        onChange={this.onTaskFieldChange} />
      <TextInput
        className="add-task-panel__field"
        type="text"
        name="details"
        placeholder="Type task details here"
        onChange={this.onTaskFieldChange} />
        <div className="add-task-panel__footer">
          <Button
            className="add-task-panel__submit-btn"
            disabled={!this.state.summary.isValid}
            onClick={this.onAddNewTask}>
            Add Task
          </Button>
          <Button
            className="framed-btn"
            onClick={this.onAddingPanelToggle}>
            <Icon
              name="times" />
          </Button>
        </div>
    </div>
  );

  render() {
    return (
      <div className="add-task-form">
        <Button
          className="add-task-form__toggler"
          onClick={() => this.onAddingPanelToggle()}>
            Add Task
        </Button>
        <Separator />
        { this.state.isAddingPanelOpen && this.renderAddingPanel() }
      </div>
    );
  }
}

AddTaskContainer.propTypes = {
  boardId: PropTypes.string,
  listId: PropTypes.string
};
