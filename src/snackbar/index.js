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
    }
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
      this.props.onClose()
    }
  }

  render() {
    const { theme, additionaClasses, children } = this.props;
    const { active } = this.state;
    const classes = classnames(theme.snackbar, active ? 'active' : '', additionaClasses)
    return (
      <div className={classes}>
        { children }
      </div>
    )
  }
}

Snackbar.propTypes = {
  additionaClasses: PropTypes.string,
  timeout: PropTypes.number,
  onClose: PropTypes.func,
  autoClose: PropTypes.bool,
}

Snackbar.defaultProps = {
  additionaClasses: null,
  timeout: 2000,
  autoClose: true,
};

export default themr('CBSnackbar', defaultTheme)(Snackbar);
