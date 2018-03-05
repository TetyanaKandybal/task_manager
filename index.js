import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Header from './components/header.js';
import ManagePage from './pages/manage_page.js';

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

ReactDOM.render(<Provider><App /></Provider>, document.querySelector(".app"));