import React from 'react';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';
import classnames from 'classnames';


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

const Preloader = ({theme, size, loader, color}) => {
  const renderLoader = color ? loader : `${loader}Default`;
  const classes = classnames(
    theme[renderLoader],
    theme[loader === 'dotsLoader' ? `${size}Dots` : size],
    theme[loader === 'dotsLoader' && `${color}Dots`],
    theme[loader === 'fadeAwayLoader' && `${color}Fade`],
    theme[((loader === 'colorCircleLoader') || !loader) && `${color}`],
    {
      [theme.circlesLoader]: !loader,
      [theme.medium]: !size,
      [theme.mediumDots]: loader === 'dotsLoader' && !size 
    }
  )
  return (
    <Loader loader={loader} classes={classes} size={size} color={color} theme={theme}/>
  )
}

export default themr('CBPreloader', defaultTheme)(Preloader);
