import React from 'react';

// 记住通过props.children渲染子路由
const index: React.FC<any> = (props:any) => {

  return (
    <div>
      <h1>layouts</h1>
      {props.children}
    </div>
  );
}
export default index;