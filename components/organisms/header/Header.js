import React, { Component } from 'react';
import Icon from 'react-fontawesome';

import Search from '../../molecules/search/Search';
import BoundFormModal from '../boundFormModal/BoundFormModal';

import actions from '../../../actions/manage_actions';

export default class Header extends Component {
  onAddNewBoard = board => actions.addNewBoard(board);

  render() {
    const fields = {
      title: {
        name: 'title',
        placeholder: 'Type board title here',
        mandatory: true
      }
    };

    return (
      <header className="header">
        <div className="header__logo-section">
          <Icon
            className="header__logo"
            name="tasks" />
          <Search />
        </div>

        <div>
          <BoundFormModal
            fields={fields}
            heading="Add new board"
            iconName="plus"
            onSubmit={this.onAddNewBoard} />
        </div>
      </header>
    );
  }
}

