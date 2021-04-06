import React from 'react';
import styles from './index.less';
import RayCharts from 'raycharts';
import { useTranslation } from 'react-i18next';

const defaultChartData = [
    {
        series: [
            { sid: 1, name: '小区', unit: '单位' },
            { sid: 2, name: '防守打法', unit: '单位' },
        ],
        data: [
            { from: 1, id: 1, x: '周一', y: 15 },
            { from: 1, id: 2, x: '周二', y: 20 },
            { from: 1, id: 3, x: '周一', y: 60 },
            { from: 1, id: 4, x: '周一', y: 15 },
            { from: 1, id: 5, x: '周一', y: 20 },
            { from: 1, id: 6, x: '周一', y: 60 },
            { from: 1, id: 7, x: '周一', y: 15 },

            { from: 2, id: 1, x: '周一', y: 11 },
            { from: 2, id: 2, x: '周二', y: 25 },
            { from: 2, id: 3, x: '周一', y: 61 },
            { from: 2, id: 4, x: '周一', y: 11 },
            { from: 2, id: 5, x: '周一', y: 20 },
            { from: 2, id: 6, x: '周一', y: 60 },
            { from: 2, id: 7, x: '周一', y: 15 },
        ],
    },
];
const chartConfig = {
    _type: 'line',
    general: {
        light: { opacity: 0 },
        area: { opacity: 0 },
        point: { width: 0, height: 0, border: { line_width: 0 } },
        line: { line_width: 6 },
    },
    background: {
        border: { radius: { tleft: 0, tright: 0, bright: 0, bleft: 0 } },
        padding: { left: 0, top: 0, right: 0, bottom: 0 },
        opacity: 80,
    },
    data: {
        bubble: {
            border: {
                line_width: 0,
                radius: { tleft: 69, tright: 83, bright: 70, bleft: 80 },
            },
        },
        show: 'max',
    },
    title: {
        height: 60,
        background: { border: { line_width: 0 } },
        font: { font_size: 20 },
        visible: false,
    },
    unit: {
        height: 40,
        background: { border: { line_width: 0 } },
        font: { font_size: 16 },
        visible: false,
    },
    legend: { font: { font_size: 16 }, visible: false },
    guide: {
        xaxis: {
            font: { font_size: 16 },
            title: {
                width: 0,
                height: 0,
                background: { border: { line_width: 0 } },
                font: { font_size: 16 },
            },
            text_visible: false,
        },
        yaxis: {
            font: { font_size: 16 },
            title: {
                width: 0,
                height: 0,
                background: {
                    border: {
                        radius: { tleft: 0, tright: 0, bright: 0, bleft: 0 },
                        line_width: 0,
                    },
                },
                font: { font_size: 16 },
            },
            text_visible: false,
        },
        padding: { left: 30, right: 30 },
        grid: {
            h_line: { visible: true, line_width: 0 },
            v_line: { visible: false, line_width: 0 },
        },
    },
    handle: {
        popover: {
            outset: { blur: 0 },
            value: { font: { font_size: 14 } },
            series: { font: { font_size: 14 } },
            label: { font: { font_size: 14 } },
        },
    },
    default_theme: {
        data: {
            text_stroke: 'transparent',
            bubble: {
                color: 'rgba(0,0,0,0.3)',
                border: 'rgba(255,255,255,0.3)',
            },
        },
        graph: {
            max: 'transparent',
            min: 'transparent',
            border: 'transparent',
            outset: 'transparent',
            colors: ['rgba(0,214,249,1)', 'rgba(53,239,115,1)'],
        },
        point: { color: 'rgba(255,255,255,1)', border: 'transparent' },
        background: {
            color: 'rgba(24,33,47,1)',
            border: 'transparent',
            outset: 'transparent',
        },
        title: { color: 'transparent', border: 'transparent' },
        unit: { color: 'transparent', border: 'transparent' },
        legend: {
            label: { border: 'transparent', color: 'transparent' },
            border: 'transparent',
        },
        guide: {
            grid: {
                v_line: 'rgba(255,255,255,0.1)',
                h_line: 'rgba(255,255,255,0.1)',
            },
            xaxis: {
                line_color: 'rgba(255,255,255,0.3)',
                label: { color: 'transparent', border: 'transparent' },
            },
            yaxis: {
                line_color: 'rgba(255,255,255,0.3)',
                label: { color: 'transparent', border: 'transparent' },
            },
        },
        handle: {
            popover: {
                color: 'rgba(0,0,0,0.8)',
                border: 'transparent',
                outset: 'transparent',
            },
        },
        slot: { color: 'transparent', border: 'transparent' },
    },
};

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
            <RayCharts
                entry={true}
                width={500}
                height={300}
                configData={chartConfig}
                chartData={defaultChartData}
            />
            <h1 style={{ cursor: 'pointer' }}>
                <span onClick={() => changeLanguage('zh')}>中</span> /{' '}
                <span onClick={() => changeLanguage('en')}>英</span>
            </h1>
            <h2>{t('hello')}</h2>
        </div>
    );
}
