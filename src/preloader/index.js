import React from 'react';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';
import classnames from 'classnames';


const Loader = ({theme,classes}) => {
  return (
    <div className={theme.loaderWrapper}>
      <div className={classes}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

const Preloader = ({theme,loader}) => {
  const classes = classnames({
    [theme.circlesLoader]: !loader,
    [theme.dotsLoader]: loader === 'dots',
    [theme.fadeAwayLoader]: loader === 'fadeAway',
    [theme.colorCircleLoader]: loader === 'colorCircle'
  })
  return (
    <Loader loader={loader} classes={classes} theme={theme}/>
  )
}

export default themr('CBPreloader', defaultTheme)(Preloader);