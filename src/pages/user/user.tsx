import React from 'react';

function user({location}:any) {
  const {query:{name,age}} = location;

  return (
    <div>
      <h1>姓名：{name}</h1>
      <h1>年龄：{age}</h1>
    </div>
  );
}

export default user;