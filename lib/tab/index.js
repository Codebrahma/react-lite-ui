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
  };

  renderHeader = () => {
    const { children, theme, bottomBorder } = this.props;
    const { currentTab } = this.state;
    return (
      <div
        className={
        classnames(theme.headerWrapper,
          bottomBorder ? theme.bottomBorder : undefined)}
        style={{ overflow: 'scroll' }}
      >
        {children.map((child, idx) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className={classnames(theme.item,
              currentTab === idx ? [theme.active] : undefined,
              bottomBorder && currentTab === idx ? theme.activeBottomBorder : undefined)}
            key={`item-${child.props.title}-${child.props.children}`}
            onClick={() => this.handleCurrentTab(idx)}
          >
            {child.props.title}
          </div>
        ))}
      </div>
    );
  };

  renderPage = () => {
    const { children } = this.props;
    const { currentTab } = this.state;
    return children[currentTab];
  };

  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        {this.renderHeader()}
        {this.renderPage()}
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  theme: PropTypes.oneOfType([PropTypes.object]),
  bottomBorder: PropTypes.bool,
};
Tabs.defaultProps = {
  children: null,
  theme: defaultTheme,
  bottomBorder: false,
};

export default themr('CBTabs', defaultTheme)(Tabs);
