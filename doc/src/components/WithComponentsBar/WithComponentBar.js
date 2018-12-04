/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { Link } from 'gatsby';
import { componentList } from '../common/componentList';
import Button from '../../../../src/button';

import './styles.scss';

class WithComponentBar extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.activeComponent !== prevProps.activeComponent) {
      // eslint-disable-next-line react/no-string-refs, react/no-find-dom-node
      findDOMNode(this.refs.scrollInto).scrollIntoViewIfNeeded();
    }
  }

  render() {
    const {
      children, onClickComponent, activeComponent, componentBarVisible,
    } = this.props;
    return (
      <div className="with-component-bar">
        <aside className={`component-sidebar ${componentBarVisible && 'component-sidebar-mobile'}`}>
          {componentList.map(component => (
            <div
              className={`each-component-item ${activeComponent === component.name ? 'active' : ''}`}
              key={component.name}
              ref={(activeComponent === component.name) && 'scrollInto'}
              onClick={() => onClickComponent(component.name, component.componentData)}
            >
              {component.name}
            </div>
          ))}
        </aside>
        <div className="component-content">
          <div className="link-to-playground">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to={`/playground?component=${activeComponent.toLowerCase()}`}>
              <Button bordered type="primary">Open in playground</Button>
            </Link>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

WithComponentBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
  onClickComponent: PropTypes.func.isRequired,
  activeComponent: PropTypes.string.isRequired,
  componentBarVisible: PropTypes.bool,
};

WithComponentBar.defaultProps = {
  componentBarVisible: false,
};

export default WithComponentBar;
