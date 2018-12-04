import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { componentList } from '../components/common/componentList';
import WithComponentBar from '../components/WithComponentsBar/WithComponentBar';
import Documentation from '../components/WithComponentsBar/Documentation';
import { AutoCompleteComponentData } from '../components/common/componentData';
import * as components from '../../../src';

const { Navbar } = components.default;

class DocumentationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'AutoComplete',
      componentData: AutoCompleteComponentData,
      componentBarVisible: false,
    };
  }

  componentDidMount() {
    const url = this.props.location.search;
    const currentUrl = url.substring(url.lastIndexOf('=') + 1);
    const queryComponent = componentList.filter(({ name }) => name.toLowerCase() === currentUrl);
    if (queryComponent.length) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        activeComponent: queryComponent[0].name,
        componentData: queryComponent[0].componentData,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      navigate(`/documentation?component=${this.state.activeComponent.toLowerCase()}`);
    }
  }

  onClickComponent = (name, componentData) => {
    navigate(`/documentation?component=${name.toLowerCase()}`);
    this.setState({
      activeComponent: name,
      componentData,
      componentBarVisible: false,
    });
  }

  handleComponentBar = () => {
    this.setState(prevState => ({
      componentBarVisible: !prevState.componentBarVisible,
    }));
  }

  render() {
    const { activeComponent, componentData, componentBarVisible } = this.state;
    return (
      <React.Fragment>
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        {/* eslint-disable jsx-a11y/click-events-have-key-events */}
        <Navbar
          title="react lite ui"
          flat
          position="fixed"
          leftIcon={
            <i className={`icon-${componentBarVisible ? 'cross' : 'menu'} menu-mobile`} onClick={this.handleComponentBar} />
          }
        />
        <WithComponentBar
          onClickComponent={this.onClickComponent}
          activeComponent={activeComponent}
          componentBarVisible={componentBarVisible}
        >
          <Documentation componentData={componentData} activeComponent={activeComponent} />
        </WithComponentBar>
      </React.Fragment>
    );
  }
}

DocumentationPage.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DocumentationPage;
