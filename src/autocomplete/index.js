import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { themr } from 'react-css-themr';
import cx from 'classnames';

import defaultTheme from './theme.scss';

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      input: '',
      showSuggestions: false,
      blockOnBlur: false,
      focus: 0,
    };
  }

  handleInput = ({ target }) => {
    const { onChange } = this.props;
    this.setState({
      input: target.value,
    });
    onChange(target.value);
  }


  selectItem = (input) => {
    const { onChange } = this.props;
    this.setState({
      input,
      showSuggestions: false,
    });
    onChange(input);
  }

  showSuggestions = () => {
    this.setState({
      showSuggestions: true,
    });
  }

  hideSuggestions = () => {
    if (!this.state.blockOnBlur) {
      this.setState({
        showSuggestions: false,
        focus: null,
      });
    }
  }

  blockOnBlur = (block) => {
    this.setState({
      blockOnBlur: block,
    });
  }


  handleKeyDown = ({ key }) => {
    const { data, focus } = this.state;
    switch (key) {
      case 'ArrowDown':
        this.setState(prevState => ({
          focus: ((prevState.focus || 0) + 1) % (prevState.data.length),
        }));
        break;
      case 'ArrowUp':
        this.setState(prevState => ({
          focus: ((prevState.data.length) + ((prevState.focus || 0) - 1)) % (prevState.data.length),
        }));
        break;
      case 'Enter':
        this.selectItem(data[focus].label);
        break;
      default:
        break;
    }
  }

  renderOptions = () => {
    const { theme } = this.props;
    const { data, focus } = this.state;
    return (data.filter(({ label }) => label.indexOf(this.state.input) !== -1)
    ).map(({ label }, index) => {
      const classes = cx(
        theme['autocomplete-list-item'],
        { [`${theme['item-hover']}`]: (focus === index) },
      );
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      return (
        <div
          className={classes}
          onClick={() => this.selectItem(label)}
          key={label}
        >{label}
        </div>
      );
    });
  }

  render() {
    const {
      placeholder,
      className,
      theme,
      ...rest
    } = this.props;
    const { showSuggestions } = this.state;
    const classes = cx(className, theme.autocomplete);
    return (
      <div className={classes}>
        <input
          className={theme['autocomplete-input']}
          type="text"
          value={this.state.input}
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
                className={theme['autocomplete-list']}
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
};

AutoComplete.defaultProps = {
  placeholder: undefined,
  theme: defaultTheme,
  className: '',
  onChange: () => {},
  onKeyPress: () => {},
};

export default themr('CBAutoComplete', defaultTheme)(AutoComplete);
