import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import BoxPlaceholder from '../box';
import LinePlaceholder from '../line';
import Card from '../../card';

import '../../globals/fonts.scss';
import defaultTheme from './theme.module.scss';

const CardPlaceholder = ({
  theme, imageShape, className, wrapContent, elevation, noPadding, cardTheme,
}) => (
  <Card className={className} wrapContent={wrapContent} elevation={elevation} noPadding={noPadding} theme={cardTheme}>
      <div className={theme.imageWrapper}>
        <div className={theme.gutterSpaceHorizontal}>
          <BoxPlaceholder shape={imageShape} />
        </div>

        <LinePlaceholder lineWidth="100" />
      </div>

      <LinePlaceholder lineWidth="75" />
      <LinePlaceholder lineWidth="50" />
    </Card>
);

CardPlaceholder.propTypes = {
  theme: PropTypes.shape({}),
  imageShape: PropTypes.oneOf(['shape', 'circle']),
  className: PropTypes.string,
  cardTheme: PropTypes.shape({
    card: PropTypes.string,
    cardHeader: PropTypes.string,
  }),
  wrapContent: PropTypes.bool,
  noPadding: PropTypes.bool,
  elevation: PropTypes.oneOf(['low', 'medium', 'high']),
};

CardPlaceholder.defaultProps = {
  theme: {},
  imageShape: 'circle',
  className: null,
  elevation: 'low',
  cardTheme: {},
  wrapContent: false,
  noPadding: false,
};

export default themr('CARDPLACEHOLDER', defaultTheme)(CardPlaceholder);
