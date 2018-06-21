import React from 'react';
import ComponentBar from './ComponentBar';
import PlaygroundWithPreview from './PlaygroundWithPreview';
import Documentation from './Documentation';

class PlaygroundPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }

  render() {
    return (
      <div>
        <ComponentBar>
          <PlaygroundWithPreview />
          <Documentation />
        </ComponentBar>
      </div>
    )
  }
}

export default PlaygroundPage;
