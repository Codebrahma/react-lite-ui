/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { componentList } from '../components/common/componentList';
import components from '../../../src';
import componentTheme from '../components/common/componentData/theme.scss';
import Select from '../../../src/select';
import Layout from '../components/layout';
import theme from './playground.scss';
import { navigate } from 'gatsby';

export default class Playground extends Component {
    static propTypes = {
      location: PropTypes.oneOfType([PropTypes.object]).isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        component: componentList[0].componentData,
        currentComponent: componentList[0].name,
      };
    }

    componentDidMount() {
      const query = this.props.location.search;
      const componentName = query.split('=')[1];
      const component = this.getComponentByName(componentName || '');
      if (component.length) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          component: component[0].componentData,
          currentComponent: component[0].name,
        });
      }
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

    renderPlaygroundNavigation = () => {
      const options = componentList.map(comp => ({
        label: comp.name,
      }));
      const { currentComponent } = this.state;
      return (
        <div className="playground-navigation">
          <Select defaultValue={{ label: currentComponent }} options={options} theme={theme} onSelect={this.changeComponent} />
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
