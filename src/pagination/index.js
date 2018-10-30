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
    if (page <= 0) {
      this.setState(prevState => ({
        currentActive: prevState.currentActive + (page === 0 ? 1 : page),
      }));
    } else {
      this.setState({
        currentActive: page,
      });
    }
  };

  showSteps = () => {
    const { theme, total } = this.props;
    const { currentActive } = this.state;

    const steps = [...Array(3).keys()].map((key) => {
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
      return (
        <div
          className={classnames(theme['pagination-steps'], {
            [theme.active]: page === currentActive,
          })}
          key={page}
          onClick={() => this.navigate(page)}
        >
          {page}
        </div>
      );
    });

    return [
      <div
        className={classnames(theme['pagination-steps'], {
          [theme.active]: currentActive === 1,
        })}
        key={1}
        onClick={() => this.navigate(1)}
      >
        {1}
      </div>,
      currentActive > 2 ? this.renderDots() : null,
      steps,
      currentActive < total - 1 ? this.renderDots() : null,
      <div
        className={classnames(theme['pagination-steps'], {
          [theme.active]: total === currentActive,
        })}
        key={total}
        onClick={() => this.navigate(total)}
      >
        {total}
      </div>,
    ];
  };

  renderDots = () => {
    const { theme } = this.props;
    return (
      <div className={theme.dots}>
        <span />
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
            onClick={currentActive !== 1 ? () => this.navigate(-1) : undefined}
          />
        ) : null}
        <div {...paginationProps}>{this.showSteps()}</div>
        {navigationButtons ? (
          <div
            className={classnames(theme.right, {
              [theme.disabled]: currentActive === total,
            })}
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
};

Pagination.defaultProps = {
  theme: defaultTheme,
  defaultActive: 1,
  navigationButtons: false,
  className: '',
};

export default themr('CBPagination', defaultTheme)(Pagination);
