import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';

import defaultTheme from './theme.scss';

const Badge = ({
  badgeCount,
  children,
  className,
  size,
  theme,
}) => {
  const classes = cx(theme.badge, theme[size], className);
  const badgeclass = cx(theme['badge-container'], theme[`badge-container-${size}`]);
  return (
    <div className={badgeclass}>
      {children}
      <span className={classes} id="badge_count">
        {badgeCount}
      </span>
    </div>
  );
};

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
