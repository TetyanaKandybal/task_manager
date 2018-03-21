import React, { Component } from 'react';
import Input from '../../atoms/input/Input';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <Input
          type="text"
          placeholder="What do you want to find ?" />
      </div>
    );
  }
}
