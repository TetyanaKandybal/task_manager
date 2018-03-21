import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapValues from 'lodash/mapValues';
import map from 'lodash/map';
import reduce from 'lodash/reduce';

import Button from '../../atoms/button/Button';
import IconButton from '../../molecules/iconButton/IconButton'
import TextInput from '../../atoms/input/Input';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: props.fields
    };
  }

  onFieldChange = ({ name, value, isValid }) => {
    const field = { [name]: { ...this.state.fields[name], value, isValid } };
    this.setState({ fields: { ...this.state.fields, ...field } });
  };

  onSubmit = () => {
    const parameters = mapValues(this.state.fields, ({ value }) => value);

    this.props.onSubmit({ ...parameters });
  };

  isSubmitEnabled = () => (
    reduce(this.state.fields, (isEnabled, { mandatory, isValid }) => {
      if (mandatory) {
        return isEnabled && !!isValid;
      }

      return isEnabled;
    }, true)
  );

  renderFields = () => map((this.state.fields), ({ className, ...props }, idx) => (
    <TextInput
      className="form-panel__field"
      onChange={data => this.onFieldChange(data)}
      key={`name-${idx}`}
      {...props} />
  ));

  renderFormFooter = () => (
    <React.Fragment>
      <Button
        className="submit-btn"
        disabled={!this.isSubmitEnabled()}
        onClick={() => this.onSubmit()}>
        Save
      </Button>
      <IconButton
        className="framed-btn"
        onClick={this.props.onCancel}
        iconName="times" />
    </React.Fragment>
  );

  render() {
    return (
      <div className="form-panel">
        { this.renderFields() }
        <div className="form-panel__footer">
          { this.renderFormFooter() }
        </div>
      </div>
    );
  }
}

Form.defaultProps = {
  fields: {
    name: ''
  }
};

Form.propTypes = {
  fields: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ),
  children: PropTypes.any,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};
