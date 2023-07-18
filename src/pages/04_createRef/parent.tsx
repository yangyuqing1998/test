import React, { Component, createRef } from 'react';

class Child extends Component {
  onclick = () => {
    console.log('child onclick');
  };

  render() {
    return <div>child</div>;
  }
}

class parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    // 绝对不能写成 const childRef
    this.childRef = createRef(null);
  }

  // 这里不能写成 const funcName
  addOne = () => {
    // this.state.counter += 1 (错误用法)
    this.setState({ ...this.state, counter: this.state.counter + 1 });
    // 调用child组件方法
    this.childRef.current.onclick();
  };

  render() {
    return (
      <div>
        Parent
        <div>
          {this.state.counter}
          {/* 这里必须使用 this.addOne, 不能只写 addOne */}
          <button onClick={this.addOne}>+1</button>
        </div>
        <hr />
        <Child ref={this.childRef}></Child>
      </div>
    );
  }
}

export default parent;
