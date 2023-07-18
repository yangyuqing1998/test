import React from 'react';
import styles from './index.less';
const Child = (props) => {
  const { extraClassName } = props;
  return <div className={`${styles.myclass} ${extraClassName}`}>child</div>;
};

export default Child;
