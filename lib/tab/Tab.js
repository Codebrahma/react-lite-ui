import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import defaultTheme from './theme.module.scss';
import '../globals/fonts.scss';
// eslint-disable-next-line react/prefer-stateless-function
class Tab extends React.Component {
  render() {
    const { children, theme } = this.props;
    return (
      <div className={classnames(theme.headerWrapper, theme.itemContent)}>
        {children}
      </div>
    );
  }
}
Tab.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  theme: PropTypes.oneOfType([PropTypes.object]),
};
Tab.defaultProps = {
  children: null,
  theme: defaultTheme,
};
export default themr('CBTab', defaultTheme)(Tab);
