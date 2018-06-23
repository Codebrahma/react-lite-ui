import React from 'react';
import ComponentBar from './ComponentBar';
import PlaygroundWithPreview from './PlaygroundWithPreview';
import Documentation from './Documentation';

class PlaygroundPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDocumentationOn: false,
      activeComponent: '',
      activeDocs: '',
    };
    this.expandDocumentation = this.expandDocumentation.bind(this);
    this.handleClickComponent = this.handleClickComponent.bind(this);
  }

  expandDocumentation() {
    this.setState({
      isDocumentationOn: !this.state.isDocumentationOn,
    });
  }

  handleClickComponent(activeComponent, defaultCode, activeDocs) {
    console.log('activeDocs ', activeDocs);
    this.setState({
      activeComponent,
      defaultCode,
      activeDocs,
    });
  }

  render() {
    return (
      <div>
        <ComponentBar
          onClickComponent={this.handleClickComponent}
        >
          <PlaygroundWithPreview
            activeComponent={this.state.activeComponent}
            defaultCode={this.state.defaultCode}
          />
          <Documentation
            isDocumentationOn={this.state.isDocumentationOn}
            expandDocumentation={this.expandDocumentation}
          />
        </ComponentBar>
      </div>
    );
  }
}

export default PlaygroundPage;
