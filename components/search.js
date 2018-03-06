import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="text" placeholder="What do you want to find ?" />
      </div>
    );
  }
}
