import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

const Select = (props) => {
  function renderOptions(options) {
    return options.map(option => <option key={option.label}>{option.label}</option>);
  }
  const { options, theme, className } = props;
  const classes = cx(theme.select, className);
  return (
    <select className={classes}>
      {renderOptions(options)}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]),
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  className: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  className: '',
};

export default themr('CBSelect', defaultTheme)(Select);
