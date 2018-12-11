import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import { componentList } from '../components/common/componentList';
import WithComponentBar from '../components/WithComponentsBar/WithComponentBar';
import Documentation from '../components/documentation/Documentation';
import { AutoCompleteComponentData } from '../components/common/componentData';

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
    const { search } = this.props.location;
    const queryComponent = this.getQueryComponent(search);
    if (queryComponent.length) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        activeComponent: queryComponent[0].name,
        componentData: queryComponent[0].componentData,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (search !== prevProps.location.search) {
      const queryComponent = this.getQueryComponent(search);
      if (queryComponent.length) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          activeComponent: queryComponent[0].name,
          componentData: queryComponent[0].componentData,
        });
      }
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

  getQueryComponent = (url) => {
    const currentUrl = url.substring(url.lastIndexOf('=') + 1);
    const queryComponent = componentList.filter(({ name }) => name.toLowerCase() === currentUrl);
    return queryComponent;
  }

  handleComponentBar = () => {
    this.setState(prevState => ({
      componentBarVisible: !prevState.componentBarVisible,
    }));
  }

  closeComponentBar = () => {
    this.setState({
      componentBarVisible: false,
    });
  }

  render() {
    const { activeComponent, componentData, componentBarVisible } = this.state;
    return (
      <Layout>
        <WithComponentBar
          page="documentation"
          onClickComponent={this.onClickComponent}
          activeComponent={activeComponent}
          componentBarVisible={componentBarVisible}
          handleComponentBar={this.handleComponentBar}
          onClose={this.closeComponentBar}
        >
          <Documentation componentData={componentData} activeComponent={activeComponent} />
        </WithComponentBar>
      </Layout>
    );
  }
}

DocumentationPage.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DocumentationPage;
