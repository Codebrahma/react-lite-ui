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
    const {
      theme, className, body, title, footer, children,
    } = this.props;
    const { open } = this.state;
    const classes = cx(theme.modal, open ? theme['d-block'] : theme['d-none'], className);
    const backdrop = cx(theme['modal-backdrop'], open ? theme['d-block'] : theme['d-none']);
    return (
      <div className={backdrop}>
        <div className={classes}>
          {
           children || <div>
             <div className={theme['modal-title']}>
               { title || '' }
             </div>
             <div className={theme['modal-body']}>
               { body || '' }
             </div>
             <div className={theme['modal-footer']}>
               { footer || '' }
             </div>
           </div>
          }
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
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]),
  body: PropTypes.node,
  footer: PropTypes.node,
  title: PropTypes.string,
};

Modal.defaultProps = {
  theme: defaultTheme,
  className: '',
  body: null,
  title: null,
  footer: null,
  children: null,
};

export default themr('CBModal', defaultTheme)(Modal);
