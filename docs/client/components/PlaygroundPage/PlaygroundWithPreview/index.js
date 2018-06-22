import React from 'react';
import Preview from './Preview';
import Playground from './Playground';
import styles from './styles.scss';

const defaultCode = `
  class Example extends React.Component {
    render() {
      return (
        <div>
          Example
        </div>
      )
    }
  }
  return <Example />;
`;

class PlaygroundWithPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaultCode,
    };
  }

  handleOnChangeCode = (code) => {
    this.setState({
      code,
    });
  }

  render() {
    const {
      activeComponent,
    } = this.props;
    
    return (
      <div className={styles['playground-preview']}>
        <div className="header">
          PlaygroundWithPreview
        </div>
        <div>
          <Playground
            code={defaultCode}
            onChange={this.handleOnChangeCode}
          />
          <Preview
            code={this.state.code}
          />
        </div>
        {activeComponent}
      </div>
    );
  }
}

export default PlaygroundWithPreview;
