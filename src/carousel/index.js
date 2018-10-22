import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import CarouselItem from './carouselItem';
import defaultTheme from './theme.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };

    setInterval(() => {
      this.setState(prevState => ({
        active: (prevState.active + 1) % props.data.length,
      }));
    }, props.interval);
  }

  render() {
    const { theme } = this.props;
    const { active } = this.state;
    return (
      <div className={theme['carousel-container']}>
        {this.props.data.map((item, index) => (
          <CarouselItem
            theme={theme}
            active={index === active ? true : undefined}
            imageUrl={item}
          >
            {index}
          </CarouselItem>
        ))}
      </div>
    );
  }
}

Carousel.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]),
  interval: PropTypes.number,
};

Carousel.defaultProps = {
  interval: 4000,
  theme: defaultTheme,
};

export default themr('CBCarousel', defaultTheme)(Carousel);
