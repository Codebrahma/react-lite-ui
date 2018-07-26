import React from 'react';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import defaultTheme from './theme.scss';

const Checkbox = ({
  label,
  value,
  onClick,
  checked,
  additionalClass,
  theme,
  ...props
}) => {
  const classNames = cx(theme.checkbox, {
    [theme.checked]: checked,
  }, additionalClass);
  return (
    <label className={classNames}>
      <input
        type="checkbox"
        onClick={() => onClick(label, label)}
        {...props}
      />
      <span className="check-item" />
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  additionalClass: PropTypes.string,
  theme: PropTypes.object, // eslint-disable-line
};

Checkbox.defaultProps = {
  label: 'check', // Should send a name if they need the callback value
  onClick: () => {},
  checked: false,
  additionalClass: '',
  theme: defaultTheme,
  value: '',
};

export default themr('CBCheckbox', defaultTheme)(Checkbox);
