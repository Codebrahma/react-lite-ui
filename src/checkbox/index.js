import React from 'react';
import cx from 'classnames';
import styles from './style.scss';

const Checkbox = ({ onClick, checked }) => (
  <label className={cx(styles["checkbox-container"], { checked: 'checked' })}>
    <input
      type="checkbox"
      onClick={onClick}
    />
  </label>
);

export default Checkbox;
