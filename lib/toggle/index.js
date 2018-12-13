import React from 'react';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import defaultTheme from './theme.scss';

const Toggle = ({
  label,
  value,
  onClick,
  toggled,
  additionalClass,
  theme,
  ...props
}) => {
  const classNames = cx(theme.toggle, {
    [theme.toggled]: toggled,
  }, additionalClass);

  return (
    <label
      className={classNames}
      id="toggle_component"
    >
      <input
        type="checkbox"
        name={label} // when name prop isn't passed, name sets to same value as label prop
        onClick={() => onClick(label, value)}
        {...props}
      />
      <span className="toggle-item" />
    </label>
  );
};

Toggle.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  toggled: PropTypes.bool,
  additionalClass: PropTypes.string,
  theme: PropTypes.object, // eslint-disable-line
};

Toggle.defaultProps = {
  label: 'toggle', // Should send a name if they need the callback value
  onClick: () => {},
  toggled: false,
  additionalClass: '',
  theme: defaultTheme,
  value: '',
};

export default themr('CBToggle', defaultTheme)(Toggle);

