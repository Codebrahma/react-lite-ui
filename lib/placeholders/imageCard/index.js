import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';

import LinePlaceHolder from '../line';

import '../../globals/fonts.scss';
import defaultTheme from './theme.module.scss';
import BoxPlaceholder from '../box';

const ImageCard = ({ theme, lines, imageShape }) => {
  const classes = classnames(theme.imageCardStyles);

  const ImageCardProps = {
    className: classes,
  };

  return (
    <div {...ImageCardProps}>
      <BoxPlaceholder shape={imageShape} />
      {lines.map(line => (
        <LinePlaceHolder lineWidth={line} />
      ))}
    </div>
  );
};

ImageCard.propTypes = {
  theme: PropTypes.shape({}),
  lines: PropTypes.arrayOf(PropTypes.string),
  imageShape: PropTypes.oneOf(['default', 'circle']),
};

ImageCard.defaultProps = {
  theme: {},
  lines: ['25', '75', '50', '100'],
  imageShape: 'circle',
};

export default themr('ImageCard', defaultTheme)(ImageCard);
