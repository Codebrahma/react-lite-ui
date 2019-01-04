import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import Layout from '../components/layout';
import { componentList } from '../components/common/componentList';
import WithComponentBar from '../components/WithComponentsBar/WithComponentBar';
import { AutoCompleteComponentData } from '../components/common/componentData';
import Usage from '../components/usage/Usage';

class UsagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'AutoComplete',
      componentData: AutoCompleteComponentData,
      componentBarVisible: false,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const { search } = location;
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
    const { location } = this.props;
    const { search } = location;
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
    const { location } = this.props;
    navigate(`/usage?component=${name.toLowerCase()}`);
    if (window.gtag) {
      window.gtag('config', 'UA-41862404-1', { page_path: `${location.pathname}/${name.toLowerCase()}` });
    }
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
          page="usage"
          onClickComponent={this.onClickComponent}
          activeComponent={activeComponent}
          componentBarVisible={componentBarVisible}
          handleComponentBar={this.handleComponentBar}
          onClose={this.closeComponentBar}
        >
          <Usage componentData={componentData} activeComponent={activeComponent} />
        </WithComponentBar>
      </Layout>
    );
  }
}

UsagePage.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default UsagePage;
