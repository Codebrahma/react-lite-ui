import React from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import defaultTheme from './theme.scss';


const Loader = ({ theme, classes }) => (
    <div className={theme.loaderWrapper}>
      <div className={classes}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );

const Preloader = ({theme, size, loader, color, className}) => {
  const renderLoader = color ? loader : `${loader}Default`;
  const classes = classnames(
    className,
    theme[renderLoader],
    theme[loader === 'dotsLoader' ? `${size}Dots` : size],
    theme[loader === 'dotsLoader' && `${color}Dots`],
    theme[loader === 'fadeAwayLoader' && `${color}Fade`],
    theme[((loader === 'colorCircleLoader') || !loader) && `${color}`],
    {
      [theme.circlesLoader]: !loader,
      [theme.mediumDots]: loader === 'dotsLoader' && !size 
    }
  )
  return (
    <Loader loader={loader} classes={classes} size={size} color={color} theme={theme}/>
  )
}

Preloader.propTypes = {
  loader: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.object])
};

Preloader.defaultProps = {
  loader: undefined,
  size: 'medium',
  color: undefined
};

export default themr('CBPreloader', defaultTheme)(Preloader);
