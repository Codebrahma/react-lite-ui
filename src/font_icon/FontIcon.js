import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import iconTheme from './theme.scss';

const FontIcon = ({ alt, children, className, theme, value, ...other}) => { // eslint-disable-line
  const classNames = classnames({
    [iconTheme.materialIcons]: typeof value === 'string' || typeof children === 'string',
  }, className);

  return (
    <span
      aria-label={alt}
      className={classNames}
      {...other}
    >
      {value}
      {children}
    </span>
  );
};

FontIcon.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object, // eslint-disable-line
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

FontIcon.defaultProps = {
  children: null,
  alt: '',
  className: '',
};

export default FontIcon;
export { FontIcon };
