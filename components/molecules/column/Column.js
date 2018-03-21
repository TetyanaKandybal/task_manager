import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Separator from '../../atoms/separator/Separator';

import ColumnHeader from './ColumnHeader';

export default class Column extends Component {
  render() {
    return (
      <div className="column">
        <ColumnHeader
          heading={this.props.heading} />
        <Separator />
        <div className="column__body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Column.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.any
};
