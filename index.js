import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import store from './store';

import Header from './components/organisms/header/Header';
import ManagePage from './pages/managePage/ManagePage';
import Board from './pages/boardPage/BoardPage';


class App extends Component {
  render() {
    return (
      <div className="outer-wrapper">
        <Header />
        <div className="main-container">
          <Router history={browserHistory}>
            <Route path="/" component={ManagePage} />
            <Route path="/boards/:boardId" component={Board} />
          </Router>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('.app'));
