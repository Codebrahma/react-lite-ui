import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classNames from 'classnames';

import BoxPlaceholder from '../box';
import LinePlaceholder from '../line';

import '../../globals/fonts.scss';
import defaultTheme from './theme.module.scss';

const CardPlaceholder = ({ theme, imageShape }) => (
  <div className={classNames(theme.styles, theme.cardStyles)}>
    <div className={theme.imageWrapper}>
      <div className={theme.gutterSpaceHorizontal}>
        <BoxPlaceholder shape={imageShape} />
      </div>

      <LinePlaceholder lineWidth="100" />
    </div>

    <LinePlaceholder lineWidth="75" />
    <LinePlaceholder lineWidth="50" />
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

export default themr('CARDPLACEHOLDER', defaultTheme)(CardPlaceholder);
