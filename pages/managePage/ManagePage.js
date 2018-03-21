import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import ListTemplate from '../../templates/list/List';

import actions from '../../actions/manage_actions';

import BoardPreview from '../../components/organisms/preview/Preview';
import BoundModal from '../../components/organisms/boundConfirmationModal/BoundConfirmationModal';

class Manage extends Component {
  componentWillMount = () => {
    actions.getManagedBoardsData();
  };

  onDeleteBoard = (id) => {
    actions.deleteBoard(id);
  };

  renderBoards = () => this.props.boards.map(board => this.renderBoard(board));

  renderBoard = (board) => {
    const DeleteBoardBoundModal = (
      <BoundModal
        heading={`Are You sure You want to delete ${board.title} ?`}
        iconName="trash"
        onConfirm={() => this.onDeleteBoard(board.id)} />
    );

    const linkOptions = {
      path: `boards/${board.id}`,
      title: board.title
    };

    return (
      <BoardPreview
        linkOptions={linkOptions}
        actionItem={DeleteBoardBoundModal}
        key={shortid.generate()} />
    );
  };

  render() {
    return (
      <div className="manage-page">
        <ListTemplate>{this.props.boards && this.renderBoards()}</ListTemplate>
      </div>
    );
  }
}

const mapStateToProps = state => ({ boards: state.manageReducers.boards });

Manage.propTypes = {
  boards: PropTypes.array
};

export default connect(mapStateToProps)(Manage);
