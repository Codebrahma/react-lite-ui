import React from 'react';
import PropTyes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

class Popover extends React.Component {
  state = {
    hoverOpen: false,
    clickOpen: false,
  }

  showPopover = () => {
    this.setState({
      hoverOpen: true,
    });
  }

  hidePopover = () => {
    this.setState({
      hoverOpen: false,
    });
  }

  handleClick = () => {
    this.setState(prevState => ({
      clickOpen: !prevState.clickOpen,
    }));
  }

  render() {
    const {
      className,
      theme,
      content,
      children,
      title,
      position,
      openOn,
      ...other
    } = this.props;
    const { hoverOpen, clickOpen } = this.state;
    const classes = classnames(theme.popover, className);
    const popoverClasses = classnames(theme[`${position}Popover`], theme.popoverWrapper);
    /*  eslint-disable jsx-a11y/click-events-have-key-events  */
    /*  eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div
        className={classes}
        {...other}
        onMouseEnter={(openOn === 'hover') ? this.showPopover : null}
        onMouseLeave={(openOn === 'hover') ? this.hidePopover : null}
        onClick={(openOn === 'click') ? this.handleClick : null}
      >
        <div className={theme.contentWrapper}>
          {children}
        </div>
        {
          (hoverOpen || clickOpen) && (
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
  openOn: PropTyes.string,
};

Popover.defaultProps = {
  theme: defaultTheme,
  className: '',
  children: null,
  content: 'content here',
  title: '',
  position: 'bottomLeft',
  openOn: 'hover',
};

export default themr('CBPopover', defaultTheme)(Popover);
