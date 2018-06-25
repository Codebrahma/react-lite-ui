import React from 'react';
import map from 'lodash/map';
import { componentList } from '../../common/componentList';

import styles from './styles.scss';

const ComponentBarPage = ({ children, onClickComponent, activeComponent }) => (
  <div className={styles['component-bar']}>
    <aside className="component-sidebar">
      {map(componentList, component => (
        <div
          className={`each-component-item ${activeComponent === component.name ? 'active' : ''}`}
          key={component.name}
          onClick={() => { onClickComponent(component.name, component.defaultCode, component.docs) }}
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

export default ComponentBarPage;
