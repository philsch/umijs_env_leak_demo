import React from 'react';
import styles from './index.less';

const test = process.env.SOME_ENV_VAR;

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
