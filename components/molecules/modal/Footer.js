import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';

export default class BaseModalFooter extends Component {
  render() {
    return (
      <Modal.Footer>{this.props.children}</Modal.Footer>
    );
  }
}

BaseModalFooter.propTypes = {
  children: PropTypes.any
};
