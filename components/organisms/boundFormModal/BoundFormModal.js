import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../molecules/modal/Modal';
import ModalHeader from '../../molecules/modal/Header';

import Button from '../../molecules/iconButton/IconButton';

import Form from '../../organisms/form/Form';

export default class BoundFormModal extends Component {
  state = {
    isModalOpen: false
  };

  onModalToggle = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  onSubmitAction = (parameters) => {
    this.props.onSubmit(parameters);
    this.onModalToggle();
  };

  render() {
    return (
      <React.Fragment>
        <Button
          iconName={this.props.iconName}
          onClick={() => this.onModalToggle()} />
        <Modal
          isOpen={this.state.isModalOpen}>
          <ModalHeader>
            { this.props.heading }
          </ModalHeader>
          <Form
            fields={this.props.fields}
            onSubmit={data => this.onSubmitAction(data)}
            onCancel={this.onModalToggle} />
          {this.props.children}
        </Modal>
      </React.Fragment>
    );
  }
}

BoundFormModal.propTypes = {
  children: PropTypes.any,
  heading: PropTypes.string,
  iconName: PropTypes.string,
  fields: PropTypes.object,
  onSubmit: PropTypes.func
};
