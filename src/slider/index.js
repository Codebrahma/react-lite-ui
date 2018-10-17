import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import defaultTheme from './theme.scss';

const { findDOMNode: findNode } = ReactDOM;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.sliderButton = null;
    this.sliderTracker = null;
    this.sliderBar = null;
    this.state = {
      value: props.min,
    };
  }

  handleDrag = (e) => {
    this.sliderTracker.style.width = `${e.clientX -
      findNode(this.sliderTracker).offsetLeft}px`;
  };

  handleDrop = () => {
    const { min, max, onChange } = this.props;
    const barStep = findNode(this.sliderBar).getBoundingClientRect()
      .width / 100;
    const relativeValue =
    Math.round(findNode(this.sliderTracker).getBoundingClientRect().width / barStep);
    const currentValue = ((max - min) * (relativeValue / 100)) + min;
    this.setState({
      value: Math.round(currentValue),
    }, () => {
      onChange(this.state.value);
    });
  };

  render() {
    const { theme, disabled } = this.props;
    return (
      <div
        className={theme.slider}
        onDragOver={disabled ? undefined : this.handleDrag}
        ref={(ref) => {
          this.sliderBar = ref;
        }}
      >
        <div
          className={theme['slider-tracker']}
          ref={(ref) => {
            this.sliderTracker = ref;
          }}
        >
          <span
            className={theme['slider-button']}
            draggable={!disabled}
            onDragEnd={this.handleDrop}
            onDrag={this.handleDrag}
            ref={(ref) => {
              this.sliderButton = ref;
            }}
          />
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  theme: PropTypes.oneOfType([PropTypes.object]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  theme: defaultTheme,
  disabled: false,
  onChange: (val) => { console.log(val); },
};

export default themr('CBSlider', defaultTheme)(Slider);
