import React from 'react';

import CardReadme from '../../../../src/card/readMe.md';

import styles from './styles.scss';

const ComponentsPage = () => (
  <div className={styles.usage}>
    <div dangerouslySetInnerHTML={{ __html: CardReadme }} />
    <div style={{ height: '100px' }} />
  </div>
);

export default ComponentsPage;
