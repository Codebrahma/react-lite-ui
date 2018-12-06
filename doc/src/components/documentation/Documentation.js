/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LivePreview, LiveError } from 'react-live';

import * as components from '../../../../src';

import tableTheme from './tableTheme.scss';
import componentTheme from '../common/componentData/theme.scss';
import './styles.scss';

const {
  Table,
} = components.default;

const propColumns = [
  { title: 'Prop', key: 'prop', colWidth: '120px' },
  { title: 'Type', key: 'type', colWidth: '100px' },
  { title: 'Default', key: 'defaultValue', colWidth: '100px' },
  { title: 'Description', key: 'description', colWidth: '708px' },
];
const themeColumns = [
  { title: 'Name', key: 'name', colWidth: '250px' },
  { title: 'Description', key: 'description', colWidth: '778px' },
];

class Documentation extends React.Component {
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

  renderDocsTable = (columns, data) => (
    <Table columns={columns} data={data} theme={tableTheme} />
  );

  renderHtml = htmlStructure => (
    <div className="html-content">
      <pre>
        {htmlStructure}
      </pre>
    </div>
  );

  render() {
    const { componentData, activeComponent } = this.props;
    return (
      <div className="documentation-content">
        <span className="sub-title component-title">{activeComponent}</span>
        <div className="component mb-10">
          { this.renderBasicComponent(componentData.basicComponent) }
        </div>
        <span className="sub-title">Props</span>
        <div className="props mb-10">
          { this.renderDocsTable(propColumns, componentData.propsData) }
        </div>
        <span className="sub-title">HTML Structure</span>
        <div className="html-structure mb-10">
          <div className="html-header">
            <span className="action-icon" />
            <span className="html-header-content">HTML Structure</span>
          </div>
          {this.renderHtml(componentData.htmlStructure)}
        </div>
        <span className="sub-title">Themes</span>
        <div className="themes mb-10">
          { this.renderDocsTable(themeColumns, componentData.themesData) }
        </div>
      </div>
    );
  }
}

Documentation.propTypes = {
  componentData: PropTypes.oneOfType([PropTypes.object]).isRequired,
  activeComponent: PropTypes.string.isRequired,
};

export default Documentation;
