import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from '../../atoms/button/Button';
import Modal from '../modal/Modal';
import ModalFooter from '../modal/Footer';
import ModalHeader from '../modal/Header';

export default class ConfirmationModal extends Component {
  state = {
    isModalOpen: this.props.isOpen
  };

  componentWillReceiveProps = nextProps => this.setState({ isModalOpen: nextProps.isOpen });

  onModalToggle = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  onConfirm = () => {
    this.props.onConfirm();
    this.onModalToggle();
  };

  render() {
    return (
      <Modal
        {...this.props}
        isOpen={this.state.isModalOpen}>
        <ModalHeader>
          { this.props.heading }
        </ModalHeader>
        { this.props.children }
        <ModalFooter>
          <Button
            onClick={() => this.onModalToggle()}>
              Cancel
          </Button>
          <Button
            className="framed-btn"
            onClick={() => this.onConfirm()}>
              Confirm
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool,
  heading: PropTypes.string,
  children: PropTypes.any,
  onConfirm: PropTypes.func
};
