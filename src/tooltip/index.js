import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import defaultTheme from './theme.scss';

class Tooltip extends React.Component {
  state = { tooltipActive: false };

  enableTooltip = () => {
    this.setState({
      tooltipActive: true,
    });
  }

  disableTooltip = () => {
    this.setState({
      tooltipActive: false,
    });
  }

  render() {
    const {
      children,
      className,
      theme,
      tooltipText,
      top,
      ...other
    } = this.props;
    const classes = classnames(theme.tooltip, className, theme.baseContent);
    return (
      <div
        className={classes}
        id="tooltip_wrapper"
        {...other}
        onMouseEnter={this.enableTooltip}
        onMouseLeave={this.disableTooltip}
      >
        <div className={theme.contentWrapper}>
          {children}
        </div>
        {
          this.state.tooltipActive && (
            <div className={theme.tip} id="tip">
              <div className={classnames(theme.tooltipContent, { top })}>
                {tooltipText}
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.object]),
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  tooltipText: PropTypes.string.isRequired,
  top: PropTypes.bool,

};

Tooltip.defaultProps = {
  children: null,
  className: '',
  theme: defaultTheme,
  image: null,
  alt: '',
  title: '',
  top: undefined,
};

export default themr('CBTooltip', defaultTheme)(Tooltip);
