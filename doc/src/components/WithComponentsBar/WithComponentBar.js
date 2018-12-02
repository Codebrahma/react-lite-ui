import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'gatsby';

import map from 'lodash/map';
import { componentList } from '../common/componentList';
import Button from '../../../../src/button';

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
      <div className="with-component-bar">
        <aside className="component-sidebar">
          {map(componentList, component => (
            <div
              className={`each-component-item ${activeComponent === component.name ? 'active' : ''}`}
              key={component.name}
              ref={(activeComponent === component.name) && 'scrollInto'}
              onClick = {() => onClickComponent(component.name, component.componentData)}
            >
              {component.name}
            </div>
          ))}
        </aside>
        <div className="component-content">
          <div className="link-to-playground">
            <Link to='/playground'>
              <Button bordered type='primary'>Open in playground</Button>
            </Link>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

export default WithComponentBar;
