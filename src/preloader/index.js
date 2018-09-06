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

const Preloader = ({theme, size, loader}) => {
  const classes = classnames(theme[loader], theme[size], {
    [theme.circlesLoader]: !loader,
    [theme.medium]: !size
  })
  return (
    <Loader loader={loader} classes={classes} size={size} theme={theme}/>
  )
}

export default themr('CBPreloader', defaultTheme)(Preloader);