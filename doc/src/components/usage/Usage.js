/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { highlightAll } from 'prismjs';
import * as components from '../../../../src';
import componentTheme from '../common/componentData/theme.scss';
import './styles.scss';
import './prism-cb.css';

// eslint-disable-next-line no-unused-vars
const PrismJS = require('prismjs/components/prism-jsx.min');

const PreviewBlock = ({ children, header }) => (
  <div className="preview-block">
    <div className="header">{header}</div>
    <div className="pb-content">
      {children}
    </div>
  </div>
);

const PreviewElements = ({ children }) => (
  <div className="preview-elements">
    {children}
  </div>
);


class Usage extends React.Component {
  componentDidMount() {
    highlightAll();
  }

  componentDidUpdate() {
    highlightAll();
  }
  renderComponentUsage = componentData => (
    <LiveProvider
      scope={{
        ...components.default, PreviewBlock, PreviewElements, componentTheme,
      }}
      code={componentData.componentUsage || componentData.basicComponent}
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
          { this.renderComponentUsage(componentData) }
        </div>
        <div className="usage-example-code">
          <span className="sub-title">example code</span>
          <pre>
            <code className="language-jsx">
              { componentData.componentUsage || componentData.basicComponent }
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

Usage.propTypes = {
  componentData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  activeComponent: PropTypes.string.isRequired,
};

PreviewBlock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
  header: PropTypes.string.isRequired,
};

PreviewElements.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};

export default Usage;
