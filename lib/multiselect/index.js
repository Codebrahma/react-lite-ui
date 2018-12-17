import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

const { findDOMNode: findNode } = ReactDOM;

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

    this.listRef = null;
    this.focusedElement = null;
  }

  getScrollState = () => {
    const threshold =
      findNode(this.listRef).offsetTop +
      findNode(this.listRef).offsetHeight;
    const focusedItem = findNode(this.focusedElement);
    return { threshold, focusedItem };
  };

  handleInput = ({ target }) => {
    this.setState({
      input: target.value,
    });
  };

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
    e.stopPropagation();
    const { options } = this.props;
    const { input, selected, focus } = this.state;
    const isValid =
      options
        .filter(opt =>
          opt
            .label
            .toLowerCase()
            .indexOf(input.toLowerCase()) !== -1);
    switch (e.key) {
      case 'ArrowDown':
        this.setState(
          prevState => ({
            focus: (
              (prevState.focus === undefined
                ? -1
                : prevState.focus
              ) + 1
            ) % (options.length),
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
            focus: ((options.length) + ((prevState.focus || 0) - 1)) % (options.length),
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
            } else if (this.state.focus === this.props.options.length - 1) {
              findNode(this.listRef).scrollTop = threshold;
            }
          },
        );
        break;
      case 'Enter':
        if (focus) {
          this.handleSelect(options[focus]);
          break;
        }
        if (isValid.length) {
          if (
            !selected.filter(item => item.label === isValid[0].label).length
          ) {
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
  };

  showMenu = () => {
    this.setState({
      open: true,
      blockClickEvent: true,
    });
  };

  /*
  Dropdown handle used to toggle open and closed states for the dropdown when user
  clicks on select box / arrow.
  */
  toggleMenu = () => {
    if (!this.state.blockClickEvent) {
      this.setState(prevState => ({
        open: !prevState.open,
      }));
    } else {
      this.setState({
        blockClickEvent: false,
      });
    }
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

  removeOption = (e, option) => {
    e.stopPropagation();
    const { selected } = this.state;
    this.setState({
      selected: selected.filter(item => item.label !== option.label),
    });
  }

  // Helper function to render options inside the dropdown.
  renderOptions = (options) => {
    const { theme } = this.props;
    const { selected, input, focus } = this.state;
    let filteredOptions;
    if (input.length) {
      filteredOptions =
        options
          .filter(opt =>
            opt
              .label
              .toLowerCase()
              .indexOf(input.toLowerCase()) !== -1);
    } else {
      filteredOptions = options;
    }
    return filteredOptions.map((option, index) => {
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      const itemtheme = cx(
        theme.option,
        selected.filter(item => item.label === option.label).length
          ? theme['selected-option']
          : '',
        { [theme['item-hover']]: focus === index },
      );
      return (
        <span
          ref={(ref) => {
            if (focus === index) {
              this.focusedElement = ref;
            }
          }}
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
      <div
        className={theme.selected}
        aria-label={option.label}
        key={option.label}
      >
        <div>
          <span>{option.label}</span>
          <div
            className={theme.close}
            onClick={e => this.removeOption(e, option)}
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
          className={cx(theme.selectInputWrapper, {
            [theme['border-animation']]: open,
          })}
          onFocus={this.showMenu}
          onClick={this.toggleMenu}
          onBlur={this.hideMenu}
          onKeyDown={this.handleKeyPress}
          /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
          tabIndex={0}
          id="multiselect-input"
        >
          <div id="selected-options" className={theme.selectedInput}>
            {this.renderSelected()}
          </div>
          <div className={cx(theme.arrow, open ? theme.up : theme.down)} />
        </div>
        {open && (
          <div
            id="dropdown-options"
            ref={(ref) => {
              this.listRef = ref;
            }}
            className={menuclass}
            onMouseEnter={() => this.blockOnBlur(true)}
            onMouseLeave={() => this.blockOnBlur(false)}
          >
            {this.renderOptions(options)}
          </div>
        )}
      </div>
    );
  }
}

MultiSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  className: PropTypes.string,
  // User callback for getting selected values - gives array of values
  // to the user as argument to the callback.
  onSelect: PropTypes.func,
};

MultiSelect.defaultProps = {
  className: '',
  onSelect: value => console.log(value),
};

export default themr('CBSelect', defaultTheme)(MultiSelect);
