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
        bsSize={this.props.size}>
        {this.props.children}
      </Modal>
    );
  }
}
BaseModal.defaultProps = {
  size: 'sm'
};

BaseModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  size: PropTypes.string,
  isOpen: PropTypes.bool
};
