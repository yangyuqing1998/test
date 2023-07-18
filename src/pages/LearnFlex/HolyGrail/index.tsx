import React, { memo } from 'react';
import styles from './index.less';

const HolyGrail = memo(() => {
  return (
    <div className={styles.root}>
      {/* 圣杯布局 */}
      <div class="HolyGrail">
        <header></header>
        <div class="HolyGrail-body">
          <div class="HolyGrail-nav"></div>
          <div class="HolyGrail-content"></div>
          <div class="HolyGrail-right"></div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
});

export default HolyGrail;
