import React from 'react';
import { LiveProvider, LivePreview, LiveError } from 'react-live';
import { Link } from 'gatsby';

import * as components from '../../../../src';
import { AvatarDefaultCode } from '../common/DefaultCode';
import theme from '../common/DefaultCode/Table/theme.scss';

const {
  Button,
  Table,
} = components.default;

const propColumns = [
  { title: 'Prop', key: 'prop', colWidth: '100px' },
  { title: 'Type', key: 'type', colWidth: '100px' },
  { title: 'Default Value', key: 'defaultValue', colWidth: '136px' },
  { title: 'Description', key: 'description', colWidth: '311px' },
];
const themeColumns = [
  { title: 'Name', key: 'name', colWidth: '200px' },
  { title: 'Description', key: 'description', colWidth: '350px' },
];

class Documentaion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'Avatar',
      defaultCode: AvatarDefaultCode,
    }
  }

  onClickComponent = (name, defaultCode) => {
    this.setState({
      activeComponent: name,
      defaultCode,
    })
  }

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
    <Table columns={columns} data={data} theme={theme}/>
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
    const { defaultCode } = this.props;
    return (
      <div className="documentation-content">
        <span className="sub-title">Component</span>
        <div className="component mb-10">
          { this.renderBasicComponent(defaultCode.basicComponent) }
        </div>
        <span className="sub-title">Props</span>
        <div className="props mb-10">
          { this.renderDocsTable(propColumns, defaultCode.propsData) }
        </div>
        <span className="sub-title">HTML Structure</span>
        <div className="html-structure mb-10">
          <div className="html-header">
            <span className="action-icon" />
            <span className="html-header-content">HTML Structure</span>
          </div>
          {this.renderHtml(defaultCode.htmlStructure)}
        </div>
        <span className="sub-title">Themes</span>
        <div className="themes mb-10">
          { this.renderDocsTable(themeColumns, defaultCode.themesData) }
        </div>
        <div className="link-to-playground">
          <Link to='/playground'>
            <Button bordered type='primary'>Open in playground</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Documentaion;
