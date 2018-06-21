import React from 'react';
import Preview from './Preview';
import Playground from './Playground';
import styles from './styles.scss';

const defaultCode = `
  const Example = (
    <div>
      Example Component
    </div>
  );
`;

class PlaygroundWithPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          />
          <Preview
            
          />
        </div>
        {activeComponent}
      </div>
    );
  }
}

export default PlaygroundWithPreview;
