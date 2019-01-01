import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { MdClose } from 'react-icons/md';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.module.scss';

class Snackbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    const { active } = this.props;
    if (active) {
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
    const { active } = this.state;
    const { active: activeProp } = this.props;
    if (state.active !== active) {
      if (activeProp) {
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
    const { autoClose } = this.props;
    if (autoClose) {
      this.scheduleTimeout();
    }
    this.setState({
      active: true,
    });
  };

  dismissSnackbar = () => {
    const { onClose } = this.props;
    clearTimeout(this.curTimeout);
    this.setState({
      active: false,
    });
    if (onClose) {
      onClose();
    }
  };

  render() {
    const {
      theme, additionaClasses, position, children, autoClose,
    } = this.props;
    const { active } = this.state;
    const classes = classnames(theme.snackbar, additionaClasses);
    return (
      <div
        aria-label="snackbar"
        className={classnames(
          theme.snackbarWrapper,
          theme[position],
          position,
          active ? `${theme.active} active` : '',
        )}
      >
        <div className={classes}>
          <div className={theme.snackbarContent}>{children}</div>
          {
            !autoClose && (
              <MdClose
                onClick={() => this.dismissSnackbar()}
                className={classnames(theme.close)}
              />
            )
          }
        </div>
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
