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
      navigate(`/usage?component=${this.state.activeComponent.toLowerCase()}`);
    }
  }

  onClickComponent = (name, componentData) => {
    navigate(`/usage?component=${name.toLowerCase()}`);
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
      <Layout>
        <WithComponentBar
          page="usage"
          onClickComponent={this.onClickComponent}
          activeComponent={activeComponent}
          componentBarVisible={componentBarVisible}
          handleComponentBar={this.handleComponentBar}
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
