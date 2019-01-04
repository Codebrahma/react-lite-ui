/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  LiveProvider, LiveEditor, LiveError, LivePreview,
} from 'react-live';
import { navigate } from 'gatsby';
import * as components from 'react-lite-ui';
import Select from 'react-lite-ui/components/select';
import Button from 'react-lite-ui/components/button';
import Preloader from 'react-lite-ui/components/preloader';
import componentTheme from '../components/common/componentData/theme.scss';
import { componentList } from '../components/common/componentList';
import Layout from '../components/layout';
import match from '../images/match.svg';
import theme from './pgTheme.module.scss';
import './playground.scss';

export default class Playground extends Component {
  static propTypes = {
    location: PropTypes.oneOfType([PropTypes.object]).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      component: componentList[0].componentData,
      currentComponent: undefined,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const query = location.search;
    const componentName = query.split('=')[1];
    const component = this.getComponentByName(componentName || '');
    if (component.length) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        component: component[0].componentData,
        currentComponent: component[0].name,
      });
    } else {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        currentComponent: componentList[0].name,
      });
    }
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      prevPage: location.state === null ? 'documentation' : location.state.prevPage || 'documentation',
    });
  }

  // eslint-disable-next-line max-len
  getComponentByName = name => componentList.filter(comp => comp.name.toLowerCase() === name.toLowerCase());

  changeComponent = ({ label }) => {
    const { location } = this.props;
    const component = this.getComponentByName(label)[0].componentData;
    this.setState({
      currentComponent: label,
      component,
    });
    navigate(`/playground?component=${label.toLowerCase()}`);
    if (window) {
      window.gtag('config', 'UA-41862404-1', { page_path: `${location.pathname}/${label.toLowerCase()}` });
    }
  }

  navigateBack = () => {
    const { prevPage, currentComponent } = this.state;
    const { location } = this.props;
    navigate(`/${prevPage}?component=${currentComponent.toLowerCase()}`);
    if (window) {
      window.gtag('config', 'UA-41862404-1', { page_path: `/${location.pathname.replace(new RegExp('/', 'g'), '')}/${currentComponent.toLowerCase()}` });
    }
  }

  renderPlaygroundNavigation = () => {
    const options = componentList.map(comp => ({
      label: comp.name,
    }));
    const { currentComponent, prevPage } = this.state;
    return (
      <div className="playground-navigation">
        {currentComponent ? (
          <div>
            <Select
              defaultValue={{ label: currentComponent }}
              options={options}
              theme={theme}
              onSelect={this.changeComponent}
            />
            <span>Select a component from the dropdown to edit it in playground.</span>
          </div>
        ) : (
          <Preloader
            loader="colorCircleLoader"
            size="small"
            color="primary"
          />
        )
        }
        <Button theme={theme} onClick={this.navigateBack} flat borderless>{`Go to ${prevPage}`}</Button>
      </div>
    );
  }

  render() {
    const { component } = this.state;
    return (
      <Layout>
        <div className="playround-container">
          {this.renderPlaygroundNavigation()}
          <LiveProvider
            code={component.basicComponent}
            scope={{ ...components, componentTheme, match }}
          >
            <LivePreview className="playground-preview" />
            <div className="playground-error">
              <LiveError />
            </div>
            <LiveEditor className="playground-editor" />
          </LiveProvider>
        </div>
      </Layout>
    );
  }
}
