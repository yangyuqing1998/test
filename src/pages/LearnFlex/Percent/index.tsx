import React from 'react';
import { history } from 'umi';
import styles from './index.less';

const Percent = () => {
  return (
    <div className={styles.root}>
      <button style={{ marginBottom: '20px' }} onClick={() => history.goBack()}>
        返回上一级
      </button>
      {/* 百分比布局 */}
      <div>
        <div class="box Grid">
          <div class="Grid-cell u-lof1">1/2</div>
          <div class="Grid-cell">auto</div>
          <div class="Grid-cell">auto</div>
        </div>
        <div class="box Grid">
          <div class="Grid-cell">auto</div>
          <div class="Grid-cell u-lof2">1/3</div>
        </div>
        <div class="box Grid">
          <div class="Grid-cell u-lof3">1/4</div>
          <div class="Grid-cell">auto</div>
          <div class="Grid-cell u-lof2">1/3</div>
        </div>
      </div>
    </div>
  );
};

export default Percent;
