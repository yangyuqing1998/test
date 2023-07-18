import React, { Component } from 'react';

class Child2 extends Component {
  constructor(props) {
    super(props);
  }

  onclick = () => {
    console.log('child onclick');
  };

  render() {
    return (
      <div>
        child
        <button onClick={onclick}>child onclick</button>
      </div>
    );
  }
}

export default Child2;
