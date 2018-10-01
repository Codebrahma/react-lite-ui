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
  onItemClick,
}) => {
  let childrens = items.length ? items : children;
  childrens = (typeof childrens[0] === 'string')
    ? childrens
      .map((child, index) =>
        (
          <ListItem
            onClick={() => onItemClick(index)}
            key={child}
          >
            {child}
          </ListItem>
        ))
    : childrens;
  const classes = cx(theme.list, theme[raised], className);
  return (
    <div className={classes} id="list-view">
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
  onItemClick: PropTypes.func,
};

List.defaultProps = {
  children: <div><ListItem /><ListItem /><ListItem /></div>,
  theme: defaultTheme,
  items: [],
  raised: '',
  className: '',
  onItemClick: (e) => { console.log(e); },
};

export default themr('CBList', defaultTheme)(List);
