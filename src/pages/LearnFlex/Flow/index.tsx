import React, { memo } from 'react';
import Btn from '../components/Btn';
import styles from './index.less';
import { Tooltip } from 'antd';

const Flow = memo(() => {
  return (
    <div>
      <Btn></Btn>
      <div>
        <div className={styles.box}>
          {/* 8个 */}
          <div className={styles.parent}>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
          </div>
        </div>

        <div className={styles.box}>
          {/* 9个 */}
          <div className={styles.parent}>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
          </div>
        </div>

        <div className={styles.box}>
          {/* 10个 */}
          <div className={styles.parent}>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
            <div className={styles.child}> </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Flow;
