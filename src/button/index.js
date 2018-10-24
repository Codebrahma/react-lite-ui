import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';

import '../globals/fonts.scss';
import defaultTheme from './theme.scss';

class Button extends Component {
  render() {
    const {
      children,
      type,
      size,
      className,
      href,
      icon,
      iconAlignment,
      theme,
      flat,
      bordered,
      borderless,
      iconButton,
      ...others
    } = this.props;
    const Element = href ? 'a' : 'div';
    const classes = classnames(
      theme.button,
      theme[type],
      theme[!iconButton && size], // size will not take effect on ICON ONLY BUTTON type
      theme[`icon-${iconAlignment}`],
      className,
      (flat || bordered || borderless) && 'flat',
      {
        [theme[`${type}Bordered`]]: bordered,
        [theme[`${type}Borderless`]]: borderless,
        [theme.iconButton]: iconButton,
      },
    );

    let Icon;

    if (icon) {
      if (typeof icon === 'string') {
        Icon = () => <i className={classnames(theme.icon, icon)} />;
      } else {
        Icon = () => icon;
      }
    }

    const rootProps = {
      ...others,
      href: !href ? undefined : href,
      className: classnames({ [theme.iconButtonWrapper]: iconButton }),
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
    };

    const buttonProps = {
      ref: (node) => {
        this.buttonNode = node;
      },
      className: classes,
      disabled: this.props.disabled,
    };
    return (
      <Element {...rootProps}>
        <button {...buttonProps}>
          { icon !== null && <Icon /> }
          {children}
        </button>
      </Element>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconAlignment: PropTypes.string,
  theme: PropTypes.shape({}),
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  onClick: PropTypes.func,
  iconButton: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  type: 'primary',
  size: 'small',
  className: '',
  href: '',
  icon: null,
  iconAlignment: 'left',
  theme: {},
  disabled: false,
  flat: false,
  bordered: false,
  borderless: false,
  onClick: null,
  iconButton: false,
};

export default themr('CBBUTTON', defaultTheme)(Button);
