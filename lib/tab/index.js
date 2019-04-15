/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import defaultTheme from './theme.module.scss';
import '../globals/fonts.scss';

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTab: 0,
    };
  }

  handleCurrentTab = (idx) => {
    this.setState({ currentTab: idx });
  }

  renderHeader = () => {
    const { children, theme } = this.props;
    console.log(children);
    return (
      <div className={classnames(theme.headerWrapper)}>
        {
          children.map((child, idx) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div key={idx} onClick={() => this.handleCurrentTab(idx)}>
              {child.props.title}
            </div>
          ))
        }
      </div>
    );
  }

  renderPage = () => {
    const { children } = this.props;
    const { currentTab } = this.state;
    return (
      <div>
        {children[currentTab]}
      </div>
    );
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        {value}
        {this.renderHeader()}
        {this.renderPage()}
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  theme: PropTypes.oneOfType([PropTypes.object]),
};
Tabs.defaultProps = {
  children: null,
  theme: defaultTheme,
};

export default themr('CBTabs', defaultTheme)(Tabs);
