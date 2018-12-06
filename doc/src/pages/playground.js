/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { componentList } from '../components/common/componentList';
import components from '../../../src';
import componentTheme from '../components/common/componentData/theme.scss';

import Layout from '../components/layout';
import './playground.scss';

export default class Playground extends Component {
    static propTypes = {
      location: PropTypes.oneOfType([PropTypes.object]).isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        component: componentList[0],
      };
    }

    componentDidMount() {
      const query = this.props.location.search;
      const componentName = query.split('=')[1];
      const component = componentList.filter(comp => comp.name.toLowerCase() === componentName)[0]
        .componentData;
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        component,
      });
    }

    render() {
      const { component } = this.state;
      return (
        <Layout>
          <div className="playround-container">
            <LiveProvider code={component.basicComponent} scope={{ ...components, componentTheme }}>
              <LiveError className="playground-error" />
              <LiveEditor />
              <div className="playground-preview">
                <LivePreview />
              </div>
            </LiveProvider>
          </div>
        </Layout>
      );
    }
}
