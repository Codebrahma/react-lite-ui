import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import defaultTheme from './theme.module.scss';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.progress = null;
    this.state = {};
  }

  static getDerivedStateFromProps(props) {
    return {
      progress: props.progress,
    };
  }

  componentDidUpdate(props) {
    this.progress.style.transform = `scaleX(${((props.progress || 0.01) / 100)})`;
  }

  render() {
    const { theme, type, showProgressText } = this.props;
    const { progress: progressState } = this.state;
    const classes = classnames(theme.bar);
    const progress = classnames(theme.progress, theme[type]);
    return (
      <div className={classes}>
        { showProgressText
          && <div className={classnames(theme.text, 'text')} aria-label="progress-text"><strong>{ `${progressState}%` }</strong></div> }
        <div
          aria-label="progress"
          className={progress}
          ref={(ref) => {
            this.progress = ref;
          }}
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]),
  type: PropTypes.string,
  progress: PropTypes.number,
  showProgressText: PropTypes.bool,
};

ProgressBar.defaultProps = {
  theme: defaultTheme,
  type: 'primary',
  progress: 0.01,
  showProgressText: false,
};

export default themr('CBProgressBar', defaultTheme)(ProgressBar);
