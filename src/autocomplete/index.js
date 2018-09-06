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
    };
  }

  handleInput = ({ target }) => {
    this.setState({
      input: target.value,
    });
  }


  selectItem = (input) => {
    this.setState({
      input,
      showSuggestions: false,
    });
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
      });
    }
  }

  blockOnBlur = (block) => {
    this.setState({
      blockOnBlur: block,
    });
  }

  renderOptions = () => {
    const { data } = this.state;
    return (data.filter(({ label }) => label.indexOf(this.state.input) !== -1)
    ).map(({ label }) => (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        onClick={() => this.selectItem(label)}
        key={label}
      >{label}
      </div>
    ));
  }


  render() {
    const { placeholder, className, theme } = this.props;
    const { showSuggestions } = this.state;
    const classes = cx(className, theme.autocomplete);
    return (
      <div className={classes}>
        <input
          type="text"
          value={this.state.input}
          placeholder={placeholder}
          onFocus={this.showSuggestions}
          onBlur={this.hideSuggestions}
          onChange={this.handleInput}
        />
        {
              showSuggestions &&
              <div
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
};

AutoComplete.defaultProps = {
  placeholder: undefined,
  theme: defaultTheme,
  className: '',
};

export default themr('CBAutoComplete', defaultTheme)(AutoComplete);
