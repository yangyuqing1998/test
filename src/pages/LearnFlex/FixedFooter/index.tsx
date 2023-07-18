import React, { memo } from 'react';
import styles from './index.less';
const FixedFooter = memo(() => {
  return (
    <div className={styles.Site}>
      <header>...</header>
      <main class={styles['Site-content']}>...</main>
      <footer>...</footer>
    </div>
  );
});

export default FixedFooter;
