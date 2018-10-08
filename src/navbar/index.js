import React from 'react';
import PropTyes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';


const Navbar = ({
  theme,
  position,
  color,
  title,
  leftIcon,
  rightIcon,
  onLeftIconClick,
  onRightIconClick,
  flat,
  children,
  className,
  ...other
}) => {
  const classes = classnames(
    className,
    theme.navbarWrapper,
    theme[flat ? 'flat' : ''],
    theme[`${position}Position`],
    theme[`${color}Color`],
  );

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-static-element-interactions */

  const renderLeftContent = () => (
    <div className={theme.leftContent}>
      { leftIcon && (
        <div className={theme.leftIcon} onClick={onLeftIconClick}>
          {leftIcon}
        </div>)
      }
      {
        typeof title === 'string'
        ? <span className={theme.title}>{title}</span>
        : title
      }
    </div>
  );

  const renderRightContent = () => (
    <div className={theme.rightContent}>
      { children }
      { rightIcon && (
        <div className={theme.rightIcon} onClick={onRightIconClick}>
          {rightIcon}
        </div>)
      }
    </div>
  );

  return (
    <div className={classes} {...other}>
      <div className={theme.innerWrapper}>
        {renderLeftContent()}
        {renderRightContent()}
      </div>
      <div className="clearfix" />
    </div>
  );
};

Navbar.propTypes = {
  position: PropTyes.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative']),
  color: PropTyes.string,
  className: PropTyes.string,
  theme: PropTyes.oneOfType([PropTyes.object]),
  children: PropTyes.node,
  title: PropTyes.oneOfType([PropTyes.string, PropTyes.node]),
  leftIcon: PropTyes.node,
  rightIcon: PropTyes.node,
  onLeftIconClick: PropTyes.func,
  onRightIconClick: PropTyes.func,
  flat: PropTyes.bool,
};

Navbar.defaultProps = {
  position: 'static',
  color: 'default',
  className: '',
  theme: defaultTheme,
  children: null,
  title: 'navbar',
  leftIcon: null,
  rightIcon: null,
  onLeftIconClick: () => {},
  onRightIconClick: () => {},
  flat: false,
};

export default themr('CBNavbar', defaultTheme)(Navbar);
