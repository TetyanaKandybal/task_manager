import React, {Component} from "react";

import Button from "../components/button";
import {Modal, FormGroup, FormControl} from "react-bootstrap";
import Icon from "react-fontawesome";


export default class AddNewBoardContainer extends Component {
  state = {
    isModalOpen: false
  };

  onModalToggle = () => {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }

  onAddNewBoard = () => {
    this.onModalToggle();
  }

  render() {
    return (
        <div>
          <Button onClick={() => this.onModalToggle()}>
            <Icon
              className='add-board-btn'
              name='plus' />
          </Button>
          <Modal
            show={this.state.isModalOpen}
            bsSize="sm"
            onHide={() => this.onModalToggle()}>
            <Modal.Header>
              <Modal.Title>Add new board</Modal.Title>
            </Modal.Header>
            <FormGroup>
              <FormControl
                type="text"
                bsClass="form-input"
                placeholder="Type board name here" />
            </FormGroup>
            <Modal.Footer>
              <Button
                className="control-btn cancel"
                onClick={() => this.onModalToggle()}>Cancel</Button>
              <Button
                className="control-btn submit"
                onClick={() => this.onAddNewBoard()}>Confirm</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}
