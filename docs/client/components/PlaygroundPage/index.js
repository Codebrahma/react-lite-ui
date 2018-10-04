import React from "react";
import ComponentBar from "./ComponentBar";
import PlaygroundWithPreview from "./PlaygroundWithPreview";
import Documentation from "./Documentation";
import { componentList } from '../common/componentList';
import AutoCompleteReadme from "../../../../src/autocomplete/readMe.md";

import { AutoCompleteDefaultCode } from "../common/DefaultCode";

class PlaygroundPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDocumentationOn: false,
      activeComponent: "Autocomplete",
      defaultCode: AutoCompleteDefaultCode,
      activeDocs: AutoCompleteReadme
    };
    this.expandDocumentation = this.expandDocumentation.bind(this);
    this.handleClickComponent = this.handleClickComponent.bind(this);
  }


  /**
   * This is required for direct visit of component through url.
   * @memberof PlaygroundPage
   */
  componentDidMount() {
    const { history } = this.props;
    const url = history.location.pathname;
    const currentRoute = url.substring(url.lastIndexOf('/')+1);
    const queryComponent = componentList.filter(component => component.name.toLowerCase() === currentRoute);
    if(queryComponent.length) {
      this.setState({
        activeComponent: queryComponent[0].name,
        defaultCode: queryComponent[0].defaultCode,
        activeDocs: queryComponent[0].docs,
      });
    }
  }

  expandDocumentation() {
    this.setState({
      isDocumentationOn: !this.state.isDocumentationOn
    });
  }

  handleClickComponent(activeComponent, defaultCode, activeDocs) {
    const { history } = this.props;
    history.push(
      `/playground/${activeComponent.toLowerCase()}`,
    );
    this.setState({
      activeComponent,
      defaultCode,
      activeDocs
    });
  }

  render() {
    return (
      <div>
        <ComponentBar
          activeComponent={this.state.activeComponent}
          onClickComponent={this.handleClickComponent}
        >
          <PlaygroundWithPreview
            activeComponent={this.state.activeComponent}
            defaultCode={this.state.defaultCode}
            expandDocumentation={this.expandDocumentation}
            isDocumentationOn={this.state.isDocumentationOn}
          />
          {
            this.state.isDocumentationOn && (
            <Documentation
              activeDocs={this.state.activeDocs}
              isDocumentationOn={this.state.isDocumentationOn}
            />
            )
          }
        </ComponentBar>
      </div>
    );
  }
}

export default PlaygroundPage;
