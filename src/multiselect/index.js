import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import defaultTheme from './theme.scss';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      open: false,
    };
  }

  handleSelect = (selectedOption) => {
    const { onSelect } = this.props;
    const { selected } = this.state;
    let udpatedSelected;
    if (selected.filter(item => item.label === selectedOption.label).length) {
      udpatedSelected = selected.filter(item => item.label !== selectedOption.label);
    } else {
      udpatedSelected = [...selected, selectedOption];
    }
    onSelect(udpatedSelected);
    this.setState({
      selected: udpatedSelected,
    });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  hideMenu = () => {
    if (!this.state.blockOnBlur) {
      this.setState({
        open: false,
      });
    }
  };

  blockOnBlur = (block) => {
    this.setState({
      blockOnBlur: block,
    });
  };

  renderOptions = (options) => {
    const { theme } = this.props;
    const { selected } = this.state;
    return options.map((option) => {
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
        >
          <span>{option.label}</span>
        </span>
      );
    });
  };

  renderSelected = () => {
    const { theme } = this.props;
    const { selected } = this.state;
    return selected.map(option => (
      <div className={theme.selected}>
        <div>
          <span>{option.label}</span>
          <div className={theme.close} onClick={() => this.handleSelect(option)}/>
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
          className={theme.selectInput}
          onClick={this.toggleMenu}
          onBlur={this.hideMenu}
          tabIndex={0}
        >
          {this.renderSelected()}
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

MultiSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]),
  theme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  className: PropTypes.string,
  onSelect: PropTypes.func,
};

MultiSelect.defaultProps = {
  options: [],
  className: '',
  onSelect: value => console.log(value),
};

export default themr('CBSelect', defaultTheme)(MultiSelect);
