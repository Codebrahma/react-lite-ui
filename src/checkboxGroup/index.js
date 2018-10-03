import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Checkbox from '../checkbox';

import styles from './theme.scss';

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

    const classNames = cx(styles['checkbox-group']);
    return options.map(option => (
      <React.Fragment key={option.label}>
        <div className={classNames}>
          <div className={cx(styles['each-check'], { inline })}>
            <Checkbox
              {...option}
              checked={this.state.isChecked[option.label]}
              onClick={this.handleCheckListChange}
              theme={theme}
            />
          </div>
        </div>
        <div className="clearfix" />
      </React.Fragment>
    ));
  }
}

CheckboxGroup.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.string,
};

CheckboxGroup.defaultProps = {
  inline: false,
  onClick: () => {},
  theme: '',
};

export default CheckboxGroup;
