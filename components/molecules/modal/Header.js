import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';

export default class BaseModalHeader extends Component {
  render() {
    return (
      <Modal.Header>{this.props.children}</Modal.Header>
    );
  }
}

BaseModalHeader.propTypes = {
  children: PropTypes.any
};
