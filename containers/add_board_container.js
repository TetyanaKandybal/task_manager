import React, { Component } from 'react';
import Icon from 'react-fontawesome';

import Button from '../components/button';
import TextInput from '../components/text_input';
import Modal from '../components/modal/modal';
import ModalFooter from '../components/modal/footer';
import ModalHeader from '../components/modal/header';

import actions from '../actions/manage_actions';

export default class AddNewBoardContainer extends Component {
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

  onAddNewBoard = () => {
    actions.addNewBoard({ title: this.state.boardTitle });
    this.onModalToggle();
  };

  render() {
    return (
      <div className="adding-board-form">
        <Button onClick={() => this.onModalToggle()}>
          <Icon
            className="add-board-btn"
            name="plus" />
        </Button>
        <Modal
          isOpen={this.state.isModalOpen}
          size="sm"
          onHide={() => this.onModalToggle()}>
          <ModalHeader>
            <span>Add new board</span>
          </ModalHeader>
          <div className="adding-board-form__content">
            <TextInput
              type="text"
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
              disabled={!this.state.isValid}
              className="control-btn control-btn--submit"
              onClick={() => this.onAddNewBoard()}>
                Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
