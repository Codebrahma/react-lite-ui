/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { navigate } from 'gatsby';
import { componentList } from '../components/common/componentList';
import components from '../../../src';
import componentTheme from '../components/common/componentData/theme.scss';
import Select from '../../../src/select';
import Button from '../../../src/button';
import Preloader from '../../../src/preloader';
import Layout from '../components/layout';
import theme from './playground.scss';

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

    componentDidUpdate(prevProps) {
      const { location } = this.props;
      const { currentComponent } = this.state;
      if (location.search !== prevProps.location.search) {
        navigate(`/playground?component=${currentComponent.toLowerCase()}`);
      }
    }

    getComponentByName = name => componentList.filter(comp => comp.name.toLowerCase() === name.toLowerCase());

    changeComponent = ({ label }) => {
      const component = this.getComponentByName(label)[0].componentData;
      this.setState({
        currentComponent: label,
        component,
      });
      navigate(`/playground?component=${label.toLowerCase()}`);
    }

    navigateBack = () => {
      const { prevPage, currentComponent } = this.state;
      navigate(`/${prevPage}?component=${currentComponent.toLowerCase()}`);
    }

    renderPlaygroundNavigation = () => {
      const options = componentList.map(comp => ({
        label: comp.name,
      }));
      const { currentComponent, prevPage } = this.state;
      return (
        <div className="playground-navigation">
          { currentComponent ? <Select defaultValue={{ label: currentComponent }} options={options} theme={theme} onSelect={this.changeComponent} /> : <Preloader
            loader="colorCircleLoader"
            size="small"
            color="primary"
          /> }
          <Button onClick={this.navigateBack} bordered >{`Go to ${prevPage}`}</Button>
        </div>
      );
    }

    render() {
      const { component } = this.state;
      return (
        <Layout>
          <div className="playround-container">
            { this.renderPlaygroundNavigation() }
            <LiveProvider code={component.basicComponent} scope={{ ...components, componentTheme }}>
              <LiveError className="playground-error" />
              <LiveEditor className="playground-editor" />
              <LivePreview className="playground-preview" />
            </LiveProvider>
          </div>
        </Layout>
      );
    }
}
