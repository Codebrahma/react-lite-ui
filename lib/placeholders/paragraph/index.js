import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';

import LinePlaceholder from '../line';

import '../../globals/fonts.scss';
import defaultTheme from './theme.module.scss';

const ParagraphPlaceholder = ({ theme, lines }) => {
  const classes = classnames(theme.styles, theme.paragraphStyles);

  const paragraphPlaceholderProps = {
    className: classes,
  };

  return (
    <div {...paragraphPlaceholderProps}>
      {lines.map(line => (
        <LinePlaceholder lineWidth={line} />
      ))}
    </div>
  );
};

ParagraphPlaceholder.prototype = {
  theme: PropTypes.shape({}),
  lines: PropTypes.array,
};

ParagraphPlaceholder.defaultProps = {
  theme: {},
  lines: ['25', '50', '75', '100'],
};

export default themr('ParagraphPlaceholder', defaultTheme)(
  ParagraphPlaceholder
);
