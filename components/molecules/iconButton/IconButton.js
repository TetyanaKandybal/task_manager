import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../atoms/button/Button';
import Icon from '../../atoms/icon/Icon';

export default class IconButton extends Component {
  render() {
    return (
      <Button
        className={`icon-btn ${this.props.className}`}
        type="icon"
        onClick={() => this.props.onClick()}
        {...this.props}>
        <Icon
          name={this.props.iconName} />
      </Button>
    );
  }
}
IconButton.defaultProps = {
  className: ''
};

IconButton.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  onClick: PropTypes.func
};
