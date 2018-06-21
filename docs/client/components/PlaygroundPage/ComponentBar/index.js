import React from 'react';
import map from 'lodash/map';
import styles from './styles.scss';

const componentList = [
  {
    name: 'TextBox',
  },
  {
    name: 'CheckBox',
  },
]
const ComponentBarPage = ({ children }) => (
  <div className={styles['component-bar']}>
    <aside className="component-sidebar">
      {map(componentList, component => (
        <div>
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
