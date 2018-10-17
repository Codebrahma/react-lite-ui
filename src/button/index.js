import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';

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
      ...others
    } = this.props;
    const Element = href ? 'a' : 'div';
    const classes = classnames(
      theme.button,
      theme[type],
      theme[size],
      className,
      (flat || bordered || borderless) && 'flat',
      theme[bordered ? `${type}Bordered` : ''],
      theme[borderless ? `${type}Borderless` : ''],
    );

    const rootProps = {
      ...others,
      href: !href ? undefined : href,
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
          {children}
        </button>
      </Element>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
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
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'Button',
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
  onClick: null,
};

export default themr('CBBUTTON', defaultTheme)(Button);
