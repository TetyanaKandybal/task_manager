import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapValues from 'lodash/mapValues';
import map from 'lodash/map';
import reduce from 'lodash/reduce';

import Icon from 'react-fontawesome';

import Button from '../components/button';
import TextInput from '../components/text_input';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormOpen: false,
      fields: props.fields
    };
  }

  onFieldChange = ({ name, value, isValid }) => {
    const field = { [name]: { ...this.state.fields[name], value, isValid } };
    this.setState({ fields: { ...this.state.fields, ...field } });
  }

  onSubmit = () => {
    const parameters = mapValues(this.state.fields, ({ value }) => value);

    this.props.action({ ...parameters, ...this.props.actionOptions });
  };

  onFormToggle = () => this.setState({ isFormOpen: !this.state.isFormOpen });

  isSubmitEnabled = () => (
    reduce(this.state.fields, (isEnabled, { mandatory, isValid }) => {
      if (mandatory) {
        return isEnabled && !!isValid;
      }

      return isEnabled;
    }, true)
  )

  renderToggler = () => React.cloneElement(this.props.toggler, { onClick: () => this.onFormToggle() });

  renderFields = () => map((this.state.fields), ({ className, name, ...props }, idx) => (
    <TextInput
      className={`form-field ${className}`}
      onChange={data => this.onFieldChange(data)}
      key={`name-${idx}`}
      {...props} />
  ));

  renderFormFooter = () => {
    const submitter = React.cloneElement(this.props.submitter,
      {
        className: 'form-panel__submit-btn',
        disabled: !this.isSubmitEnabled(),
        onClick: () => this.onSubmit(),
      }
    );

    return (
      <React.Fragment>
        { submitter }
        <Button
          className="framed-btn"
          onClick={this.onFormToggle}>
          <Icon
            name="times" />
        </Button>
      </React.Fragment>
    );
  };

  renderForm = () => (
    <div className="form-panel">
      { this.renderFields() }
      <div className="form-panel__footer">
        { this.renderFormFooter() }
      </div>
    </div>
  );

  render() {
    return (
      <React.Fragment>
        { this.renderToggler() }
        { this.props.children }
        { this.state.isFormOpen && this.renderForm() }
      </React.Fragment>
    );
  }
}

Form.propTypes = {
  toggler: PropTypes.element.isRequired,
  submitter: PropTypes.element.isRequired,
  fields: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  children: PropTypes.any,
  actionOptions: PropTypes.object
};
