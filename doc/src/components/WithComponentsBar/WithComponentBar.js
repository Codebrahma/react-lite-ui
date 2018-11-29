import React from 'react';
import { findDOMNode } from 'react-dom';
import map from 'lodash/map';
import { componentList } from '../common/componentList';

import './styles.scss';

class WithComponentBar extends React.Component {

  componentDidUpdate(prevProps) {
    if(this.props.activeComponent !== prevProps.activeComponent) {
      findDOMNode(this.refs.scrollInto).scrollIntoViewIfNeeded();
    }
  }

  render() {
    const { children, onClickComponent, activeComponent } = this.props;
    return (
        <div className="component-bar">
        <aside className="component-sidebar">
          {map(componentList, component => (
            <div
              className={`each-component-item ${activeComponent === component.name ? 'active' : ''}`}
              key={component.name}
              ref={(activeComponent === component.name) && 'scrollInto'}
              onClick = {() => onClickComponent(component.name, component.defaultCode)}
            >
              {component.name}
            </div>
          ))}
        </aside>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default WithComponentBar;
