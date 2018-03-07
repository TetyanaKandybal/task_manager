import React, { Component } from 'react';

import Search from './search';
import AddNewBoard from '../containers/add_board_container';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-section">
          <h1 className="title">Logo</h1>
          <Search />
        </div>

        <div>
          <AddNewBoard />
        </div>
      </header>
    );
  }
}

