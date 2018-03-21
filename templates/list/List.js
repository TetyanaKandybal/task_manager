import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  render() {
    return (
      <div className="list-template">
        {this.props.children}
      </div>
    );
  }
}

List.propTypes = {
  children: PropTypes.any
};
