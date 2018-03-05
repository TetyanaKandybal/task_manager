import React, { Component } from "react";
import ReactClickOutside from "react-click-outside";

export default class Search extends Component {
    constructor(props) {
        super(props);
    }

    handleClickOutside() {
    }

    render() {
        return (
            <div className="search-wrapper">
                <input type="text" placeholder="What do you want to find ?"/>
            </div>
        );
    }
}
