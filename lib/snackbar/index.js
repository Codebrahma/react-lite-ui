import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

class Snackbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    if (this.props.active) {
      this.showSnackbar();
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (!state) {
      return {
        active: props.active,
      };
    }
    if (props.active === state.active) {
      return null;
    }
    return {
      active: props.active,
    };
  }

  componentDidUpdate(_, state) {
    if (state.active !== this.state.active) {
      if (this.props.active) {
        this.showSnackbar();
      } else {
        this.dismissSnackbar();
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.curTimeout);
  }

  scheduleTimeout = () => {
    const { timeout } = this.props;
    if (this.curTimeout) clearTimeout(this.curTimeout);
    this.curTimeout = setTimeout(() => {
      this.dismissSnackbar();
      this.curTimeout = null;
    }, timeout);
  };

  showSnackbar = () => {
    if (this.props.autoClose) {
      this.scheduleTimeout();
    }
    this.setState({
      active: true,
    });
  };

  dismissSnackbar = () => {
    clearTimeout(this.curTimeout);
    this.setState({
      active: false,
    });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const {
      theme, additionaClasses, position, children,
    } = this.props;
    const { active } = this.state;
    const classes = classnames(theme.snackbar, additionaClasses);
    return (
      <div
        aria-label="snackbar"
        className={classnames(
          theme.snackbarWrapper,
          position,
          active ? 'active' : '',
        )}
      >
        <div className={classes}>{children}</div>
      </div>
    );
  }
}

Snackbar.propTypes = {
  additionaClasses: PropTypes.string,
  timeout: PropTypes.number,
  onClose: PropTypes.func,
  autoClose: PropTypes.bool,
  position: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.object]),
};

Snackbar.defaultProps = {
  additionaClasses: '',
  timeout: 2000,
  autoClose: true,
  position: 'bottom',
  onClose: () => {},
  active: false,
  children: null,
  theme: defaultTheme,
};

export default themr('CBSnackbar', defaultTheme)(Snackbar);
