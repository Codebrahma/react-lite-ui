import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';
import defaultTheme from "./theme.scss";

const ListItem = (props) => {
  function handleClick(e) {
    const { onClick } = props;
    onClick(e);
  }
  const { children, className, theme } = props;
  const classes = cx(theme.item, className);
  return (
    <div onClick={handleClick} className={classes}>
      {children}
    </div>
  );
};

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  onClick: PropTypes.func,
  theme: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.string,
};

ListItem.defaultProps = {
  children: 'ListItem',
  onClick: (e) => { console.log(e); },
  theme: defaultTheme,
  className: '',
};

export default themr('CBListItem', defaultTheme)(ListItem);
