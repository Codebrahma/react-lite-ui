import React from 'react';
import { Link } from 'gatsby';

import * as components from '../../../src';
import WithComponentBar from '../components/ComponentsBar/componentBar';

const {
  Avatar,
  Table,
} = components.default;

const columns = [
  { title: 'Prop', key: 'prop', colWidth: '100px' },
  { title: 'Default Value', key: 'defaultValue', colWidth: '136px' },
  { title: 'Description', key: 'description', colWidth: '311px' },
];
const data = [
  {
    prop: 'prop-1',
    defaultValue: 'first value',
    description: 'dolor sit amet, consectetur amet, scing elit.',
  },
  {
    prop: 'prop-2',
    defaultValue: 'second value',
    description: 'dolor sit amet, consectetur amet, scing elit.',
  },
  {
    prop: 'prop-3',
    defaultValue: 'third value',
    description: 'dolor sit amet, consectetur amet, scing elit.',
  },
];

class Documentaion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentComponent: Avatar,
      activeComponent: 'Avatar',
    }
  }

  onClickComponent = (name, component, defaultCode) => {
    console.log('history', this.props.location)
    console.log(name, component);
    const Component = component;
    this.setState({
      CurrentComponent: Component,
      activeComponent: name,
      defaultCode,
    })
  }

  renderHtml = (defaultCode) => {
    return (
      <div className="html-content">
        <pre>
          {defaultCode}
        </pre>
      </div>
    );
  }
  render() {
    const { CurrentComponent, activeComponent, defaultCode } = this.state;
    return (
      <WithComponentBar
        onClickComponent={this.onClickComponent}
        activeComponent={activeComponent}  
      >
        <span className="sub-title">Component</span>
        <div className="component mb-10">
          {/* <CurrentComponent /> */}
        </div>
        <span className="sub-title">Props</span>
        <div className="props mb-10">
          <Table columns={columns} data={data} />
        </div>
        <span className="sub-title">HTML Structure</span>
        <div className="html-structure mb-10">
          <div className="html-header">
            <span className="action-icon" />
            <span className="html-header-content">HTML Structure</span>
          </div>
          {this.renderHtml(defaultCode)}
        </div>
        <span className="sub-title">Themes</span>
        <div className="themes mb-10">
          <Table columns={columns} data={data} />
        </div>
      </WithComponentBar>
    )
  }
}

export default Documentaion;
