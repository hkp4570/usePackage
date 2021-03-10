import React from 'react';
import { Link } from 'umi';

function NotFoundPage() {
    return (
        <div>
            <Link to="/home">返回首页 没找到页面</Link>
        </div>
    );
}

export default NotFoundPage;
