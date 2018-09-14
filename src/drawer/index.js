import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
    });
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    const {
      theme, className, position, children,
    } = this.props;
    const { open } = this.state;
    const classes = cx(theme.drawer, className, theme[position], open ? theme[`${position}-open`] : theme[`${position}-close`]);
    const containerclass = cx(theme['drawer-container'], theme[`drawer-${open ? 'open' : 'close'}`]);
    return (
      <div className={containerclass} onClick={this.handleClose}>
        <div className={classes}>
          {children}
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]),
  theme: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  open: PropTypes.bool,
};

Drawer.defaultProps = {
  theme: defaultTheme,
  className: '',
  position: 'left',
  children: null,
  open: false,
};

export default themr('CBDrawer', defaultTheme)(Drawer);
