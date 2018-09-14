import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      open: false,
      showMenu: true,
    };
  }

  handleSelect = (selected) => {
    this.setState({
      selected,
      open: false,
      showMenu: false,
    });
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      open: !prevState.open,
      showMenu: !prevState.open,
    }));
  }

  hideMenu = () => {
    if (!this.state.blockOnBlur) {
      this.setState({
        open: false,
        showMenu: false,
      });
    }
  }

  blockOnBlur = (block) => {
    this.setState({
      blockOnBlur: block,
    });
  }

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
    const { selected, open, showMenu } = this.state;
    const classes = cx(theme.select, className);
    const menuclass = cx(theme.menu, open && showMenu ? theme.show : theme.hide);
    const arrowclass = cx(theme.arrow, open ? theme.up : theme.down);
    return (
      <div className={classes}>
        <div
          className={theme.selectInput}
          onClick={this.toggleMenu}
          onBlur={this.hideMenu}
          tabIndex={0}
        >
          <input className={theme.selected} value={selected.label} disabled />
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
};

Select.defaultProps = {
  options: [],
  className: '',
};

export default themr('CBSelect', defaultTheme)(Select);
