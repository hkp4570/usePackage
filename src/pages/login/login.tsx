import React from 'react';
import { useRef } from 'react';
import {account} from '../../services/user';

function login({history}) {
  const nameRef = useRef<any>();
  const pwdRef = useRef<any>();
  const handleSubmit = async() => {
    const res = await account({name:nameRef.current.value,password:pwdRef.current.value});
    if(res.errCode === 0){
      history.replace({
        pathname:'/user',
        query:{
          name: res.data.name as string,
          age: res.data.age as number,
        }
      })
    }
    
  }  
  return (
    <div>
      <input ref={nameRef} type="text" required placeholder='请输入用户名'/>
      <input ref={pwdRef} type="password" required placeholder='请输入密码'/>
      <button type='submit' onClick={() => handleSubmit()}>提交</button>
    </div>
  );
}

export default login;