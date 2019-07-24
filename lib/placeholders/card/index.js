import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classNames from 'classnames';

import ImagePlaceholder from '../box';
import TextPlaceholder from '../line';

import '../../globals/fonts.scss';
import defaultTheme from './theme.module.scss';

const CardPlaceholder = ({ theme, imageShape }) => (
  <div className={classNames(theme.styles, theme.cardStyles)}>
    <div className={theme.imageWrapper}>
      <div className={theme.gutterSpaceHorizontal}>
        <ImagePlaceholder shape={imageShape} />
      </div>

      <TextPlaceholder lineWidth="100" />
    </div>

    <TextPlaceholder lineWidth="75" />
    <TextPlaceholder lineWidth="50" />
  </div>
);

CardPlaceholder.propTypes = {
  theme: PropTypes.shape({}),
  imageShape: PropTypes.oneOf(['default', 'circle']),
};

CardPlaceholder.defaultProps = {
  theme: {},
  imageShape: 'circle',
};

export default themr('CARPLACEHOLDER', defaultTheme)(CardPlaceholder);
