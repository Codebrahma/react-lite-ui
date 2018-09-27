import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      Set initially selected option label as empty string and dropdown
      state as closed for initial render.
      */
      selected: { label: '' },
      open: false,
    };
  }

  // Handle the click event when user selects / clicks on an option from the dropdown.
  handleSelect = (selected) => {
    const { onSelect } = this.props;
    /*
    Update the state with the selected item and provide
    the selected value to the user via callback.
    */
    onSelect(selected);
    this.setState({
      selected,
      open: false,
    });
  }

  /*
  Dropdown handle used to toggle open and closed states for the dropdown when user
  clicks on select box / arrow.
  */
  toggleMenu = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }

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

  // Helper function to render options inside the dropdown.
  renderOptions = (options) => {
    const { theme } = this.props;
    return options
      .map(option => (
        /* eslint-disable jsx-a11y/click-events-have-key-events */
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        <span
          className={theme.option}
          onClick={() => this.handleSelect(option)}
          key={option.label}
        >
          {option.label}
        </span>
      ));
  }

  render() {
    const { options, theme, className } = this.props;
    const { selected, open } = this.state;
    const classes = cx(theme.select, className);
    const menuclass = cx(theme.menu, open ? theme.show : theme.hide);
    const arrowclass = cx(theme.arrow, open ? theme.up : theme.down);
    return (
      <div className={classes}>
        <div
          className={theme.selectInput}
          onClick={this.toggleMenu}
          onBlur={this.hideMenu}
          /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
          tabIndex={0}
        >
          <input className={theme.selected} type="text" value={selected.label} disabled />
          <div className={arrowclass} />
        </div>
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

Select.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]),
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  className: PropTypes.string,
  onSelect: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  className: '',
  onSelect: value => console.log(value),
};

export default themr('CBSelect', defaultTheme)(Select);
