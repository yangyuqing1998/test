import React, { memo } from 'react';
import { history } from 'umi';
import styles from './index.less';

const Grid = memo(() => {
  return (
    <div className={styles.root}>
      <button style={{ marginBottom: '20px' }} onClick={() => history.goBack()}>
        返回上一级
      </button>
      {/* 基础网格布局（页面缩小放大时，区域空间同时变化 */}
      <div>
        <div class="row grid">
          <div class="grid-cell">1/2</div>
          <div class="grid-cell">1/2</div>
        </div>
        <div class="row grid">
          <div class="grid-cell">1/3</div>
          <div class="grid-cell">1/3</div>
          <div class="grid-cell">1/3</div>
        </div>
        <div class="row grid">
          <div class="grid-cell">1/4</div>
          <div class="grid-cell">1/4</div>
          <div class="grid-cell">1/4</div>
          <div class="grid-cell">1/4</div>
        </div>
      </div>
    </div>
  );
});

export default Grid;
