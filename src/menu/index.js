import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import defaultTheme from './theme.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderChildren = (...children) => {
    const { theme } = this.props;
    return children.map((child) => {
      const { props } = child;
      if (props && props.submenu) {
        return (
          <div
            key={`menu-${props.title}-${theme.submenu}`}
            className={theme.wrapper}
          >
            <div className={theme.submenu}>
              <span className={theme.menuitem}>{props.title}</span>
                <div className={theme.arrow} />
            </div>
            {child}
          </div>
        );
      }
      return React.cloneElement(child, { className: theme.menuitem });
    });
  };

  render() {
    const { theme, className, children } = this.props;
    const menuclass = cx(theme.menu, className);
    return (
      <div className={theme.wrapper}>
        <div className={menuclass}>
          {typeof children === 'object'
            ? this.renderChildren(...children)
            : this.renderChildren(children)}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

Menu.defaultProps = {
  theme: defaultTheme,
  className: '',
  children: null,
};

export default Menu;
