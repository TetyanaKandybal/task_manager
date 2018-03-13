import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';

import classnames from 'classnames';

export default class BaseModal extends Component {
  render() {
    const classes = classnames({ 'base-modal': true }, this.props.className);
    return (
      <Modal
        className={classes}
        show={this.props.isOpen}
        bsSize={this.props.size}
        onHide={() => this.props.onHide}>
        {this.props.children}
      </Modal>
    );
  }
}

BaseModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onHide: PropTypes.func,
  size: PropTypes.string,
  isOpen: PropTypes.bool
};
