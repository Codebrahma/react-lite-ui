import React from 'react';
import { navigate } from 'gatsby-link';
import { componentList } from '../components/common/componentList';
import WithComponentBar from '../components/WithComponentsBar/WithComponentBar';
import Documentation from '../components/WithComponentsBar/Documentation';
import { AutoCompleteDefaultCode } from '../components/common/DefaultCode';

class DocumentaionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'AutoComplete',
      defaultCode: AutoCompleteDefaultCode,
    }
  }
  
  componentDidMount() {
    navigate(`/documentation?component=${this.state.activeComponent.toLowerCase()}`);
    const url = this.props.location.search;
    const currentUrl = url.substring(url.lastIndexOf('=')+1);
    const queryComponent = componentList.filter(({ name }) => name.toLowerCase() === currentUrl);
    if(queryComponent.length) {
      this.setState({
        activeComponent: queryComponent[0].name,
        defaultCode: queryComponent[0].defaultCode,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.location.search !== prevProps.location.search) {
      navigate(`/documentation?component=${this.state.activeComponent.toLowerCase()}`)
    }
  }

  onClickComponent = (name, defaultCode) => {
    navigate(`/documentation?component=${name.toLowerCase()}`);
    console.log(this.props.location, 'location')
    this.setState({
      activeComponent: name,
      defaultCode,
    })
  }

  render() {
    const { activeComponent, defaultCode } = this.state;
    return (
      <WithComponentBar
        onClickComponent={this.onClickComponent}
        activeComponent={activeComponent}
      >
        <Documentation defaultCode={defaultCode} />
      </WithComponentBar>
    )
  }
}

export default DocumentaionPage;
