import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './theme.scss';

class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyActive: '',
    };
  }

  handleRadioBtnChange = (e, option) => {
    const { onClick } = this.props;
    e.stopPropagation();
    this.setState({
      currentlyActive: option.label,
    });
    onClick(option);
  };

  render() {
    const {
      options,
      inline,
      theme,
    } = this.props;

    const classNames = cx(styles['radio-group'], { inline });

    const isChecked = label => label === this.state.currentlyActive ? 'active' : ''; // eslint-disable-line

    return (
      <div className={classNames}>
        {options.map(option => (
          <div key={option.label}>
            {/* eslint-disable jsx-a11y/click-events-have-key-events */ }
            { /* eslint-disable jsx-a11y/no-static-element-interactions */ }
            <div
              className={cx(styles['each-radio'])}
              onClick={(e) => { this.handleRadioBtnChange(e, option); }}
              id="radio_button"
            >
              <label className={cx(styles['customized-radio'], theme['customized-radio'])}>
                <label className={cx('inner', { checked: isChecked(option.label) })}>
                  <input type="radio" />
                </label>
              </label>
              <label className={styles['each-label']}>
                {option.label}
              </label>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

RadioButtonGroup.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.string,
};

RadioButtonGroup.defaultProps = {
  inline: false,
  onClick: () => {},
  theme: '',
};

export default RadioButtonGroup;
