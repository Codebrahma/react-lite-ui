import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import CarouselItem from './carouselItem';
import defaultTheme from './theme.module.scss';
import '../globals/fonts.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
    this.animation = null;
    this.animate();
  }

  setActiveItem = (active) => {
    const { data } = this.props;
    clearInterval(this.animation);
    this.setState({
      active: (data.length + active) % data.length,
    }, this.animate);
  };

  animate = () => {
    const { data, interval } = this.props;
    this.animation = setInterval(() => {
      this.setState(prevState => ({
        active: (prevState.active + 1) % data.length,
      }));
    }, interval);
  }

  render() {
    const { theme, data, controls } = this.props;
    const { active } = this.state;
    return (
      <div className={theme['carousel-container']}>
        {/* eslint-disable jsx-a11y/click-events-have-key-events */}
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        {
          controls &&
          <FaAngleLeft className={cx(theme['left-control'], 'carousel-left-icon')} onClick={() => this.setActiveItem(active - 1)} />
        }
        {data.map((item, index) => (
          <CarouselItem
            key={`carousel-item-${index + 1}`}
            theme={theme}
            active={index === active ? true : undefined}
            imageUrl={item}
          >
            {index}
          </CarouselItem>
        ))}
        <div id="indicator" className={theme.dot}>
          {data.map((_, index) => (
            <span
              key={`carousel-indicator-${index + 1}`}
              onClick={() => this.setActiveItem(index)}
              className={cx((active === index) ? `${theme.active} active` : '')}
            />
          ))}
        </div>
        {
          controls &&
          <FaAngleRight className={cx(theme['right-control'], 'carousel-right-icon')} onClick={() => this.setActiveItem(active + 1)} />
        }
      </div>
    );
  }
}

Carousel.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]),
  interval: PropTypes.number,
  controls: PropTypes.bool,
};

Carousel.defaultProps = {
  interval: 4000,
  theme: defaultTheme,
  controls: true,
};

export default themr('CBCarousel', defaultTheme)(Carousel);
