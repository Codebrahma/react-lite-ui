import React from 'react';
import PropTyes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

const MenuIcon = ({ theme, handleMenu }) => (
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  <div className={theme.menuIcon} onClick={handleMenu}>
    <span />
    <span />
    <span />
  </div>
);

const Navbar = ({
  theme,
  position,
  color,
  children,
  className,
  onMenuClick,
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
      { onMenuClick && <MenuIcon theme={theme} handleMenu={onMenuClick} /> }
    </div>
  );
};

Navbar.propTypes = {
  position: PropTyes.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),
  color: PropTyes.string,
  className: PropTyes.string,
  theme: PropTyes.oneOfType([PropTyes.object]),
  children: PropTyes.node,
  onMenuClick: PropTyes.func,
};

MenuIcon.propTypes = {
  theme: PropTyes.oneOfType([PropTyes.object]).isRequired,
  handleMenu: PropTyes.func.isRequired,
};

Navbar.defaultProps = {
  position: 'static',
  color: 'default',
  className: '',
  theme: defaultTheme,
  children: 'Navbar',
  onMenuClick: null,
};

export default themr('CBNavbar', defaultTheme)(Navbar);
