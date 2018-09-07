import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';

import defaultTheme from './theme.scss';

const List = ({
  children, className, theme, items,
}) => {
  const childrens = items.length ? items : children;
  const classes = cx(theme.list, className);
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
};

List.defaultProps = {
  children: <div>List</div>,
  className: '',
  theme: defaultTheme,
  items: [],
};

export default themr('CBList', defaultTheme)(List);
