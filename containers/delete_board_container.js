import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import classnames from 'classnames';

import PropTypes from 'prop-types';

import Button from '../components/button';
import Modal from '../components/modal/modal';
import ModalFooter from '../components/modal/footer';
import ModalHeader from '../components/modal/header';

import actions from '../actions/manage_actions';

export default class DeleteBoardContainer extends Component {
  state = {
    isModalOpen: false
  };

  onModalToggle = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  onDeleteBoard = () => {
    actions.deleteBoard(this.props.board.id);
    this.onModalToggle();
  };

  render() {
    const classes = classnames({
      'control-btn': true,
      'icon-btn': true
    }, this.props.controlClass);

    return (
      <React.Fragment>
        <Button
          className={classes}
          onClick={() => this.onModalToggle()}>
          <Icon
            name="trash" />
        </Button>
        <Modal
          isOpen={this.state.isModalOpen}
          size="sm"
          onHide={() => this.onModalToggle()}>
          <ModalHeader>
            {`Are You sure You want to delete ${this.props.board.title} ?`}
          </ModalHeader>
          <ModalFooter>
            <Button
              className="control-btn control-btn--cancel"
              onClick={() => this.onModalToggle()}>
                Cancel
            </Button>
            <Button
              className="control-btn control-btn--submit"
              onClick={() => this.onDeleteBoard()}>
                Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

DeleteBoardContainer.propTypes = {
  board: PropTypes.object,
  controlClass: PropTypes.string
};
