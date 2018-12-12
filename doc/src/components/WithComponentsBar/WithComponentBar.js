/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { componentList } from '../common/componentList';
import Button from '../../../../src/button';
import Drawer from '../../../../src/drawer';

import theme from './styles.scss';
import { Link } from '@reach/router';

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
      children, onClickComponent, activeComponent, handleComponentBar, componentBarVisible, onClose, page,
    } = this.props;
    const toPage = (page === 'documentation') ? 'usage' : 'documentation';
    return (
      <div className="with-component-bar">
        <Drawer theme={theme} open={componentBarVisible} onClose={onClose} className={`component-sidebar ${componentBarVisible ? 'component-sidebar-mobile' : ''}`}>
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
        </Drawer>
        <div className="component-content">
          <div className="action-buttons">
            <span className="component-bar-toggler" onClick={handleComponentBar}>
              <Button bordered>select component</Button>
            </span>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Button onClick={this.navigateToPlayground} bordered type="primary">Open in playground</Button>
          </div>
          {children}
          <div className="component-footer">
            <span className="sub-title">{toPage}</span>
            {/* eslint-disable-next-line */}
            <Link to={`/${toPage}?component=${activeComponent.toLowerCase()}`}>
              <div className="switch-page">
                {activeComponent}
              </div>
            </Link>
          </div>
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
  onClose: PropTypes.func.isRequired,
};

WithComponentBar.defaultProps = {
  componentBarVisible: false,
};

export default WithComponentBar;
