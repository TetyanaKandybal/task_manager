import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../atoms/button/Button';
import Form from '../form/Form';

export default class BoundForm extends Component {
  state = {
    isFormOpen: false
  };

  onFormToggle = () => {
    this.setState({ isFormOpen: !this.state.isFormOpen });
  };

  onSubmitAction = (parameters) => {
    this.props.onSubmit(parameters);
    this.onFormToggle();
  };

  render() {
    return (
      <div className="bound-form">
        <Button
          className="bound-form__toggler"
          onClick={() => this.onFormToggle()} >
          {this.props.togglerText}
        </Button>
        {this.state.isFormOpen && (
          <Form
            fields={this.props.fields}
            isOpen={this.state.isFormOpen}
            onCancel={this.onFormToggle}
            onSubmit={this.onSubmitAction} />
        )}
      </div>
    );
  }
}

BoundForm.propTypes = {
  fields: PropTypes.object,
  togglerText: PropTypes.string,
  onSubmit: PropTypes.func
};
