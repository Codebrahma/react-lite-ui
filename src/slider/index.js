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


  /**
   * Update slider handle position according to drag position.
   * @memberof Slider
   * @param e: Event object.
   */
  handleDrag = (e) => {
    this.sliderTracker.style.width = `${e.clientX -
      findNode(this.sliderTracker).offsetLeft}px`;
  };


  /**
   * Calculate and update state with current value and pass the
   * new value to onChange callback.
   * @memberof Slider
   */
  handleDrop = () => {
    const {
      min, max, onChange, step,
    } = this.props;

    // Calculate steps according to bar size 
    const barStep = findNode(this.sliderBar).getBoundingClientRect()
      .width / (step ? (100 / step) : 100);
    const relativeValue =
    Math.round(findNode(this.sliderTracker).getBoundingClientRect().width / barStep);
    const currentValue = ((max - min) * (relativeValue / (step ? (100 / step) : 100))) + min;
    this.setState({
      value: Math.round(currentValue),
    }, () => {
      onChange(this.state.value);
      this.sliderTracker.style.width = `${(relativeValue / (step ? (100 / step) : 100)) * findNode(this.sliderBar).getBoundingClientRect()
        .width}px`;
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
  step: PropTypes.number,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  theme: defaultTheme,
  disabled: false,
  step: null,
  onChange: (val) => { console.log(val); },
};

export default themr('CBSlider', defaultTheme)(Slider);
