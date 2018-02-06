import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactClickOutside from "./node_modules/react-click-outside";

// TODO: BEM naming
// - Collapse on outside click/ inside - expand
// - Autosuggest on type
// - file path (from node modules)

export class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleClickOutside() {
        console.log('click outside');
    }

    render() {
        return (
            <div className="search-wrapper">
                <input type="text" placeholder="What do you want to find ?"/>
            </div>
        );
    }
}

export default Search;
