import React, { Component } from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';

import Button from '../../molecules/iconButton/IconButton';
import Modal from '../../molecules/confirmationModal/ConfirmationModal';

export default class BoundModal extends Component {
  state = {
    isModalOpen: false
  };

  onModalToggle = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  onConfirmAction = () => {
    this.props.onConfirm();
    this.onModalToggle();
  };

  render() {
    const classes = classnames({
      'control-btn': true,
      'icon-btn': true
    });

    return (
      <React.Fragment>
        <Button
          className={classes}
          iconName={this.props.iconName}
          onClick={() => this.onModalToggle()} />
        <Modal
          isOpen={this.state.isModalOpen}
          heading={this.props.heading}
          onConfirm={() => this.onConfirmAction()}>
          {this.props.children}
        </Modal>
      </React.Fragment>
    );
  }
}

BoundModal.propTypes = {
  children: PropTypes.any,
  heading: PropTypes.string,
  iconName: PropTypes.string,
  onConfirm: PropTypes.func
};
