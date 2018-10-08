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
    const containerclass = cx(theme['drawer-container'], theme[`drawer-${open ? 'open' : 'close'}`]);
    return (
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div className={containerclass} onClick={this.handleClose}>
        <div className={classes}>
          {children}
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
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
