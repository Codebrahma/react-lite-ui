import React from 'react';

import styles from './styles.scss';

const Preview = ({ code }) => (
  <div className={styles.preview}>
    <div className="header">
      Preview
    </div>
    {code}
  </div>
);

export default Preview;