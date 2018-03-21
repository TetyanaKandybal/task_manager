import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link as RouterLink } from 'react-router';
import config from '../../../constants/config';

export default class Link extends Component {
  render() {
    return (
      <RouterLink
        className={`link-label ${this.props.className}`}
        to={`${config.envConfig}/${this.props.path}`}>
        {this.props.children}
      </RouterLink>
    );
  }
}
Link.defaultProps = {
  className: ''
};

Link.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string,
  children: PropTypes.any
};
