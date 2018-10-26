import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

const { findDOMNode: findNode } = ReactDOM;

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
  };

  /**
   * Handles key down events on select component for keyboard navigation.
   * @memberof Select
   */
  handleKeyDown = ({ key }) => {
    const { focus } = this.state;
    const { options } = this.props;
    switch (key) {
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
        }
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
        focus: undefined,
      });
    }
  };

  /**
   * Helper function which sets a boolean `blockOnBlur` property on the state.
   * When the user is hovering on the dropdown, the `blockOnBlur` property on state
   *    is set to `true`, which is later used as a check before hiding the dropdown.
   * This state property is specific to solving some bugs which were introduced
   * due to default behaviour of javascript and html. Solves issues such as item not
   * getting selected even though clicked ( since dropdown is removed through css before
   * the onclick event happens ) and dropdown not closing even when component loses focus.
   *
   * @param block Boolean true or false for blocking and unblocking onBlur event handler.
   * @memberof Select
   */
  blockOnBlur = (block) => {
    this.setState({
      blockOnBlur: block,
    });
  };

  // Helper function to render options inside the dropdown.
  renderOptions = (options) => {
    const { theme } = this.props;
    const { focus } = this.state;

    return options.map((option, index) => (
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <span
        ref={(ref) => {
          if (focus === index) {
            this.focusedElement = ref;
          }
        }}
        className={cx(theme.option, { [`${theme['option-hover']}`]: (focus === index) })}
        onClick={() => this.handleSelect(option)}
        key={option.label}
      >
        {option.label}
      </span>
    ));
  };

  render() {
    const { options, theme, className } = this.props;
    const { selected, open } = this.state;

    const selectInputWrapperProps = {
      id: 'select',
      className: cx(
        theme.selectInput,
        { [theme['border-animation']]: open },
      ),
      onClick: this.toggleMenu,
      onBlur: this.hideMenu,
      onKeyDown: this.handleKeyDown,
      tabIndex: 0,
    };

    const dropdownProps = {
      id: 'select-dropdown',
      className: cx(theme.menu, theme.show),
      onMouseEnter: () => this.blockOnBlur(true),
      onMouseLeave: () => this.blockOnBlur(false),
      ref: (ref) => {
        this.listRef = ref;
      },
    };

    const classes = cx(theme.select, className);
    const arrowclass = cx(theme.arrow, open ? theme.up : theme.down);
    return (
      <div className={classes}>
        <div {...selectInputWrapperProps} >
          <div className={theme.selected}>
            <input
              type="text"
              value={selected.label}
              disabled
            />
          </div>
          <div className={arrowclass} />
        </div>
        {open && (
          <div {...dropdownProps} >
            {this.renderOptions(options)}
          </div>
        )}
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
