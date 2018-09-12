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

  render() {
    const { theme, className, position } = this.props;
    const { open } = this.state;
    const classes = cx(theme.drawer, className, theme[position], open ? theme[`${position}-open`] : theme[`${position}-close`]);
    return (
      <div className={classes}>
            ealkfkabfkjbfk
            wkfbigfeigeiuhi
      </div>
    );
  }
}

Drawer.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
};

Drawer.defaultProps = {
  theme: defaultTheme,
  className: '',
  position: 'left',
};

export default themr('CBDrawer', defaultTheme)(Drawer);
