import React, { useRef } from 'react';
import mergeClassNames from 'merge-class-names';
// import styles from  './Input.less';
import './Input.css';

export type Params = {
    name: string;
    password: string;
};

type IProps = {
    className?: string;
    onSubmit?: (e: Params) => void;
};
const componentName: React.FC<IProps> = ({ className, onSubmit }: IProps) => {
    const nameRef = useRef<any>();
    const pwdRef = useRef<any>();
    const handleSubmit = () => {
        const name = nameRef.current.value;
        const password = pwdRef.current.value;
        onSubmit && onSubmit({ name, password });
    };
    return (
        <div className={mergeClassNames('reactInput', className)}>
            <input
                ref={nameRef}
                type="text"
                required
                placeholder="请输入用户名"
            />
            <input
                ref={pwdRef}
                type="password"
                required
                placeholder="请输入密码"
            />
            <button type="submit" onClick={() => handleSubmit()}>
                提交
            </button>
        </div>
    );
};

export default componentName;
