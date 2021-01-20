import React from 'react';
import { useRef } from 'react';

function login(props:any) {
  const nameRef = useRef<any>();
  const pwdRef = useRef<any>();
  const handleSubmit = () => {
    fetch('/api/login',{
      method:'POST',
      body: JSON.stringify({
        name: nameRef.current.value,
        password: pwdRef.current.value,
      })
    })
  }  
  return (
    <div>
      login
      <input ref={nameRef} type="text" placeholder='请输入用户名'/>
      <input ref={pwdRef} type="text" placeholder='请输入密码'/>
      <button type='submit' onClick={() => handleSubmit()}>提交</button>
    </div>
  );
}

export default login;