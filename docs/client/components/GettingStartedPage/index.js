import React from 'react';

import SampleCode from './sampleCode.md';
import styles from './styles.scss';

const usageStyle = {
  height: '400px',
  overflowY: 'scroll',
  background: '#d2d2d2',
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
      npm install react-lite
    </div>
    <div className="sub-header">
      Usage
    </div>
    <div style={usageStyle} dangerouslySetInnerHTML={{ __html: SampleCode }} />
    <div className="empty-div" />
  </div>
);

export default GettingStartedPage;
