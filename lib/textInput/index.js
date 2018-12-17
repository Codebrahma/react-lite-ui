import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import defaultTheme from './theme.scss';

const TextInput = ({
  additionalClasses,
  theme,
  disabled,
  ...others
}) => {
  const wrapperClasses = classnames(theme.inputWrapper, additionalClasses);
  const innerWrapperProps = {
    className: 'innerWrapper',
  };
  const inputElementProps = {
    ...others,
    disabled,
    className: classnames(theme.inputElement, { [`${theme.disabled}`]: disabled }),
  };
  return (
    <div className={wrapperClasses}>
      {React.createElement(
        'div', innerWrapperProps,
        React.createElement('input', inputElementProps),
        React.createElement('span', { className: 'input-focus' }),
      )}
    </div>
  );
};

TextInput.propTypes = {
  width: PropTypes.string,
  additionalClasses: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.object]),
  disabled: PropTypes.bool, // eslint-disable-line
};

TextInput.defaultProps = {
  additionalClasses: '',
  theme: defaultTheme,
  width: null,
  disabled: false,
};

export default themr('CBInput', defaultTheme)(TextInput);
