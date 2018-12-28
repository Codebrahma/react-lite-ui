import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import defaultTheme from './theme.module.scss';
import '../globals/fonts.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleCard = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  };

  renderFooter = () => {
    const {
      theme, expandedContent, actions, footer,
    } = this.props;
    const { expanded } = this.state;

    if (footer !== null) {
      return (
        <div className={classnames(theme.cardFooter)} aria-label="card-footer">
          { footer }
        </div>
      );
    }

    const Icon = expanded ? FaAngleDoubleUp : FaAngleDoubleDown;
    const iconProps = {
      onClick: this.toggleCard,
      className: classnames(theme['expand-icon']),
      'aria-label': 'more-icon',
    };

    return (
      <div className={classnames(theme.cardFooter)}>
        <div className={theme['card-actions']} aria-label="card-actions">
          {
            actions !== null
            && actions
          }
        </div>
        {/* eslint-disable jsx-a11y/click-events-have-key-events */}
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        {expandedContent !== null && <Icon {...iconProps} />}
      </div>
    );
  }

  renderContent = () => {
    const { children } = this.props;

    const contentAreaProps = {
      'aria-label': 'card-content',
    };

    return (
      <div {...contentAreaProps}>
        {children}
      </div>
    );
  }

  renderHeader = () => {
    const { theme, header } = this.props;

    const headerProps = {
      'aria-label': 'card-header',
      className: classnames(theme.cardHeader),
    };

    let cardHeader = null;
    if (typeof header === 'string') {
      cardHeader = <span>{header}</span>;
    } else if (typeof header === 'function') {
      cardHeader = header();
    }

    return (
      <div {...headerProps}>
        {cardHeader}
      </div>
    );
  }

  render() {
    const {
      children,
      className,
      theme,
      wrapContent,
      elevation,
      noPadding,
      expandedContent,
      ...other
    } = this.props;

    const { expanded } = this.state;
    let HiddenContent;
    if (typeof expandedContent === 'function') {
      HiddenContent = expandedContent;
    } else {
      HiddenContent = () => expandedContent;
    }

    const rootProps = {
      'data-react-toolbox': 'card',
      className: classnames(
        theme.card,
        theme[`elevation-${elevation}`],
        {
          [theme.wrapContent]: wrapContent,
          [theme.noPadding]: noPadding,
        },
        className,
      ),
      ...other,
    };

    return (
      <div {...rootProps}>
        { this.renderHeader() }
        { this.renderContent() }
        <div
          className={classnames(
            theme.expandedContent, 'expandedContent',
            expanded ? `${theme.expanded} expanded` : `${theme.collapsed} collapsed`,
          )}
        >
          {(expandedContent !== null) && <HiddenContent />}
        </div>
        { this.renderFooter() }
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    card: PropTypes.string,
    cardHeader: PropTypes.string,
  }),
  wrapContent: PropTypes.bool,
  noPadding: PropTypes.bool,
  elevation: PropTypes.oneOf(['low', 'medium', 'high']),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  expandedContent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]),
  actions: PropTypes.node,
  footer: PropTypes.node,
};

Card.defaultProps = {
  className: null,
  elevation: 'low',
  theme: {},
  wrapContent: false,
  noPadding: false,
  header: null,
  expandedContent: null,
  actions: null,
  footer: null,
};

export default themr('CBCard', defaultTheme)(Card);
