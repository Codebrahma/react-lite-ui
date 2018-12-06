/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { componentList } from '../common/componentList';
import Button from '../../../../src/button';

import './styles.scss';

class WithComponentBar extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.activeComponent !== prevProps.activeComponent) {
      const element = document.querySelector('div[data-react-active-component=active]');
      const { top, height } = element.getBoundingClientRect();
      const { parentNode } = document.querySelector('div[data-react-active-component=active]');
      const maxOffset = parentNode.offsetTop + parentNode.offsetHeight;
      const minOffset = parentNode.offsetTop;
      if (top + height > maxOffset || top < minOffset) {
        element.scrollIntoView();
      }
    }
  }

  navigateToPlayground = () => {
    const { page, activeComponent } = this.props;
    navigate(`/playground?component=${activeComponent.toLowerCase()}`, { state: { prevPage: page } });
  }

  render() {
    const {
      children, onClickComponent, activeComponent, handleComponentBar, componentBarVisible,
    } = this.props;
    return (
      <div className="with-component-bar">
        <aside className={`component-sidebar ${componentBarVisible && 'component-sidebar-mobile'}`}>
          {componentList.map(component => (
            <div
              className={`each-component-item ${activeComponent === component.name ? 'active' : ''}`}
              key={component.name}
              data-react-active-component={(activeComponent === component.name) ? 'active' : undefined}
              onClick={() => onClickComponent(component.name, component.componentData)}
            >
              {component.name}
            </div>
          ))}
        </aside>
        <div className="component-content">
          <div className="action-buttons">
            <span className="component-bar-toggler" onClick={handleComponentBar}>
              <Button bordered>select component</Button>
            </span>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Button onClick={this.navigateToPlayground} bordered type="primary">Open in playground</Button>
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
  handleComponentBar: PropTypes.func.isRequired,
  componentBarVisible: PropTypes.bool,
  page: PropTypes.string.isRequired,
};

WithComponentBar.defaultProps = {
  componentBarVisible: false,
};

export default WithComponentBar;
