import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';
import { transitionEndEventName } from '../globals/helper';
import defaultTheme from './theme.module.scss';
import '../globals/fonts.scss';

const getDOMNode = findDOMNode;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalWrapperRef = null;
    this.modalRef = null;
    this.state = {
      open: props.open,
    };
  }

  static getDerivedStateFromProps(props) {
    return { open: props.open };
  }

  closeModal = () => {
    const modalWrapper = getDOMNode(this.modalWrapperRef);
    const modal = getDOMNode(this.modalRef);
    const { theme } = this.props;
    modalWrapper.classList.add(theme.animation);
    modal.classList.add(theme.animation);
    const transitionEnd = transitionEndEventName();
    modalWrapper.addEventListener(transitionEnd, this.removeModal, false);
  };

  removeModal = () => {
    const { onClose } = this.props;
    const modalWrapper = getDOMNode(this.modalWrapperRef);
    const modal = getDOMNode(this.modalRef);
    const { theme } = this.props;
    modalWrapper.classList.remove(theme.animation);
    modal.classList.remove(theme.animation);
    this.setState({
      open: false,
    });
    onClose();
  }

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
  };

  renderModalFooter = (footer) => {
    const { theme } = this.props;
    if (footer) {
      return (
        <div className={theme['modal-footer']} aria-label="card-footer">
          {
            typeof footer === 'function'
              ? footer()
              : footer
          }
        </div>
      );
    }
    return null;
  };

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
        ref={(ref) => {
          this.modalWrapperRef = ref;
        }}
      >
        {open && (
          <div
            id="modal"
            className={classes}
            onClick={e => e.stopPropagation()}
            ref={(ref) => {
              this.modalRef = ref;
            }}
          >
            {this.renderModalTitle(title)}
            <div className={theme['modal-body']} aria-label="card-body">
              {children || (
                typeof body === 'function'
                  ? body()
                  : body
              ) || null}
            </div>
            {this.renderModalFooter(footer)}
            <i
              className={cx(theme.close, 'icon-cross')}
              onClick={this.closeModal}
            />
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
  body: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  title: PropTypes.string,
  closeOnBackdropClick: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
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
