import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Checkbox from '../checkbox';

import defaultTheme from './theme.scss';

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.options.reduce((accumulator, { label }) => {
        /* eslint-disable no-param-reassign */
        accumulator[label] = false;
        return accumulator;
      }, {}),
    };
  }

  handleCheckListChange = (label) => {
    const { onClick } = this.props;
    const { isChecked } = this.state;
    isChecked[label] = !isChecked[label];
    this.setState({
      isChecked,
    });
    onClick(label);
  };

  render() {
    const {
      options,
      inline,
      theme,
    } = this.props;

    const classNames = cx(theme['checkbox-group'], { inline });
    return (
      <div className={classNames}>
        {options.map(option => (
          <div key={option.label}>
            <div className={cx(theme['each-check'])}>
              <Checkbox
                {...option}
                checked={this.state.isChecked[option.label]}
                onClick={this.handleCheckListChange}
                theme={theme}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

CheckboxGroup.defaultProps = {
  inline: false,
  onClick: () => {},
  theme: defaultTheme,
};

export default CheckboxGroup;
