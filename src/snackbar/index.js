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

  componentWillReceiveProps(nextProps) {
    if (nextProps.active === this.state.active) {
      return;
    }
    if (nextProps.active) {
      this.showSnackbar();
    } else {
      this.dismissSnackbar();
    }
  }

  scheduleTimeout = (props) => {
    const { timeout } = props;
    if (this.curTimeout) clearTimeout(this.curTimeout);
    this.curTimeout = setTimeout(() => {
      this.dismissSnackbar();
      this.curTimeout = null;
    }, timeout);
  }

  componentWillUnmount() {
    clearTimeout(this.curTimeout);
  }

  showSnackbar = () => {
    if (this.props.autoClose) {
      this.scheduleTimeout(this.props);
    }
    this.setState({
      active: true,
    });
  }

  dismissSnackbar = () => {
    clearTimeout(this.curTimeout);
    this.setState({
      active: false,
    });
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    const {
      theme, additionaClasses, position, children,
    } = this.props;
    const { active } = this.state;
    const classes = classnames(theme.snackbar, additionaClasses);
    return (
      <div className={classnames(theme.snackbarWrapper, position, active ? 'active' : '')}>
        <div className={classes}>
          { children }
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
};

Snackbar.defaultProps = {
  additionaClasses: null,
  timeout: 2000,
  autoClose: true,
  position: 'bottom',
};

export default themr('CBSnackbar', defaultTheme)(Snackbar);
