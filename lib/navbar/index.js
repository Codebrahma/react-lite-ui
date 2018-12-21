/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import PropTyes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { FaBars } from 'react-icons/fa';
import defaultTheme from './theme.module.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      blockBlur: false,
    };
  }

  blockBlur = () => {
    this.setState(prevState => ({
      blockBlur: !prevState.blockBlur,
    }));
  }

  hideMenu = () => {
    if (!this.state.blockBlur) {
      this.setState({
        showMenu: false,
      });
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  }

  renderRightContent = () => {
    const { children, theme } = this.props;

    return (
      <div className={theme.rightContent}>
        {this.renderDesktopView()}
        {this.renderMobileView()}
        { children ? <FaBars
          className={classnames(theme['icon-menu'], 'icon-menu')}
          tabIndex={0}
          onClick={this.toggleMenu}
          onBlur={this.hideMenu}
        /> : null}
      </div>
    );
  }

  renderMobileView = () => {
    const { children, theme } = this.props;
    const { showMenu } = this.state;

    const navbarMobile = classnames(theme.navbarMobileMenu, { [theme.showMenu]: showMenu });
    const navLinks = classnames(theme.navlinks);
    return (
      <div
        className={navbarMobile}
        tabIndex={0}
        onBlur={this.hideMenu}
        onMouseEnter={this.blockBlur}
        onMouseLeave={this.blockBlur}
      >
        <div className={navLinks}>
          {children && typeof children === 'object' && children.map ? children.map(child => <div onClick={this.toggleMenu}>{child}</div>) : children}
        </div>
      </div>
    );
  }

  renderDesktopView = () => {
    const { children, theme } = this.props;

    const navbarMenu = classnames(theme.navbarMenu);
    const navLinks = classnames(theme.navlinks);

    return (
      <div className={navbarMenu}>
        <div className={navLinks}>
          {children}
        </div>
      </div>
    );
  }

  renderLeftContent = () => {
    const { title, theme } = this.props;

    return (
      title && (
        <div className={theme.leftContent}>
          {
            typeof title === 'string'
              ? <span className={theme.title}>{title}</span>
              : React.cloneElement(title, { className: classnames(theme.title) })
          }
        </div>
      )
    );
  }

  render() {
    const {
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
    } = this.props;

    const classes = classnames(
      className,
      theme.navbarWrapper,
      theme[flat ? 'flat' : ''],
      theme[`${position}Position`],
      theme[`${color}Color`],
    );

    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */

    return (
      <div className={classes} {...other}>
        <div className={theme.innerWrapper}>
          {leftIcon && (
            <div className={theme.leftIcon} onClick={onLeftIconClick}>
              {React.isValidElement(leftIcon) ? leftIcon : <img src={leftIcon} alt="navbar-left-logo" />}
            </div>)
          }
          <div className={theme.navbarContent}>
            {this.renderLeftContent()}
            {this.renderRightContent()}
          </div>
          {rightIcon && (
            <div className={theme.rightIcon} onClick={onRightIconClick}>
              {React.isValidElement(rightIcon) ? rightIcon : <img src={rightIcon} alt="navbar-right-logo" />}
            </div>)
          }
        </div>
        <div className={classnames(theme.clearfix, 'clearfix')} />
      </div>
    );
  }
}

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
  title: null,
  leftIcon: null,
  rightIcon: null,
  onLeftIconClick: () => { },
  onRightIconClick: () => { },
  flat: false,
};

export default themr('CBNavbar', defaultTheme)(Navbar);
