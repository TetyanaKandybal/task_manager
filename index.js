import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Header from './components/header';
import ManagePage from './pages/manage_page';

class App extends Component {
  render() {
    return (
      <div className="outer-wrapper">
        <Header />
        <div className="main-container">
          <ManagePage />
        </div>
        <footer></footer>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('.app'));
