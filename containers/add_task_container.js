import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/button';
import Form from '../components/form';
import Separator from '../components/separator';

import actions from '../actions/tasks_actions';

export default class AddTaskContainer extends Component {
  render() {
    const toggler = (
      <Button
        className="add-task-form__toggler">
          Add Task
      </Button>
    );

    const fields = {
      summary: {
        className: 'form-panel__field',
        type: 'text',
        name: 'summary',
        placeholder: 'Type task summary here',
        mandatory: true
      },
      details: {
        className: 'form-panel__field',
        type: 'text',
        name: 'details',
        placeholder: 'Type task details here'
      }
    };

    const actionOptions = {
      boardId: this.props.boardId,
      listId: this.props.listId
    };

    return (
      <div className="add-task-form">
        <Form
          toggler={toggler}
          fields={fields}
          submitter={<Button>Add task</Button>}
          actionOptions={actionOptions}
          action={actions.addNewTask}>
          <Separator />
        </Form>
      </div>
    );
  }
}

AddTaskContainer.propTypes = {
  boardId: PropTypes.string,
  listId: PropTypes.string
};
