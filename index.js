import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import ManagePage from './pages/manage_page.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

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

ReactDOM.render(<App />, document.querySelector(".app"));