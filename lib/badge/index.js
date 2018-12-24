import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import { transitionEndEventName } from '../globals/helper';
import defaultTheme from './theme.module.scss';

const getNode = findDOMNode;

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.animRef = null;
    this.state = {
      count: props.badgeCount,
    };
  }

  componentDidUpdate(prevProps) {
    const { badgeCount } = this.props;
    if (badgeCount !== prevProps.badgeCount) {
      const { theme } = this.props;
      const countEle = getNode(this.animRef);
      countEle.addEventListener(transitionEndEventName(), this.updateCount, false);
      countEle.classList.add(theme.fadeOut);
      // eslint-disable-next-line react/no-did-update-set-state
    }
  }

  updateCount = () => {
    const { theme, badgeCount } = this.props;
    const countEle = getNode(this.animRef);
    this.setState({
      count: badgeCount,
    });
    countEle.classList.remove(theme.fadeOut);
  };

  render() {
    const {
      children, className, size, theme,
    } = this.props;
    const { count } = this.state;
    const classes = cx(theme.badge, theme[size], className);
    const badgeclass = cx(
      theme['badge-container'],
      theme[`badge-container-${size}`],
    );
    return (
      <React.Fragment>
        <div className={badgeclass}>
          {children}
          <span className={classes} id="badge_count">
            <span
              ref={(ref) => {
                this.animRef = ref;
              }}
            >
              {count}
            </span>
          </span>
        </div>
        <div className={`${theme.clearfix} clearfix`} />
      </React.Fragment>
    );
  }
}

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  className: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.object]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  badgeCount: PropTypes.number,
};

Badge.defaultProps = {
  className: '',
  theme: defaultTheme,
  size: 'small',
  badgeCount: 0,
};

export default themr('CBBadge', defaultTheme)(Badge);
