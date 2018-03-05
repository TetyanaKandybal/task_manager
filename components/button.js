import React, {Component} from "react";

import classnames from "classnames";

export default class Button extends Component {
  render() {
    let classes = classnames({'base-btn': true}, this.props.className);
    return (
        <button
          className={classes}
          onClick={this.props.onClick}>
          {this.props.children}
        </button>
    );
  }
}