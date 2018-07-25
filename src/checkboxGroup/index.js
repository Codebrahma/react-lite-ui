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

    const classNames = cx(styles['checkbox-group']);
    return options.map(option => (
      <React.Fragment key={option.label}>
        <div className={classNames}>
          <div className={cx(styles['each-check'], { inline })}>
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
        <div className="clearfix" />
      </React.Fragment>
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
