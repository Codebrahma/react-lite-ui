import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';

import InjectFontIcon from '../font_icon/FontIcon';
import rippleFactory from '../ripple/Ripple';

const factory = (ripple, FontIcon) => {
  class Button extends Component {
    static defaultProps = {
      type: 'default',
      size: 'medium',
      className: '',
      href: '',
    };

    handleMouseUp = (event) => {
      this.buttonNode.blur();
      if (this.props.onMouseUp) this.props.onMouseUp(event);
    };

    handleMouseLeave = (event) => {
      this.buttonNode.blur();
      if (this.props.onMouseLeave) this.props.onMouseLeave(event);
    };

    render() {
      const { children, type, size, className, href, icon, theme, ...others } = this.props;
      const element = href ? 'a' : 'button';

      const classes = classnames(theme.button, {
        [theme[type]]: true,
        [theme[size]]: true,
      }, className);

      const props = {
        ...others,
        href,
        ref: (node) => { this.buttonNode = node; },
        className: classes,
        disabled: this.props.disabled,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
      };

      return React.createElement(element, props,
        icon ? <FontIcon className={theme.icon} value={icon} /> : null,
        children,
      );
    }
  }

  return ripple(Button);
};

const Button = factory(rippleFactory({ centered: false }), InjectFontIcon);
export default themr('CBBUTTON')(Button);
export { factory as buttonFactory };
export { Button };