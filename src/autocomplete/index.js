import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Proptypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';

import defaultTheme from './theme.scss';

const { findDOMNode: findNode } = ReactDOM;

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    /*
    Initialise state with `input` property to control input value,
    `showSuggestions` to toggle dropdown menu.
    */
    this.state = {
      data: props.data,
      input: { [`${props.labelKey}`]: '', [`${props.valueKey}`]: null },
      showSuggestions: false,
      blockOnBlur: false,
    };

    // Ref for targeting list items
    this.listRef = null;

    // Currently focused element
    this.focusedElement = null;
  }


  getScrollState = () => {
    const threshold =
      findNode(this.listRef).offsetTop +
      findNode(this.listRef).offsetHeight;
    const focusedItem = findNode(this.focusedElement);
    return { threshold, focusedItem };
  };


  // Handle user input change on typing.
  handleInput = ({ target }) => {
    const { onChange, labelKey } = this.props;
    this.setState(() => {
      onChange({ [`${labelKey}`]: target.value });
      return {
        input: { [`${labelKey}`]: target.value },
      };
    });
  };

  // Handle user input select from dropdown.
  selectItem = (input) => {
    const { onChange } = this.props;
    this.setState({
      input,
      showSuggestions: false,
      focused: false,
    });
    onChange(input);
  };

  // Show the options in dropdown menu.
  showSuggestions = () => {
    this.setState({
      focused: true,
      showSuggestions: true,
    });
  };

  // Hide the options dropdown menu and clear keyboard focused element.
  hideSuggestions = () => {
    const { data, input } = this.state;
    const { labelKey, valueKey } = this.props;

    // Only if a valid option is typed then allow to remain without clicking
    const matchedItem = data
      .filter(item => item[`${labelKey}`] === input[`${labelKey}`]);
    if (input[`${labelKey}`].length && matchedItem.length) {
      this.setState({
        input: { [`${labelKey}`]: matchedItem[0][`${labelKey}`] },
      });
    } else if (matchedItem.length === 0) {
      // Else clear
      this.setState({
        input: {
          [`${labelKey}`]: '',
          [`${valueKey}`]: null,
        },
      });
    }

    if (!this.state.blockOnBlur) {
      this.setState({
        showSuggestions: false,
        focus: undefined,
      });
    }
    this.setState({
      focused: false,
    });
  };

  /*
  Helper function which sets a boolean `blockOnBlur` property on the state.
  When the user is hovering on the dropdown, the `blockOnBlur` property on state
  is set to `true`, which is later used as a check before hiding the dropdown.
  This state property is specific to solving some bugs which were introduced
  due to default behaviour of javascript and html. Solves issues such as item not
  getting selected even though clicked ( since dropdown is removed through css before
  the onclick event happens ) and dropdown not closing even when component loses focus.
  */
  blockOnBlur = (block) => {
    this.setState({
      blockOnBlur: block,
    });
  };

  /*
  Handle keydown events when input is focused for navigating between options
  and selecting an option.
  */
  handleKeyDown = (e) => {
    e.stopPropagation();
    const { data, focus, input } = this.state;
    const { labelKey, onChange } = this.props;
    const inputlabel = input[`${labelKey}`].toLowerCase();
    let isValid;
    switch (e.key) {
      case 'ArrowDown':
        // Change focus to the subsequent element
        this.setState(
          prevState => ({
            focus:
              ((prevState.focus === undefined ? -1 : prevState.focus) + 1) %
              prevState.data.length,
          }),
          () => {
            const { threshold, focusedItem } = this.getScrollState();
            // Handles cyclic focus
            if (
              focusedItem &&
              focusedItem.offsetHeight + focusedItem.offsetTop > threshold
            ) {
              findNode(this.listRef).scrollTop +=
                focusedItem.offsetHeight;
            } else if (!this.state.focus) {
              findNode(this.listRef).scrollTop = 0;
            }
          },
        );
        break;
      case 'ArrowUp':
        this.setState(
          prevState => ({
            focus:
              (prevState.data.length + ((prevState.focus || 0) - 1)) %
              prevState.data.length,
          }),
          () => {
            const { threshold, focusedItem } = this.getScrollState();
            if (
              focusedItem &&
              ((findNode(this.listRef).scrollTop
              + findNode(this.listRef).offsetTop) > focusedItem.offsetTop)
            ) {
              findNode(this.listRef).scrollTop -=
                focusedItem.offsetHeight;
            } else if (this.state.focus === this.state.data.length - 1) {
              findNode(this.listRef).scrollTop = threshold;
            }
          },
        );
        break;
      case 'Enter':
        if (focus) {
          this.setState({
            input: data[focus],
            showSuggestions: false,
          });
        } else {
          isValid = data
            .filter(item => item[`${labelKey}`].toLowerCase().indexOf(inputlabel) >= 0);
          if (isValid.length) {
            this.setState(() => {
              onChange(isValid[0]);
              return {
                input: isValid[0],
                showSuggestions: false,
              };
            });
          }
        }
        break;
      default:
        break;
    }
  };

  // Render options from data provided as props to the component.
  renderOptions = () => {
    const { theme, data, labelKey } = this.props;
    const { focus, input } = this.state;
    const inputlabel = input[`${labelKey}`].toLowerCase();
    return data
      .filter((item) => {
        const datalabel = item[`${labelKey}`].toLowerCase();
        return datalabel.indexOf(inputlabel) !== -1;
      })
      .map((item, index) => {
        // Assign each item a class to customize
        const classes = cx(theme['autocomplete-list-item'], {
          [`${theme['item-hover']}`]: focus === index,
        });
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        /* eslint-disable jsx-a11y/click-events-have-key-events */
        return (
          <div
            ref={(ref) => {
              if (focus === index) {
                this.focusedElement = ref;
              }
            }}
            aria-label={focus === index ? 'active' : 'inactive'}
            className={classes}
            onClick={() => this.selectItem(item)}
            key={item[`${labelKey}`]}
          >
            {item[`${labelKey}`]}
          </div>
        );
      });
  };

  render() {
    const {
      placeholder,
      className,
      theme,
      onChange,
      labelKey,
      valueKey,
      ...rest
    } = this.props;
    const { showSuggestions, focused } = this.state;
    const classes = cx(className, theme.autocomplete);
    return (
      <div className={classes}>
        <span
          className={cx(theme['input-container'], {
            [`${theme['border-animation']}`]: focused,
          })}
        >
          <input
            className={theme['autocomplete-input']}
            type="text"
            value={this.state.input[`${labelKey}`]}
            placeholder={placeholder}
            onFocus={this.showSuggestions}
            onBlur={this.hideSuggestions}
            onChange={this.handleInput}
            onKeyDown={this.handleKeyDown}
            {...rest}
          />
        </span>
        {(
          <div
            id="autocomplete-list"
            ref={(ref) => {
              this.listRef = ref;
            }}
            className={cx(theme['autocomplete-list'], { enabled: showSuggestions })}
            onMouseEnter={() => this.blockOnBlur(true)}
            onMouseLeave={() => this.blockOnBlur(false)}
          >
            {this.renderOptions()}
          </div>
        )}
      </div>
    );
  }
}

AutoComplete.propTypes = {
  data: Proptypes.arrayOf(Proptypes.object).isRequired,
  placeholder: Proptypes.string,
  theme: Proptypes.oneOfType([Proptypes.object]),
  className: Proptypes.string,
  onChange: Proptypes.func,
  onKeyPress: Proptypes.func,
  labelKey: Proptypes.string,
  valueKey: Proptypes.string,
};

AutoComplete.defaultProps = {
  placeholder: undefined,
  theme: defaultTheme,
  className: '',
  labelKey: 'label',
  valueKey: 'value',
  onChange: () => {},
  onKeyPress: () => {},
};

export default themr('CBAutoComplete', defaultTheme)(AutoComplete);
