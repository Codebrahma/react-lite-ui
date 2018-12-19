import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';

import defaultTheme from './theme.module.scss';

const { findDOMNode: findNode } = ReactDOM;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.sliderTracker = null;
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
   * Simulate the drag event on slider.
   * @memberof Slider
   * @param e : Event object.
   * @param left : Boolean to check if left or right button is being dragged.
   */
  dragEvent = (e, left) => {
    if (this.props.range) {
      if (left) {
        // Current width of the tracker between the buttons.
        const sliderTrackerWidth = findNode(this.sliderTracker).getBoundingClientRect().width;
        // If the mouse pointer is between the left end of slider bar and
        // right button, move the slider button - else do nothing.
        if (
          e.clientX <=
            findNode(this.sliderOffset).getBoundingClientRect().width +
              sliderTrackerWidth +
              findNode(this.sliderBar).offsetLeft &&
          e.clientX >= findNode(this.sliderBar).offsetLeft
        ) {
          const prevWidth = findNode(this.sliderOffset).getBoundingClientRect()
            .width;
          // Calculate new width for offset according to mouse position.
          const width =
            (e.clientX - findNode(this.sliderBar).offsetLeft) /
            findNode(this.sliderBar).getBoundingClientRect().width;
          // Update offset width.
          findNode(this.sliderOffset).style.width = `${width * 100}%`;
          // Calculate new width for tracker according to mouse position.
          const trackerWidth =
            (findNode(this.sliderTracker).getBoundingClientRect().width -
              (e.clientX - findNode(this.sliderBar).offsetLeft - prevWidth)) /
            findNode(this.sliderBar).getBoundingClientRect().width;
          // Update tracker width.
          findNode(this.sliderTracker).style.width = `${trackerWidth * 100}%`;
          // Update state and pass values to the onChange callback.
          this.setState(
            {
              valueMin: Math.round(width * this.props.max),
            },
            () => {
              const { onChange } = this.props;
              const { valueMin, valueMax } = this.state;
              onChange(valueMin, valueMax);
            },
          );
        }
      } else {
        // If the right slider button is being dragged, then execute this block.
        const sliderBarWidth = findNode(this.sliderBar).getBoundingClientRect()
          .width;
        // If mouse pointer is between the left slider and right end of the slider bar.
        if (
          (e.clientX <= findNode(this.sliderBar).offsetLeft + sliderBarWidth) &&
          (e.clientX >=
            findNode(this.sliderBar).offsetLeft +
              findNode(this.sliderOffset).getBoundingClientRect().width)
        ) {
          // Calculate and update tracker width.
          const width =
            ((e.clientX -
              findNode(this.sliderBar).offsetLeft -
              findNode(this.sliderOffset).getBoundingClientRect().width) /
              sliderBarWidth) *
            100;
          findNode(this.sliderTracker).style.width = `${width}%`;
          const maxValue =
            (e.clientX - findNode(this.sliderBar).offsetLeft) / sliderBarWidth;
          // Update state and pass values to the onChange callback.
          this.setState(
            {
              valueMax: Math.round(maxValue * this.props.max),
            },
            () => {
              const { onChange } = this.props;
              const { valueMin, valueMax } = this.state;
              onChange(valueMin, valueMax);
            },
          );
        }
      }
    } else {
      // When simple slider is being used, execute this block.
      const sliderBarWidth = findNode(this.sliderBar).getBoundingClientRect()
        .width;
      if (
        e.clientX <= findNode(this.sliderBar).offsetLeft + sliderBarWidth &&
        e.clientX >= findNode(this.sliderBar).offsetLeft
      ) {
        const width =
          ((e.clientX - findNode(this.sliderBar).offsetLeft) / sliderBarWidth) *
          100;
        findNode(this.sliderTracker).style.width = `${width}%`;
        // Update state and pass values to the onChange callback.
        this.setState(
          {
            valueMax: Math.round((width / 100) * this.props.max),
          },
          () => {
            const { onChange } = this.props;
            const { valueMin, valueMax } = this.state;
            onChange(valueMin, valueMax);
          },
        );
      }
    }
  };

  startDrag = (ev, left) => {
    ev.preventDefault();
    const { disabled } = this.props;
    if (!disabled) {
      const dragEventWithData = e => this.dragEvent(e, left);
      document.body.addEventListener('mouseup', () => this.stopDrag(dragEventWithData));
      document.body.addEventListener('mousemove', dragEventWithData);
    }
  };

  stopDrag = (eventCallback) => {
    document.body.removeEventListener('mousemove', eventCallback);
  };

  render() {
    const { theme, disabled, range } = this.props;
    const rootProps = {
      className: theme.slider,
      'aria-label': 'slider',
      ref: !disabled ? (ref) => {
        this.sliderBar = ref;
      } : undefined,
    };
    const sliderOffsetProps = {
      className: theme['slider-offset'],
      'aria-label': 'slider-offset',
      ref: !disabled ? (ref) => {
        this.sliderOffset = ref;
      } : undefined,
    };
    const sliderTrackerProps = {
      className: theme['slider-tracker'],
      'aria-label': 'slider-tracker',
      ref: !disabled ? (ref) => {
        this.sliderTracker = ref;
      } : undefined,
    };
    const leftButtonProps = {
      className: theme['slider-button'],
      'aria-label': 'slider-button-left',
      onMouseDown: (e) => {
        this.startDrag(e, true);
      },
    };
    const rightButtonProps = {
      className: theme['slider-button'],
      'aria-label': 'slider-button-right',
      onMouseDown: (e) => {
        this.startDrag(e, false);
      },
    };
    return (
      <div {...rootProps}>
        {range && (
          <div {...sliderOffsetProps}>
            <span {...leftButtonProps} />
            <div className={theme.tooltip}>
              <span>{this.state.valueMin}</span>
              <div />
            </div>
          </div>
        )}
        <div {...sliderTrackerProps}>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <span {...rightButtonProps} />
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
  range: PropTypes.bool,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  theme: defaultTheme,
  disabled: false,
  range: false,
  onChange: (min, max) => {
    console.log({ min, max });
  },
};

export default themr('CBSlider', defaultTheme)(Slider);
