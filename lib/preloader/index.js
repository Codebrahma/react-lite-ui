import React from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import defaultTheme from './theme.scss';


const Loader = ({ theme, classes }) => (
  <div className={theme.loaderWrapper}>
    <div className={classes}>
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
);

const Preloader = ({
  theme, size, loader, color, className,
}) => {
  const renderLoader = color ? loader : `${loader}Default`;
  const classes = classnames(
    className,
    theme[renderLoader],
    theme[loader === 'dotsLoader' ? `${size}Dots` : size],
    theme[loader === 'dotsLoader' && `${color}Dots`],
    theme[loader === 'fadeAwayLoader' && `${color}Fade`],
    theme[loader === 'linesLoader' && `${color}Lines`],
    theme[loader === 'linesLoader' && `${size}Lines`],
    theme[((loader === 'colorCircleLoader' || 'circlesLoader')) && `${color}`],
    {
      [theme.mediumDots]: loader === 'dotsLoader' && !size,
    },
  );
  return (
    <Loader loader={loader} classes={classes} size={size} color={color} theme={theme} />
  );
};

Preloader.propTypes = {
  loader: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
};

Loader.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  classes: PropTypes.string.isRequired,
};

Preloader.defaultProps = {
  loader: 'circlesLoader',
  size: 'medium',
  color: undefined,
  theme: defaultTheme,
  className: '',
};

export default themr('CBPreloader', defaultTheme)(Preloader);
