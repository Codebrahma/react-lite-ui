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
      code: props.defaultCode,
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
      expandDocumentation,
      isDocumentationOn,
    } = this.props;
    
    return (
      <div className={styles['playground-preview']}>
        <div className="header">
          Playground
        </div>
        <div>
          <Playground
            code={this.props.defaultCode}
            onChange={this.handleOnChangeCode}
            activeComponent={activeComponent}
            expandDocumentation={expandDocumentation}
            isDocumentationOn={isDocumentationOn}
          />
          
          <Preview
            code={this.state.code}
          />
        </div>

      </div>
    );
  }
}

export default PlaygroundWithPreview;
