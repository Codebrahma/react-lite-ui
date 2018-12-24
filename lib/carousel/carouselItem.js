import React from 'react';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CarouselItem = ({
  theme, active, imageUrl, children,
}) => (
  <div className={cx(theme['carousel-item'], theme.active, 'active', (active ? `${theme.current} current` : ''))}>
    {imageUrl ? <img src={imageUrl} alt="carousel-item" /> : children}
  </div>
);

CarouselItem.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  active: PropTypes.bool,
  imageUrl: PropTypes.string,
  children: PropTypes.node,
};

CarouselItem.defaultProps = {
  active: null,
  imageUrl: null,
  children: null,
};

export default themr('CBCarouselItem')(CarouselItem);
