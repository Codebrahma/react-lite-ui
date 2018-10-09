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
  };

  renderModalTitle = (title) => {
    const { theme } = this.props;
    if (title) {
      return (
        <div className={theme['modal-title']} aria-label="card-header">
          {title || ''}
        </div>
      );
    }
    return null;
  }

  renderModalFooter = (footer) => {
    const { theme } = this.props;
    if (footer) {
      return (
        <div className={theme['modal-footer']} aria-label="card-footer">
          {footer}
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      theme,
      className,
      body,
      title,
      footer,
      children,
      closeOnBackdropClick,
    } = this.props;
    const { open } = this.state;
    const classes = cx(
      theme.modal,
      open ? theme['d-block'] : theme['d-none'],
      className,
    );
    const backdrop = cx(
      theme['modal-backdrop'],
      open ? theme['d-block'] : theme['d-none'],
    );
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    return (
      <div
        className={backdrop}
        onClick={closeOnBackdropClick ? this.closeModal : undefined}
      >
        {open && (
          <div id="modal" className={classes}>
            {this.renderModalTitle(title)}
            <div className={theme['modal-body']} aria-label="card-body">
              {children || body || null}
            </div>
            {this.renderModalFooter(footer)}
            <div className={theme.close} onClick={this.closeModal} />
          </div>
        )}
      </div>
    );
  }
}

Modal.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  body: PropTypes.node,
  footer: PropTypes.node,
  title: PropTypes.string,
  closeOnBackdropClick: PropTypes.bool,
};

Modal.defaultProps = {
  theme: defaultTheme,
  className: '',
  body: null,
  title: null,
  footer: null,
  children: null,
  closeOnBackdropClick: true,
};

export default themr('CBModal', defaultTheme)(Modal);
