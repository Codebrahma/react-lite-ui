import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';
import defaultTheme from './theme.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
    });
  }

  closeModal = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    const { theme, className } = this.props;
    const { open } = this.state;
    const classes = cx(theme.modal, open ? theme['d-block'] : theme['d-none'], className);
    const backdrop = cx(theme['modal-backdrop'], open ? theme['d-block'] : theme['d-none']);
    return (
      <div className={backdrop}>
        <div className={classes}>
      Modal
          <div className={theme.close} onClick={this.closeModal} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  theme: defaultTheme,
  className: '',
};

export default themr('CBModal', defaultTheme)(Modal);
