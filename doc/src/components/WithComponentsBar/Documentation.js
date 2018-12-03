import React from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';

import * as components from '../../../../src';

import tableTheme from './tableTheme.scss';
const {
  Table,
} = components.default;

const propColumns = [
  { title: 'Prop', key: 'prop', colWidth: '120px' },
  { title: 'Type', key: 'type', colWidth: '100px' },
  { title: 'Default', key: 'defaultValue', colWidth: '80px' },
  { title: 'Description', key: 'description', colWidth: '550px' },
];
const themeColumns = [
  { title: 'Name', key: 'name', colWidth: '250px' },
  { title: 'Description', key: 'description', colWidth: '600px' },
];

class Documentaion extends React.Component {

  renderBasicComponent = (basicComponent) => (
    <LiveProvider 
      scope={{ ...components.default }}
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

  renderHtml = (htmlStructure) => {
    return (
      <div className="html-content">
        <pre>
          {htmlStructure}
        </pre>
      </div>
    );
  };

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
    )
  }
}

export default Documentaion;
