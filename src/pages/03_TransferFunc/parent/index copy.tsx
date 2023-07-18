import React, { createRef, useEffect, useRef } from 'react';
import styles from './index.less';
import Child from '../child';
const Parent = () => {
  const childRef = createRef();
  const btnRef = useRef();

  const onclick = () => {
    // 调用子组件的 onclick 方法
  };

  useEffect(() => {
    console.log('childRef', childRef.current);
    console.log('btnRef', btnRef.current);
  }, []);
  return (
    <div>
      Parent
      <Child ref={childRef} />
      <button ref={btnRef} onClick={onclick}>
        click
      </button>
    </div>
  );
};

export default Parent;
