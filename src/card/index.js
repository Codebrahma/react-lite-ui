import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
// import { CARD } from '../identifiers';
import defaultTheme from './defaultTheme.scss';

const Card = ({ children, className, raised, theme, ...other}) => {
  const classes = classnames(theme.card, {
    [theme.raised]: raised,
  }, className);

  return (
    <div data-react-toolbox="card" className={classes} {...other}>
      {children}
    </div>
  );
};

export default themr('CBCard', defaultTheme)(Card);