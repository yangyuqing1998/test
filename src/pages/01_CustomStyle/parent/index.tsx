import React from 'react';
import styles from './index.less';
import Child from '../child';
const Parent = () => {
  return (
    <div>
      自定义样式
      <Child extraClassName={styles.customClass}></Child>
    </div>
  );
};

export default Parent;
