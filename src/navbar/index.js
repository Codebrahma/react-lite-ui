import React from 'react';
import PropTyes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

const Navbar = ({
  theme,
  position,
  color,
  children,
  className,
  ...other
}) => {
  const classes = classnames(
    className,
    theme.navbarWrapper,
    theme[`${position}Position`],
    theme[`${color}Color`],
  );
  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

Navbar.propTypes = {
  position: PropTyes.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),
  color: PropTyes.string,
  className: PropTyes.string,
  theme: PropTyes.oneOfType([PropTyes.object]),
};

Navbar.defaultProps = {
  position: 'static',
  color: 'default',
  className: '',
  theme: defaultTheme,
};

export default themr('CBNavbar', defaultTheme)(Navbar);
