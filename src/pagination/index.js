import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import defaultTheme from './theme.scss';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActive: props.defaultActive,
    };
  }

  navigate = (page) => {
    const { onChange } = this.props;
    const { currentActive } = this.state;
    if (page <= 0) {
      this.setState(prevState => ({
        currentActive: prevState.currentActive + (page === 0 ? 1 : page),
      }));
    } else {
      this.setState({
        currentActive: page,
      });
    }
    if (currentActive !== page) {
      onChange(page);
    }
  };

  showSteps = () => {
    const { theme, total } = this.props;
    const { currentActive } = this.state;

    const steps = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const key of Array(3).keys()) {
      let page;

      if (currentActive > 2) {
        if (currentActive >= total - 1) {
          page = (key - 3) + total;
        } else {
          page = currentActive + (key - 1);
        }
      } else {
        page = key + 2;
      }
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      steps.push(
        <div
          className={classnames(theme['pagination-steps'], {
            [theme.active]: page === currentActive,
          })}
          data-react-active-page={page === currentActive ? 'active' : undefined}
          key={page}
          onClick={() => this.navigate(page)}
        >
          {page}
        </div>);
    }

    return [
      <div
        className={classnames(theme['pagination-steps'], {
          [theme.active]: currentActive === 1,
        })}
        key={1}
        data-react-active-page={currentActive === 1 ? 'active' : undefined}
        onClick={() => this.navigate(1)}
      >
        {1}
      </div>,
      currentActive > 2 ? this.renderDots('left') : null,
      steps,
      currentActive < total - 1 ? this.renderDots('right') : null,
      <div
        className={classnames(theme['pagination-steps'], {
          [theme.active]: total === currentActive,
        })}
        key={total}
        data-react-active-page={total === currentActive ? 'active' : undefined}
        onClick={() => this.navigate(total)}
      >
        {total}
      </div>,
    ];
  };

  renderDots = (i) => {
    const { theme } = this.props;
    return (
      <div className={theme.dots} key={`dot-${i}`}>
        <span />
        <span />
      </div>
    );
  };

  render() {
    const {
      theme, navigationButtons, total, className,
    } = this.props;
    const { currentActive } = this.state;

    const rootProps = {
      className: classnames(theme['pagination-wrapper'], className),
    };

    const paginationProps = {
      className: theme.pagination,
    };

    return (
      <div {...rootProps}>
        {/* eslint-disable jsx-a11y/click-events-have-key-events */}
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        {navigationButtons ? (
          <div
            className={classnames(theme.left, {
              [theme.disabled]: currentActive === 1,
            })}
            id="prev-button"
            onClick={currentActive !== 1 ? () => this.navigate(-1) : undefined}
          />
        ) : null}
        <div {...paginationProps}>{this.showSteps()}</div>
        {navigationButtons ? (
          <div
            className={classnames(theme.right, {
              [theme.disabled]: currentActive === total,
            })}
            id="next-button"
            onClick={
              currentActive !== total ? () => this.navigate(0) : undefined
            }
          />
        ) : null}
      </div>
    );
  }
}

Pagination.propTypes = {
  theme: PropTypes.oneOfType([PropTypes.object]),
  defaultActive: PropTypes.number,
  total: PropTypes.number.isRequired,
  navigationButtons: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  theme: defaultTheme,
  defaultActive: 1,
  navigationButtons: true,
  className: '',
  onChange: () => {},
};

export default themr('CBPagination', defaultTheme)(Pagination);
