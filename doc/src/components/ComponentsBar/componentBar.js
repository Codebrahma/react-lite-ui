import React from 'react';
import map from 'lodash/map';
import { componentList } from '../common/componentList';

import './styles.scss';

const WithComponentBar = ({ children, onClickComponent, activeComponent }) => (
  <div className="component-bar">
    <aside className="component-sidebar">
      {map(componentList, component => (
        <div
          className={`each-component-item ${activeComponent === component.name ? 'active' : ''}`}
          key={component.name}
          onClick = {() => onClickComponent(component.name, component.component, component.defaultCode, component.componentProps, component.componentTheme)}
        >
          {component.name}
        </div>
      ))}
    </aside>
    <div className="playground-content">
      {children}
    </div>
  </div>
);

export default WithComponentBar;
