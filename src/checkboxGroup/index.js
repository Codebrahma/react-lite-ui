import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import cx from 'classnames';
import styles from './style.scss';

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.options.reduce((accumulator, { label, value }) => { 
          accumulator[label] = false;
          return accumulator;
        }, {}),
    }
  }

  handleCheckListChange = (label) => {
    const isChecked = this.state.isChecked;
    isChecked[label] = !isChecked[label];
    this.setState({
      isChecked,
    });
  }

  render() {
    const {
      options,
      inline,
    } = this.props;

    const classNames = cx(styles['checkbox-group'], { inline });
    return options.map(option => (
      <div key={option.label} className={classNames}>
        <div className={styles['each-check']}>
          <Checkbox
            {...option}
            checked={this.state.isChecked[option.label]}
            onClick={this.handleCheckListChange}
          />
          <label className={styles['each-label']}>
            {option.label}
          </label>
        </div>
      </div>
    ));
  }
}

CheckboxGroup.propTypes = {
  options: PropTypes.array.isRequired,
  inline: PropTypes.bool,
};

CheckboxGroup.defaultProps = {
  inline: false,
};

export default CheckboxGroup;
