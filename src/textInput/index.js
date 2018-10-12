import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import defaultTheme from './theme.scss';

const TextInput = ({
  additionalClasses,
  theme,
  width,
  disabled,
  ...others
}) => {
  const wrapperClasses = classnames(theme.inputWrapper, additionalClasses);
  const innerWrapperProps = {
    className: 'innerWrapper',
    style: {
      width: width || '200px',
    },
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
