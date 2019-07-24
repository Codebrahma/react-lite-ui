import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';

import '../../globals/fonts.scss';
import defaultTheme from './theme.module.scss';

const BoxPlaceholder = ({ theme, shape }) => {
  const classes = classnames(theme.styles, theme.boxStyles, theme[shape]);

  const boxPlaceholderProps = {
    className: classes,
  };

  return <div {...boxPlaceholderProps} />;
};

BoxPlaceholder.propTypes = {
  theme: PropTypes.shape({}),
  shape: PropTypes.oneOf(['default', 'circle']),
};

BoxPlaceholder.defaultProps = {
  theme: {},
  shape: 'default',
};

export default themr('BPLACEHOLDER', defaultTheme)(BoxPlaceholder);
