import React from 'react';

import SampleCode from './sampleCode.md';
import styles from './styles.scss';

const usageStyle = {
  background: '#e2e2e2',
  padding: '10px',
};

const GettingStartedPage = () => (
  <div className={styles.code}>
    <h2 className="header">
      Getting Started
    </h2>
    <div className="sub-header">
      Installation
    </div>
    <div className="js-code">
      <pre className="hlsjs">
        npm install react-lite-ui
      </pre>
    </div>
    <div className="sub-header">
      Usage
    </div>
    <div style={usageStyle} dangerouslySetInnerHTML={{ __html: SampleCode }} />
    <div className="empty-div" />
  </div>
);

export default GettingStartedPage;
