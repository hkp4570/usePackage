import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { useTranslation } from 'react-i18next';
import Tooltip from '../../components/Tooltip';
import { getMachineCode } from '@/services/global';

export default function IndexPage() {
    const [t, i18n] = useTranslation();
    const [visible, setVisible] = useState<boolean>(false);
    const changeLanguage = (type: 'zh' | 'en') => {
        i18n.changeLanguage(type).then((res) => {
            console.log('切换成功');
        });
    };
    const getCode = () => {
        const now = new Date().getTime();
        getMachineCode({ time: now }).then((res) => {
            console.log(res);
        });
    };
    return (
        <div>
            <div onClick={getCode} style={{ cursor: 'pointer' }}>
                获取机器码
            </div>
            <h1 className={styles.title}>首页</h1>
            <h1 style={{ cursor: 'pointer' }}>
                <span onClick={() => changeLanguage('zh')}>中</span> /{' '}
                <span onClick={() => changeLanguage('en')}>英</span>
            </h1>
            <h2>{t('hello')}</h2>

            <Tooltip visible={visible} title={<span>text</span>}>
                <h1
                    onMouseEnter={() => setVisible(true)}
                    onClick={() => setVisible(false)}
                >
                    tooltip
                </h1>
            </Tooltip>
        </div>
    );
}
