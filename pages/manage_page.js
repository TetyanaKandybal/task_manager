import React, { Component } from "react";
import ReactDOM from "react-dom";

import Sidebar from '../components/sidebar.js';

export class Manage extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="manage-container">
                <Sidebar />
                <div className="manage-content"></div>
            </div>
        );
    }
}

export default Manage;
