import React, { memo } from 'react';
import styles from './index.less';
import Btn from '../components/Btn';
import { Tooltip, Button } from 'antd';
const InputLayout = memo(() => {
  const tipTitle =
    '是打算百度空间哈上课是打算百度空间哈上课是打算百度空间哈上课是打算百度空间哈上课';
  return (
    <div className={styles.root}>
      <Btn></Btn>
      {/* overlayInnerStyle={{backgroundColor:'#fff', fontSize:'12px', color:'#333', border:'1px solid #333', whiteSpace:'nowrap'}} */}
      <div className={styles.toolTip}>
        <div className={styles.box}>
          <span>是打算百度空间哈上课</span>

          <span>是打算百度空间哈上课</span>

          <span>是打算百度空间哈上课</span>
          <span>是打算百度空间哈上课</span>
          <span>是打算百度空间哈上课</span>
        </div>

        {/* <Tooltip placement="leftTop" title={tipTitle}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip
          placement="bottomLeft"
          title={tipTitle}
          overlayClassName={'newToolTip'}
        >
          <div className={styles.box}>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
          </div>
        </Tooltip>
        <Tooltip placement="bottomLeft" title={tipTitle}>
          <div className={styles.box}>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
          </div>
        </Tooltip>{' '}
        <Tooltip placement="bottomLeft" title={tipTitle}>
          <div className={styles.box}>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
            <span>是打算百度空间哈上课</span>
          </div>
        </Tooltip> */}
      </div>
    </div>
  );
});

export default InputLayout;
