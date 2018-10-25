import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import defaultTheme from './theme.scss';

const { findDOMNode: findNode } = ReactDOM;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    // Left bubble / handle for range slider.
    this.sliderLowerRange = null;
    // Right bubble / handle for range slider.
    // Also used for the default slider.
    this.sliderUpperRange = null;
    // The tracker bar ( default color #91d5ff - bright cyan )
    // for visualising the selected range.
    this.sliderTracker = null;
    // Left offset for the left handle used in range slider.
    this.sliderOffset = null;
    // Main slider bar. Acts as wrapper to the components
    // and provides a visual range of valid values.
    this.sliderBar = null;

    this.state = {
      // valueMax : used as max value selected in a range slider.
      // and is default store for normal slider max value.
      valueMax: props.min,
      // valueMin : used as min value of selected range for range
      // slider.
      valueMin: props.min,
    };
  }

  /**
   * Returns current width of element in DOM.
   * @memberof Slider
   * @param node : Ref object of the element whose width needs to be calculated.
   */
  getNodeWidth = node => findNode(node).getBoundingClientRect().width;

  /**
   * Update slider handle position according to drag position.
   * @memberof Slider
   * @param e: Event object.
   * @param left: Boolean to identify the handle ( `true` for left
   * handle and `false` for right ) .
   */
  handleDrag = (e, left) => {
    e.preventDefault();

    /**
     * If @param left is true then it implies that the left handle was moved / dragged.
     * So we need to update the @member this.sliderOffset width and also make sure the range
     * is updated accordingly ( by updating the sliderTracker width ).
     * Else, only update @member this.sliderTracker width since right handle was moved.
     */
    if (
      left &&
      e.clientX &&
      e.clientX <
        findNode(this.sliderTracker).offsetLeft +
          this.getNodeWidth(this.sliderTracker)
    ) {
      // Calculate offset for right handle / bubble from the left of the slider bar.
      const rightHandleOffset =
        findNode(this.sliderTracker).offsetLeft +
        this.getNodeWidth(this.sliderTracker);

      // Update sliderOffset width.
      this.sliderOffset.style.width = `${((e.clientX -
        findNode(this.sliderOffset).offsetLeft) /
        this.getNodeWidth(this.sliderBar)) *
        100}%`;

      // Update sliderTracker width.
      this.sliderTracker.style.width = `${((rightHandleOffset - e.clientX) /
        this.getNodeWidth(this.sliderBar)) *
        100}%`;

      return;
    }
    if (left === false) {
      // Update slider tracker width.
      this.sliderTracker.style.width = `${((e.clientX -
        findNode(this.sliderTracker).offsetLeft) /
        this.getNodeWidth(this.sliderBar)) *
        100}%`;
    }
    /**
     * Calculate and update state with current value and pass the
     * new value to onChange callback.
     */
    const {
      min, max, onChange, step,
    } = this.props;

    // Calculate steps according to bar size
    const barStep =
      this.getNodeWidth(this.sliderBar) / (step ? 100 / step : 100);

    // Find handle position relative to width ( in terms of steps )
    let relativeValue = null;
    let currentValue = null;
    let relativeValueOffset = null;
    let currentValueOffset = null;

    // Calculate current value according to the position of handle.
    if (this.props.range) {
      if (left) {
        relativeValueOffset = Math.round(this.getNodeWidth(this.sliderOffset) / barStep);
        currentValueOffset =
          ((max - min) * (relativeValueOffset / (step ? 100 / step : 100))) + min;
      } else {
        relativeValue = Math.round((this.getNodeWidth(this.sliderTracker) +
            this.getNodeWidth(this.sliderOffset)) /
            barStep);
        currentValue =
          ((max - min) * (relativeValue / (step ? 100 / step : 100))) + min;
      }
    } else {
      relativeValue =
        Math.round(findNode(this.sliderTracker).getBoundingClientRect().width / barStep);
      currentValue = ((max - min) * (relativeValue / 100)) + min;
    }

    // Update state with current values, send the value to callback
    // and adjust slider position to reflect currently chosen value.
    this.setState(
      prevState => ({
        valueMax: currentValue ? Math.round(currentValue) : prevState.valueMax,
        valueMin: currentValueOffset
          ? Math.round(currentValueOffset)
          : prevState.valueMin,
      }),
      () => {
        onChange(this.state.valueMax, this.state.valueMin);
      },
    );
  };

  render() {
    const { theme, disabled, range } = this.props;
    return (
      <div
        className={theme.slider}
        ref={(ref) => {
          this.sliderBar = ref;
        }}
      >
        {range && (
          <div
            className={theme['slider-offset']}
            // onDragOver has been disabled using an empty function block
            // to avoid unnecessary callbacks.
            // Drag event is being registered through the onDrag event. Same on line 176.
            onDragOver={disabled ? undefined : () => {}}
            ref={(ref) => {
              this.sliderOffset = ref;
            }}
          >
            <span
              className={theme['slider-button']}
              draggable={!disabled}
              onDrag={(e) => {
                this.handleDrag(e, true);
              }}
              ref={(ref) => {
                this.sliderLowerRange = ref;
              }}
            />
            <div className={theme.tooltip}>
              <span>{this.state.valueMin}</span>
              <div />
            </div>
          </div>
        )}
        <div
          className={theme['slider-tracker']}
          onDragOver={disabled ? undefined : () => {}}
          ref={(ref) => {
            this.sliderTracker = ref;
          }}
        >
          <span
            className={theme['slider-button']}
            draggable={!disabled}
            onDrag={(e) => {
              this.handleDrag(e, false);
            }}
            ref={(ref) => {
              this.sliderUpperRange = ref;
            }}
          />
          <div className={theme.tooltip}>
            <span>{this.state.valueMax}</span>
            <div />
          </div>
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
  range: PropTypes.bool,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  theme: defaultTheme,
  disabled: false,
  step: null,
  range: false,
  onChange: (max, min) => {
    console.log({ min, max });
  },
};

export default themr('CBSlider', defaultTheme)(Slider);
