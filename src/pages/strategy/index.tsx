import React, { useState } from 'react';
import { Validator } from './strategy';

interface ValidatorResultType {
    account?: string;
    password?: string;
    phone?: string;
}
const Strategy = () => {
    const [inpState, setInpState] = useState({
        account: '',
        password: '',
        phone: '',
    });
    const [validatorResult, setValidatorResult] = useState<ValidatorResultType>({});
    const validatorFunc = function () {
        // @ts-ignore
        const validator = new Validator();

        validator.add('account', inpState.account, [
            { strategy: 'isNonEmpty', errMsg: '账号不能为空' },
            { strategy: 'minLength:6', errMsg: '长度不小于6位' },
        ]);
        validator.add('password', inpState.password, [
            { strategy: 'isNonEmpty', errMsg: '密码不能为空' },
            { strategy: 'minLength:8', errMsg: '长度不小于8位' },
        ]);
        validator.add('phone', inpState.phone, [{ strategy: 'isMobile', errMsg: '手机号格式不正确' }]);

        return validator.start();
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const err = validatorFunc();
        if (!err) {
            console.log('验证成功');
            setValidatorResult({});
        } else {
            setValidatorResult(err);
        }
    };
    const getInfo = (name: 'account' | 'password' | 'phone', value: string) => {
        setInpState((state) => ({ ...state, [name]: value }));
    };
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                账号：
                <input type="text" name="account" value={inpState.account} onChange={(e) => getInfo('account', e.target.value)} />
                <br></br>
                <div>{validatorResult.account ? validatorResult.account[0] : ''}</div>
                密码：
                <input type="password" name="password" value={inpState.password} onChange={(e) => getInfo('password', e.target.value)} />
                <br></br>
                <div>{validatorResult.password ? validatorResult.password[0] : ''}</div>
                手机号：
                <input type="text" name="phone" value={inpState.phone} onChange={(e) => getInfo('phone', e.target.value)} />
                <br></br>
                <div>{validatorResult.phone ? validatorResult.phone[0] : ''}</div>
                <button type="submit">提交</button>
            </form>
        </div>
    );
};

export default Strategy;
