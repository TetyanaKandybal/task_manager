import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from '../components/button';
import TextInput from '../components/text_input';
import Modal from '../components/modal/modal';
import ModalFooter from '../components/modal/footer';
import ModalHeader from '../components/modal/header';

export default class ModifyingBoardContainer extends Component {
  state = {
    isModalOpen: false,
    isValid: false
  };

  onModalToggle = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  onBoardTitleChange = (data) => {
    this.setState({ boardTitle: data.value, isValid: data.isValid });
  };

  onModifyBoard = () => {
    this.props.action({ title: this.state.boardTitle, ...this.props.actionOptions });
    this.onModalToggle();
  };

  render() {
    return (
      <div className="modifying-board-form">
        { React.cloneElement(this.props.control, { onClick: () => this.onModalToggle() }) }
        <Modal
          isOpen={this.state.isModalOpen}
          size="sm"
          onHide={() => this.onModalToggle()}>
          <ModalHeader>
            {this.props.heading}
          </ModalHeader>
          <div className="modifying-board-form__content">
            <TextInput
              type="text"
              value={this.props.value}
              placeholder="Type board name here"
              onChange={this.onBoardTitleChange} />
          </div>
          <ModalFooter>
            <Button
              className="control-btn control-btn--cancel"
              onClick={() => this.onModalToggle()}>
                Cancel
            </Button>
            <Button
              className="control-btn control-btn--submit"
              disabled={!this.state.isValid}
              onClick={() => this.onModifyBoard()}>
                Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

ModifyingBoardContainer.propTypes = {
  actionOptions: PropTypes.object,
  control: PropTypes.element,
  heading: PropTypes.string,
  action: PropTypes.func,
  value: PropTypes.string
};
