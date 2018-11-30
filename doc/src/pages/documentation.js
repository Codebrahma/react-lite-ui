import React from 'react';
import { navigate } from 'gatsby-link';
import { componentList } from '../components/common/componentList';
import WithComponentBar from '../components/WithComponentsBar/WithComponentBar';
import Documentation from '../components/WithComponentsBar/Documentation';
import { AutoCompleteComponentData } from '../components/common/componentData';

class DocumentaionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'AutoComplete',
      componentData: AutoCompleteComponentData,
    }
  }
  
  componentDidMount() {
    const url = this.props.location.search;
    const currentUrl = url.substring(url.lastIndexOf('=')+1);
    const queryComponent = componentList.filter(({ name }) => name.toLowerCase() === currentUrl);
    if(queryComponent.length) {
      this.setState({
        activeComponent: queryComponent[0].name,
        componentData: queryComponent[0].componentData,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.location.search !== prevProps.location.search) {
      navigate(`/documentation?component=${this.state.activeComponent.toLowerCase()}`)
    }
  }

  onClickComponent = (name, componentData) => {
    navigate(`/documentation?component=${name.toLowerCase()}`);
    console.log(this.props.location, 'location')
    this.setState({
      activeComponent: name,
      componentData,
    })
  }

  render() {
    const { activeComponent, componentData } = this.state;
    return (
      <WithComponentBar
        onClickComponent={this.onClickComponent}
        activeComponent={activeComponent}
      >
        <Documentation componentData={componentData} />
      </WithComponentBar>
    )
  }
}

export default DocumentaionPage;
