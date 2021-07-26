import React from 'react';
import styles from './index.less';
import { useTranslation } from 'react-i18next';

export default function IndexPage() {
    const [t, i18n] = useTranslation();
    const changeLanguage = (type: 'zh' | 'en') => {
        i18n.changeLanguage(type).then((res) => {
            console.log('切换成功');
        });
    };
    return (
        <div>
            <h1 className={styles.title}>首页</h1>
            <h1 style={{ cursor: 'pointer' }}>
                <span onClick={() => changeLanguage('zh')}>中</span> /{' '}
                <span onClick={() => changeLanguage('en')}>英</span>
            </h1>
            <h2>{t('hello')}</h2>
        </div>
    );
}
