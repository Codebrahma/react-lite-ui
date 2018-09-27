import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import defaultTheme from './theme.scss';

const Card = ({
  children,
  className,
  theme,
  wrapContent,
  elevation,
  noPadding,
  header, ...other
}) => {
  const classes = classnames(theme.card, theme[`elevation-${elevation}`], {
    [theme.wrapContent]: wrapContent,
    [theme.noPadding]: noPadding,
  }, className);
  const headerClass = classnames(theme.cardHeader);

  let cardHeader;
  if (typeof header === 'string') {
    cardHeader = (
      <div className={headerClass}>
        <span>{header}</span>
      </div>
    );
  } else if (typeof header === 'function') {
    cardHeader = header();
  }

  return (
    <div data-react-toolbox="card" className={classes} {...other}>
      {cardHeader}
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    card: PropTypes.string,
    cardHeader: PropTypes.string,
  }),
  wrapContent: PropTypes.bool,
  noPadding: PropTypes.bool,
  elevation: PropTypes.oneOf(['low', 'medium', 'high']),
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Card.defaultProps = {
  className: null,
  elevation: 'low',
  theme: {},
  wrapContent: false,
  noPadding: false,
  header: null,
};

export default themr('CBCard', defaultTheme)(Card);
