import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      Set `selected` property as an empty array to store selected values later.
      Set initial dropdown state to be closed.
      */
      selected: [],
      open: false,
      input: '',
    };
  }

  handleInput = ({ target }) => {
    this.setState({
      input: target.value,
    });
  }

  // Handle the click event when user selects / clicks on an option from the dropdown.
  handleSelect = (selectedOption) => {
    const { onSelect } = this.props;
    const { selected } = this.state;
    let udpatedSelected;
    /*
      Check whether the item is already present in the state - if not present, add the
      component to the `selected` array stored in the component state otherwise remove
      it if present.
      */
    if (selected.filter(item => item.label === selectedOption.label).length) {
      udpatedSelected = selected.filter(item => item.label !== selectedOption.label);
    } else {
      udpatedSelected = [...selected, selectedOption];
    }
    /*
      Update the state with the selected array of items and provide
      the value to the user via callback.
      */
    onSelect(udpatedSelected);
    this.setState({
      selected: udpatedSelected,
    });
  };

  handleKeyPress = (e) => {
    const { options } = this.props;
    const { input, selected } = this.state;
    const isValid = (options.filter(opt => opt.label.toLowerCase().indexOf(input.toLowerCase()) !== -1));
    switch (e.key) {
      case 'Enter':
        if (isValid.length) {
          if (!selected.filter(item => item.label === isValid[0].label).length) {
            this.setState({
              selected: [...selected, isValid[0]],
            });
          }
        }
        this.setState({
          input: '',
        });
        break;
      default:
        break;
    }
  }

  /*
  Dropdown handle used to toggle open and closed states for the dropdown when user
  clicks on select box / arrow.
  */
  toggleMenu = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  /*
  Handle dropdown close when component loses focus completely, i.e, neither
  select box nor any item from options list is in focus. Example - if user clicks
  anywhere else on the screen, the dropdown should close.
  */
  hideMenu = () => {
    if (!this.state.blockOnBlur) {
      this.setState({
        open: false,
      });
    }
  };

  showMenu = () => {
    this.setState({
      open: true,
    });
  }

  /*
  Helper function which sets a boolean `blockOnBlur` property on the state.
  When the user is hovering on the dropdown, the `blockOnBlur` property on state
  is set to `true`, which is later used as a check before hiding the dropdown.
  This state property is specific to solving some bugs which were introduced
  due to default behaviour of javascript and html. Solves issues such as item not
  getting selected even though clicked ( since dropdown is removed through css before
  the onclick event ); and dropdown not closing even when component loses focus.
  */
  blockOnBlur = (block) => {
    this.setState({
      blockOnBlur: block,
    });
  };

  // Helper function to render options inside the dropdown.
  renderOptions = (options) => {
    const { theme } = this.props;
    const { selected, input } = this.state;
    let filteredOptions;
    if (input.length) {
      filteredOptions = options.filter(opt => opt.label.toLowerCase().indexOf(input.toLowerCase()) !== -1);
    } else {
      filteredOptions = options;
    }
    return filteredOptions.map((option) => {
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      const itemtheme = cx(
        theme.option,
        selected.filter(item => item.label === option.label).length
          ? theme['selected-option']
          : '',
      );
      return (
        <span
          className={itemtheme}
          onClick={() => this.handleSelect(option)}
          key={option.label}
          /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
          /* eslint-disable jsx-a11y/tabindex-no-positive */
          tabIndex={1}
          onBlur={this.hideMenu}
        >
          <span>{option.label}</span>
        </span>
      );
    });
  };

  // Helper function to render selected options( as chip view ) inside the box.
  renderSelected = () => {
    const { theme } = this.props;
    const { selected } = this.state;
    return selected.map(option => (
      <div className={theme.selected}>
        <div>
          <span>{option.label}</span>
          <div
            className={theme.close}
            onClick={() => this.handleSelect(option)}
          />
        </div>
      </div>
    ));
  };

  render() {
    const { options, theme, className } = this.props;
    const { open } = this.state;
    const classes = cx(theme.select, className);
    const menuclass = cx(theme.menu, open ? theme.show : theme.hide);
    return (
      <div className={classes}>
        <div
          className={theme.selectedInput}
          onClick={this.toggleMenu}
          onBlur={this.hideMenu}
          /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
          tabIndex={0}
        >
          {this.renderSelected()}
        </div>
        <input
          className={theme.selectInput}
          onChange={this.handleInput}
          value={this.state.input}
          onFocus={this.showMenu}
          onBlur={this.hideMenu}
          onKeyDown={this.handleKeyPress}
        />
        <div
          className={menuclass}
          onMouseEnter={() => this.blockOnBlur(true)}
          onMouseLeave={() => this.blockOnBlur(false)}
        >
          {this.renderOptions(options)}
        </div>
      </div>
    );
  }
}

MultiSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]),
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  className: PropTypes.string,
  // User callback for getting selected values - gives array of values
  // to the user as argument to the callback.
  onSelect: PropTypes.func,
};

MultiSelect.defaultProps = {
  options: [],
  className: '',
  onSelect: value => console.log(value),
};

export default themr('CBSelect', defaultTheme)(MultiSelect);
