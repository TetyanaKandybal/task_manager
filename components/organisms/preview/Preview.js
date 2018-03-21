import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/icon/Icon';
import Link from '../../atoms/link/Link';

export default class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <div className="preview__content">
          <div className="preview__section">
            <Icon
              name="trello" />
            <Link
              path={this.props.linkOptions.path}>
              {this.props.linkOptions.title}
            </Link>
          </div>
          {this.props.actionItem}
        </div>
      </div>
    );
  }
}

Preview.propTypes = {
  linkOptions: PropTypes.object,
  actionItem: PropTypes.element
};
