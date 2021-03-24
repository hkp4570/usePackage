import React from 'react';
import { useRef, useState } from 'react';
import { account } from '../../services/user';
import Input from '@/components/Login/Input';
import { Params } from '@/components/Login/Input';

function login({ history }: any) {
    const handleSubmit = async (e: Params) => {
        const res = await account(e);
        if (res.errCode === 0) {
            history.replace({
                pathname: '/user',
                query: {
                    name: res.data.name as string,
                    age: res.data.age as number,
                },
            });
        }
    };
    return (
        <Input className={'customInput'} onSubmit={(e) => handleSubmit(e)} />
    );
}

export default login;
