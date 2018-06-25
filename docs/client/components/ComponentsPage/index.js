import React from 'react';

import CardReadme from '../../../../src/card/readMe.md';
import ButtonReadme from '../../../../src/button/readMe.md';

import CardExample from '../../../../src/examples/card.js';
import ButtonExample from '../../../../src/examples/button.js';

import styles from './styles.scss';

const renderHowItLooks = (ExampleComponent) => (
  <div>
    <h3>How it looks</h3>
    <div className="example">
      <ExampleComponent />
    </div>
  </div>
);

const ComponentsPage = () => (
  <div className={styles.usage}>
    <div className="usage-section">
      <div dangerouslySetInnerHTML={{ __html: CardReadme }} />
      { renderHowItLooks(CardExample) }
    </div>

    <div className="usage-section">
      <div dangerouslySetInnerHTML={{ __html: ButtonReadme }} />
      { renderHowItLooks(ButtonExample) }
    </div>
  </div>
);

export default ComponentsPage;
