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

const Preloader = ({ theme, size, loader }) => {
  const classes = classnames(theme[loader], theme[loader === 'dotsLoader' ? `${size}Dots` : size], {
    [theme.circlesLoader]: !loader,
    [theme.medium]: !size,
    [theme.mediumDots]: loader === 'dotsLoader' && !size,
  });
  return (
    <Loader loader={loader} classes={classes} size={size} theme={theme} />
  );
};

export default themr('CBPreloader', defaultTheme)(Preloader);
