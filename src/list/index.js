import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';
import ListItem from '../listitem';

const List = ({
  children,
  className,
  theme,
  items,
  raised,
}) => {
  let childrens = items.length ? items : children;
  childrens = (typeof childrens[0] === 'string')
    ? childrens.map(child => <span key={child}>{child}</span>)
    : childrens;
  const classes = cx(theme.list, theme[raised], className);
  return (
    <div className={classes}>
      {childrens}
    </div>
  );
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  className: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.object]),
  items: PropTypes.oneOfType([PropTypes.array]),
  raised: PropTypes.oneOf(['', 'low', 'medium', 'high']),
};

List.defaultProps = {
  children: <div><ListItem /><ListItem /><ListItem /></div>,
  theme: defaultTheme,
  items: [],
  raised: '',
  className: '',
};

export default themr('CBList', defaultTheme)(List);
