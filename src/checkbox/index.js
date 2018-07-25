import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import defaultTheme from './style.scss';

const Checkbox = ({
  onClick,
  checked,
  additionalClass,
  theme,
}) => {
  const classNames = cx(theme.checkbox, {
    [theme.checked]: checked,
  }, additionalClass);
  return (
    <label className={classNames}>
      <input
        type="checkbox"
        onClick={onClick}
      />
      <span className="check-item" />
    </label>
  );
};

Checkbox.propTypes = {
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  additionalClass: PropTypes.string,
  theme: PropTypes.object, // eslint-disable-line
};

Checkbox.defaultProps = {
  onClick: () => {},
  checked: false,
  additionalClass: '',
  theme: defaultTheme,
};

export default Checkbox;
