import React, {
  createRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

const Child = forwardRef((props, ref) => {
  const h2Ref = useRef();
  const onclick = () => {
    console.log('child onclick');
  };
  // 只暴露回调中的内容给父组件，回调中的内容绑定在 ref.current 中
  useImperativeHandle(ref, () => {
    return {
      handleOnclick() {
        onclick();
      },
      getH2() {
        return h2Ref.current;
      },
    };
  });
  return (
    //   将 ref 绑定在根元素上，可以拿到根元素
    <div>
      <h2 ref={h2Ref}>child</h2>
    </div>
  );
});

const Parent = () => {
  const childRef = createRef();

  const onclick = () => {
    //   获取子组件中暴露出来的方法
    console.log(childRef.current);
    // childRef.current.handleOnclick();
    // const h2DOM = childRef.current.getH2();
    // console.log(h2DOM);
  };

  return (
    <div>
      Parent
      <button onClick={onclick}>获取子组件实例</button>
      <hr />
      <Child ref={childRef}></Child>
    </div>
  );
};

export default Parent;
