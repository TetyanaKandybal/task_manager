import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InnerContent extends Component {
  render() {
    return (
      <div className="inner-content">
        {this.props.children}
      </div>
    );
  }
}

InnerContent.propTypes = {
  children: PropTypes.any
};

class Header extends Component {
  render() {
    return (
      <div className="inner-content__header">
        {this.props.children}
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.any
};

class MainSection extends Component {
  render() {
    return (
      <div className="inner-content__main">
        {this.props.children}
      </div>
    );
  }
}

MainSection.propTypes = {
  children: PropTypes.any
};

export default {
  InnerContent: InnerContent,
  Header: Header,
  MainSection: MainSection
};

