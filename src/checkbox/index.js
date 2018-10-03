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
  /*  eslint-disable jsx-a11y/click-events-have-key-events  */
  /*  eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <span onClick={() => onClick(label, value)}>
      <span className={classNames}>
        <input
          type="checkbox"
          {...props}
        />
        <span className="check-item" />
      </span>
      {label && <span className={theme.label}>{label}</span>}
    </span>
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
  label: null, // Should send a name if they need the callback value
  onClick: () => {},
  checked: false,
  additionalClass: '',
  theme: defaultTheme,
  value: '',
};

export default themr('CBCheckbox', defaultTheme)(Checkbox);
