import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';

import '../../globals/fonts.scss';
import defaultTheme from './theme.module.scss';

const LinePlaceholder = ({ theme, lineWidth }) => {
  const classes = classnames(
    theme.styles,
    theme.lineStyles,
    theme[`lineWidth${lineWidth}`]
  );

  const linePlaceholderProps = {
    className: classes,
  };

  return <div {...linePlaceholderProps} />;
};

LinePlaceholder.propTypes = {
  theme: PropTypes.shape({}),
  lineWidth: PropTypes.string,
};

LinePlaceholder.defaultProps = { theme: {}, lineWidth: '100' };

export default themr('LPlaceholder', defaultTheme)(LinePlaceholder);
