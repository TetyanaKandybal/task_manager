import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/button';
import Form from '../components/form';

import actions from '../actions/list_actions';

export default class AddListContainer extends Component {
  render() {
    const toggler = (
      <Button
        className="add-list-form__toggler">
          Add List
      </Button>
    );

    const fields = {
      title: {
        className: 'form-panel__field',
        type: 'text',
        name: 'title',
        placeholder: 'Type list title here',
        mandatory: true
      }
    };

    const actionOptions = {
      boardId: this.props.boardId
    };

    return (
      <div className="add-list-form">
        <Form
          toggler={toggler}
          fields={fields}
          submitter={<Button>Add list</Button>}
          actionOptions={actionOptions}
          action={actions.addNewList} />
      </div>
    );
  }
}

AddListContainer.propTypes = {
  boardId: PropTypes.string
};
