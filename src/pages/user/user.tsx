import React from 'react';
import { useAccess, Access } from 'umi';

function user({ location }: any) {
    const {
        query: { name, age },
    } = location;
    const access = useAccess();
    console.log(access);

    return (
        <div>
            <Access
                accessible={access.canUser}
                fallback={<div>无权限显示</div>}
            >
                有权限显示
                <h1>姓名：{name}</h1>
                <h1>年龄：{age}</h1>
            </Access>
        </div>
    );
}

export default user;
