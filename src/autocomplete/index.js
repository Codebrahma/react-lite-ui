import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';

import defaultTheme from './theme.scss';

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
  }

  // Handle user input change on typing.
  handleInput = ({ target }) => {
    const { onChange, labelKey } = this.props;
    this.setState((prevState) => {
      onChange({ ...prevState.input, [`${labelKey}`]: target.value });
      return {
        input: { ...prevState.input, [`${labelKey}`]: target.value },
      };
    });
  }

  // Handle user input select from dropdown.
  selectItem = (input) => {
    const { onChange } = this.props;
    this.setState({
      input,
      showSuggestions: false,
    });
    onChange(input);
  }

  // Show the options in dropdown menu.
  showSuggestions = () => {
    this.setState({
      showSuggestions: true,
    });
  }

  // Hide the options dropdown menu and clear keyboard focused element.
  hideSuggestions = () => {
    if (!this.state.blockOnBlur) {
      this.setState({
        showSuggestions: false,
        focus: undefined,
      });
    }
  }

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
  }

  /*
  Handle keydown events when input is focused for navigating between options
  and selecting an option.
  */
  handleKeyDown = (e) => {
    e.stopPropagation();
    const {
      data, focus, input,
    } = this.state;
    const { labelKey, onChange } = this.props;
    const inputlabel = input[`${labelKey}`].toLowerCase();
    let isValid;
    switch (e.key) {
      case 'ArrowDown':
        this.setState(prevState => ({
          focus: (
            (prevState.focus === undefined
              ? -1
              : prevState.focus
            ) + 1
          ) % (prevState.data.length),
        }));
        break;
      case 'ArrowUp':
        this.setState(prevState => ({
          focus: ((prevState.data.length) + ((prevState.focus || 0) - 1)) % (prevState.data.length),
        }));
        break;
      case 'Enter':
        if (focus) {
          this.selectItem(data[focus]);
        } else {
          isValid = data
            .filter(item => item[`${labelKey}`].toLowerCase().indexOf(inputlabel) >= 0);
          if (isValid.length) {
            this.setState(() => {
              onChange(isValid[0]);
              return {
                input: isValid[0],
              };
            });
          }
        }
        break;
      default:
        break;
    }
  }

  // Render options from data provided as props to the component.
  renderOptions = () => {
    const { theme, data, labelKey } = this.props;
    const { focus, input } = this.state;
    const inputlabel = input[`${labelKey}`].toLowerCase();
    return (data.filter((item) => {
      const datalabel = item[`${labelKey}`].toLowerCase();
      return datalabel.indexOf(inputlabel) !== -1;
    })
    ).map((item, index) => {
      const classes = cx(
        theme['autocomplete-list-item'],
        { [`${theme['item-hover']}`]: (focus === index) },
      );
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        /* eslint-disable jsx-a11y/click-events-have-key-events */
      return (
        <div
          aria-label={focus === index ? 'active' : 'inactive'}
          className={classes}
          onClick={() => this.selectItem(item)}
          key={item[`${labelKey}`]}
        >{item[`${labelKey}`]}
        </div>
      );
    });
  }

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
    const { showSuggestions } = this.state;
    const classes = cx(className, theme.autocomplete);
    return (
      <div className={classes}>
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
        {
              showSuggestions &&
              <div
                id="autocomplete-list"
                className={cx(theme['autocomplete-list'])}
                onMouseEnter={() => this.blockOnBlur(true)}
                onMouseLeave={() => this.blockOnBlur(false)}
              >
                { this.renderOptions() }
              </div>
            }
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
