/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LivePreview, LiveError } from 'react-live';

import * as components from '../../../../src';

import componentTheme from '../common/componentData/theme.scss';
import './styles.scss';


class Usage extends React.Component {
  renderBasicComponent = basicComponent => (
    <LiveProvider
      scope={{ ...components.default, componentTheme }}
      code={basicComponent}
    >
      <div className="code-preview">
        <LivePreview />
        <div className="error">
          <LiveError />
        </div>
      </div>
    </LiveProvider>
  );

  render() {
    const { componentData, activeComponent } = this.props;
    return (
      <div className="usage-content">
        <span className="sub-title component-title">{activeComponent}</span>
        <div className="component mb-10">
          { this.renderBasicComponent(componentData.basicComponent) }
        </div>
      </div>
    );
  }
}

Usage.propTypes = {
  componentData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  activeComponent: PropTypes.string.isRequired,
};

export default Usage;
