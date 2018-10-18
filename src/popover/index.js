import React from 'react';
import PropTyes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

class Popover extends React.Component {
  state = {
    isOpen: false,
  }

  showPopover = () => {
    this.setState({
      isOpen: true,
    });
  }

  hidePopover = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const {
      className,
      theme,
      content,
      children,
      title,
      position,
      popoverWidth,
      ...other
    } = this.props;
    const classes = classnames(theme.popover, className);
    const popoverClasses = classnames(theme[`${position}Popover`], theme.popoverWrapper);
    return (
      <div
        className={classes}
        {...other}
        onMouseEnter={this.showPopover}
        onMouseLeave={this.hidePopover}
      >
        <div className={theme.contentWrapper}>
          {children}
        </div>
        {
          this.state.isOpen && (
            <div className={popoverClasses}>
              {title && <span className={theme.title}>{title}</span>}
              <div className={classnames(theme.popoverContent)}>
                {content}
              </div>
              <span className={theme.popoverArrow} />
            </div>
          )
        }
      </div>
    );
  }
}

Popover.propTypes = {
  theme: PropTyes.oneOfType([PropTyes.object]),
  className: PropTyes.string,
  children: PropTyes.oneOfType([PropTyes.node, PropTyes.element]),
  content: PropTyes.oneOfType([PropTyes.node, PropTyes.element]),
  title: PropTyes.string,
  position: PropTyes.string,
};

Popover.defaultProps = {
  theme: defaultTheme,
  className: '',
  children: null,
  content: 'content here',
  title: '',
  position: 'bottomLeft',
};

export default themr('CBPopover', defaultTheme)(Popover);
