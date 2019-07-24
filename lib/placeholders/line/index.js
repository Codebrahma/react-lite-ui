import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';

import '../../globals/fonts.scss';
import defaultTheme from './theme.module.scss';

const LinePlaceholder = ({ theme }) => {
  const classes = classnames(theme.styles, theme.lineStyles);

  const linePlaceholderProps = {
    className: classes,
  };

  return <div {...linePlaceholderProps} />;
};

LinePlaceholder.propTypes = {
  theme: PropTypes.shape({}),
};

LinePlaceholder.defaultProps = { theme: {} };

export default themr('LPlaceholder', defaultTheme)(LinePlaceholder);
