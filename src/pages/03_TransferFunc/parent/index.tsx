import React, { Component, createRef } from 'react';
import Child2 from '../child2';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.childRef2 = createRef();
  }

  componentDidMount() {
    // 获取类组件实例
    console.log('this.childRef2.current', this.childRef2.current);
  }

  render() {
    return (
      <div>
        Parent
        <Child2 ref={this.childRef2} />
        <button>onclick</button>
      </div>
    );
  }
}

export default Parent;
