import React, { memo } from 'react';
import { history } from 'umi';
const Btn = memo(() => {
  return (
    <div>
      <button
        style={{ margin: '20px 0 20px 20px' }}
        onClick={() => history.goBack()}
      >
        返回上一级
      </button>
    </div>
  );
});

export default Btn;
