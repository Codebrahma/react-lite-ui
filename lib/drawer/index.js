import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.module.scss';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.drawerRef = null;
  }

  static getDerivedStateFromProps(props) {
    return { open: props.open };
  }

  componentDidUpdate() {
    if (this.state.open && this.drawerRef !== null) {
      this.drawerRef.focus();
    }
  }

  handleClose = () => {
    const { onClose } = this.props;
    this.setState({
      open: false,
    });
    onClose();
  }

  render() {
    const {
      theme, className, position, children,
    } = this.props;
    const { open } = this.state;
    const classes = cx(theme.drawer, className, theme[position], open ? theme[`${position}-open`] : theme[`${position}-close`]);
    return (
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        className={classes}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        // eslint-disable-next-line no-return-assign
        ref={ref => this.drawerRef = ref}
        onBlur={this.handleClose}
      >
        {children}
      </div>
    );
  }
}

Drawer.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  // eslint-disable-next-line react/no-unused-prop-types
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

Drawer.defaultProps = {
  theme: defaultTheme,
  className: '',
  position: 'left',
  children: null,
  open: false,
  onClose: () => {},
};

export default themr('CBDrawer', defaultTheme)(Drawer);
