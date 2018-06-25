import React from 'react';

import SampleCode from './sampleCode.md';
import styles from './styles.scss';

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
    <div className="js-code">
      <div dangerouslySetInnerHTML={{ __html: SampleCode }} />
    </div>
    <div className="empty-div" />
  </div>
);

export default GettingStartedPage;
