import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';

import defaultTheme from './theme.scss';

class Button extends Component {
  render() {
    const {
      children, type, size, className, href, icon, iconAlignment, theme, ...others
    } = this.props;
    const Element = href ? 'a' : 'button';
    const classes = classnames(theme.button, theme[type], theme[size], className);

    const props = {
      ...others,
      href,
      ref: (node) => { this.buttonNode = node; },
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
    };
    return (
      <Element {...props}>
        {children}
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
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  iconAlignment: PropTypes.string,
  theme: PropTypes.shape({}),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'Button',
  type: 'default',
  size: 'medium',
  className: '',
  href: '',
  icon: null,
  iconAlignment: 'left',
  theme: {},
  disabled: false,
  onClick: null,
};

export default themr('CBBUTTON', defaultTheme)(Button);
