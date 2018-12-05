import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import defaultTheme from './theme.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Render all submenus and children of menu.
  renderChildren = (...children) => {
    const { theme } = this.props;
    return children.map((child) => {
      const { props } = child;
      /*
       If the child in current iteration is a submenu,
       then render submenu title and a submenu popup to contain
       all the childs of the submenu.
      */
      if (props && props.submenu) {
        return (
          <div
            key={`menu-${props.title}-${theme.submenu}`}
            className={theme.wrapper}
          >
            <div className={theme.submenu}>
              <span className={theme.menuitem}>
                <span>{props.title}</span>
                <div className={theme.arrow} />
              </span>
            </div>
            {child}
          </div>
        );
      }
      /*
      Else if the child in current iteration is not a submenu, i.e.,
      it is a menu item, then clone the element and pass the style
      class and return the child.
      */
      return React.cloneElement(child, {
        className: theme.menuitem,
        key: `menu-item-${child.props.children}`,
      });
    });
  };

  render() {
    const {
      theme,
      className,
      children,
      title,
    } = this.props;
    const menuclass = cx(theme.menu, className, { [theme.mainWrapper]: title === null } );
    const wrapperClass = cx(theme.wrapper);
    return (
      <div className={wrapperClass} data-key={title || 'main-menu'}>
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
  title: PropTypes.string,
};

Menu.defaultProps = {
  theme: defaultTheme,
  className: '',
  children: null,
  title: null,
};

export default Menu;
