import React from 'react';
import { useState, useEffect } from 'react';

function useAuth() {
  let isLogin:boolean;
  return isLogin = Math.random() > 0.3;
}

export default useAuth;