import React, { Component } from 'react';
import Icon from 'react-fontawesome';

import Search from './search';
import Button from '../components/button';
import AddNewBoard from '../containers/modify_board_container';

import actions from '../actions/manage_actions';

export default class Header extends Component {
  render() {
    const control = (
      <Button
        className="icon-btn" >
        <Icon
          name="plus" />
      </Button>
    );
    return (
      <header className="header">
        <div className="header__logo-section">
          <Icon
            className="header__logo"
            name="tasks" />
          <Search />
        </div>

        <div>
          <AddNewBoard
            heading="Add new board"
            control={control}
            action={actions.addNewBoard} />
        </div>
      </header>
    );
  }
}

