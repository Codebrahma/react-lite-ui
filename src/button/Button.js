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
      iconAlignment: 'left',
    };

    getIcon = (icon, iconAlignment, theme) => {
      const iconClasses = classnames(theme.icon, theme[`icon-${iconAlignment}`]);
      return <FontIcon className={iconClasses} value={icon} />;
    }

    handleMouseUp = (event) => {
      this.buttonNode.blur();
      if (this.props.onMouseUp) this.props.onMouseUp(event);
    };

    handleMouseLeave = (event) => {
      this.buttonNode.blur();
      if (this.props.onMouseLeave) this.props.onMouseLeave(event);
    };

    render() {
      const {
        children, type, size, className, href, icon, iconAlignment, theme, ...others
      } = this.props;
      const element = href ? 'a' : 'button';

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

      return React.createElement(element, props,
        icon ? this.getIcon(icon, iconAlignment, theme) : null,
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