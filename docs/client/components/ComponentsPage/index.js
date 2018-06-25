import React from 'react';

import CardReadme from '../../../../src/card/readMe.md';
import ButtonReadme from '../../../../src/button/readMe.md';

import styles from './styles.scss';

const ComponentsPage = () => (
  <div className={styles.usage}>
    <div dangerouslySetInnerHTML={{ __html: CardReadme }} />
    <div dangerouslySetInnerHTML={{ __html: ButtonReadme }} />
    <div style={{ height: '300px' }} />
  </div>
);

export default ComponentsPage;
