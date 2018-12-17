import React from 'react';
import PropTyes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

class Popover extends React.Component {
  state = {
    isVisible: false,
    blockBlurEvent: false,
  };

  togglePopoverClick = (e) => {
    /*
     *  In safari the element is not retaining focus after click,
     *  so, Blur event is never called for hiding popover.
     *  To resolve the element is focussed manually when clicked,
     *  which triggers blur when clicked outside popover.
    */
    e.target.focus();
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));
  };

  hidePopover = () => {
    const { blockBlurEvent } = this.state;
    if (!blockBlurEvent) {
      this.setState({
        isVisible: false,
      });
    }
  };

  defaultActionClick = () => {
    const { onConfirm } = this.props;
    const closePopover = onConfirm();
    if (closePopover) {
      this.setState({
        isVisible: false,
      });
    }
  }

  blockBlurEvent = (status) => {
    this.setState({
      blockBlurEvent: status,
    });
  };

  /*  eslint-disable jsx-a11y/click-events-have-key-events  */
  /*  eslint-disable jsx-a11y/no-static-element-interactions */
  renderActionContent = () => {
    const { theme, actionContent } = this.props;
    return (
      <span
        className={theme.actionWrapper}
        onClick={this.defaultActionClick}
        aria-label="action-content"
      >
        {typeof actionContent === 'string' ? (
          <span className={theme.actionContent}>{actionContent}</span>
        ) : (
          actionContent
        )}
      </span>
    );
  };

  render() {
    const {
      className,
      theme,
      content,
      children,
      title,
      position,
      onConfirm,
      noAction,
      actionContent,
      ...other
    } = this.props;
    const { isVisible } = this.state;
    const classes = classnames(theme.popover, className);
    const popoverClasses = classnames(
      theme[`${position}Popover`],
      theme.popoverWrapper,
    );
    return (
      <div className={classes}>
        <div
          className={theme.contentWrapper}
          onClick={e => this.togglePopoverClick(e)}
          onBlur={this.hidePopover}
          {...other}
        >
          {children}
        </div>
        {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
        {isVisible && (
          <div
            className={popoverClasses}
            onMouseEnter={() => this.blockBlurEvent(true)}
            onMouseLeave={() => this.blockBlurEvent(false)}
            onBlur={this.hidePopover}
            aria-label="popover-content"
            id="popover-test"
            tabIndex={0}
          >
            {title && <span className={theme.title} aria-label="popover-title">{title}</span>}
            <div className={classnames(theme.popoverContent)}>{content}</div>
            {!noAction && this.renderActionContent()}
            <span className={theme.popoverArrow} />
          </div>
        )}
      </div>
    );
  }
}

Popover.propTypes = {
  theme: PropTyes.oneOfType([PropTyes.object]),
  className: PropTyes.string,
  children: PropTyes.oneOfType([PropTyes.node, PropTyes.element]),
  content: PropTyes.oneOfType([PropTyes.node, PropTyes.element]).isRequired,
  title: PropTyes.string,
  position: PropTyes.string,
  onConfirm: PropTyes.func,
  noAction: PropTyes.bool,
  actionContent: PropTyes.oneOfType([PropTyes.element, PropTyes.string]),
};

Popover.defaultProps = {
  theme: defaultTheme,
  className: '',
  children: null,
  title: null,
  position: 'bottomLeft',
  onConfirm: () => true,
  noAction: false,
  actionContent: 'confirm',
};

export default themr('CBPopover', defaultTheme)(Popover);
