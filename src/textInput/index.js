import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import defaultTheme from './theme.scss';

const TextInput = ({
  additionalClasses,
  theme,
  width,
  ...others
}) => {
  const wrapperClasses = classnames(theme.inputWrapper, additionalClasses);
  const inputElementProps = {
    ...others,
    style: {
      width: width || '100%',
    },
    className: classnames(theme.inputElement),
  };
  return (
    <div className={wrapperClasses}>
      {React.createElement('input', inputElementProps)}
    </div>
  );
};

TextInput.propTypes = {
  width: PropTypes.string,
  additionalClasses: PropTypes.string,
  theme: PropTypes.object, // eslint-disable-line
};

TextInput.defaultProps = {
  additionalClasses: '',
  theme: defaultTheme,
  width: null,
};

export default themr('CBInput', defaultTheme)(TextInput);
