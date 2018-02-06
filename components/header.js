import React, { Component } from "react";
import ReactDOM from "react-dom";

import Search from "./search"

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <header className="header-wrapper">
                <h1 className="title">Logo</h1>

                <Search />
            </header>
        );
    }
}

export default Header;
