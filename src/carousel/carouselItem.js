import React from 'react';
import { themr } from 'react-css-themr';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CarouselItem = ({ theme, active, imageUrl }) => (
  <div className={cx(theme['carousel-item'], 'active', { current: active })}>
    {imageUrl ? <img src={imageUrl} alt="carousel-item" /> : this.props.children}
  </div>
);

CarouselItem.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  active: PropTypes.bool,
  imageUrl: PropTypes.string,
};

CarouselItem.defaultProps = {
  active: null,
  imageUrl: null,
};

export default themr('CBCarouselItem')(CarouselItem);
