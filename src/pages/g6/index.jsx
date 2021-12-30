import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
//codesandbox.io/s/beautiful-driscoll-j1gom?file=/index.js

const data = {
    nodes: [
        {
            status: 0, //节点状态 用于更改颜色
            id: '5fd5ef0f', //节点id
            label: '是否报警', //节点名称
            type: 'diamond', //节点形状类型
            size: [80, 72], //节点大小
            // type: "node", //节点类型
            x: 463.515625, //
            y: 367, //节点位于画布位置
            style: {
                fill: '#E2FFF7',
            },
        },
        {
            status: 0,
            id: 'b5d33740',
            label: '属实',
            anchorPoints: [
                [0.5, 0],
                [1, 0.5],
            ],
            type: 'rect',
            size: [80, 48],
            x: 219.015625,
            y: 483.5,
            style: {
                fill: '#E7F8FA',
            },
        },
        {
            status: 0,
            id: '8402b23d',
            label: '人工核实',
            type: 'diamond',
            anchorPoints: [
                [0.5, 0],
                [0.5, 1],
            ],
            size: [80, 72],
            x: 220.515625,
            y: 365,
            style: {
                fill: '#E2FFF7',
            },
        },
        {
            status: 0,
            id: '746dd7be',
            label: '报警',
            type: 'rect',
            anchorPoints: [
                [0, 0.5],
                [0.5, 1],
                [0.5, 0],
            ],
            size: [80, 48],
            x: 464.015625,
            y: 489.5,
            style: {
                fill: '#E7F8FA',
            },
        },
        {
            status: 0,
            id: '8891eaf9',
            anchorPoints: [[0.5, 1]],
            label: '启动',
            type: 'circle',
            size: [72, 72],
            // x: 457.015625,
            // y: 117.5,
            x: 36,
            y: 36,
            style: {
                fill: '#FEF7E7',
            },
        },
        {
            status: 0,
            id: '48f92c7c',
            label: '触发火灾',
            type: 'rect',
            size: [80, 48],
            x: 460.015625,
            y: 220,
            anchorPoints: [
                [0.5, 0],
                [0, 0.5],
                [0.5, 1],
            ],
            style: {
                fill: '#E7F8FA',
            },
        },
        {
            status: 0,
            id: '0f2d9c3d',
            label: '119',
            type: 'rect',
            size: [80, 48],
            anchorPoints: [
                [0.5, 0],
                [0.5, 1],
            ],
            x: 325.515625,
            y: 584,
            style: {
                fill: '#E7F8FA',
            },
        },
        {
            status: 0,
            id: '820ef87e',
            label: '120',
            type: 'rect',
            size: [80, 48],
            anchorPoints: [
                [0.5, 0],
                [0.5, 1],
            ],
            x: 584.515625,
            y: 586,
            style: {
                fill: '#E7F8FA',
            },
        },
        {
            status: 0,
            id: '18b36170',
            label: '事件结束',
            type: 'ellipse',
            size: [80, 48],
            anchorPoints: [[0.5, 0]],
            x: 463.515625,
            y: 665,
            style: {
                fill: '#F7F0FF',
            },
        },
    ],
    edges: [
        {
            //  触发火灾 -> 是否报警
            id: 'e0f5a4a8', //连接线id
            status: 0, //连接线状态 用于更改颜色
            source: '48f92c7c', //连接线上游节点id
            sourceAnchor: 2, //上游节点连线位置 每个节点有四个连接点顺时针对应 0、1、2、3
            target: '5fd5ef0f', //连接线目标节点id
            targetAnchor: 0, //上游节点连线位置
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
        {
            //  触发火灾 -> 人工核实
            id: '3f96e12c',
            status: 0,
            source: '48f92c7c',
            type: 'quadratic',
            curvePosition: 1,
            controlPoints: [{ x: 215, y: 270 }],
            sourceAnchor: 3,
            target: '8402b23d',
            targetAnchor: 0,
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
        {
            //  人工核实 -> 属实
            id: 'be492bff',
            status: 0,
            source: '8402b23d',
            sourceAnchor: 1,
            target: 'b5d33740',
            // targetAnchor: 1,
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
        {
            // 属实 -> 报警
            id: '812cf224',
            status: 0,
            source: 'b5d33740',
            sourceAnchor: 1,
            target: '746dd7be',
            targetAnchor: 3,
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
        {
            // 是否报警 -> 报警
            id: '9ca6b433',
            status: 0,
            source: '5fd5ef0f',
            target: '746dd7be',
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
        {
            // 启动 -> 触发火灾
            id: 'eac39a7e',
            status: 0,
            source: '8891eaf9',
            sourceAnchor: 0,
            target: '48f92c7c',
            targetAnchor: 0,
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
        {
            // 报警 -> 119
            id: 'eed085a7',
            status: 0,
            source: '746dd7be',
            sourceAnchor: 1,
            target: '0f2d9c3d',
            targetAnchor: 0,
            type: 'cubic-vertical',
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
        {
            //  报警 -> 120
            id: '0d938e74',
            status: 0,
            source: '746dd7be',
            sourceAnchor: 1,
            target: '820ef87e',
            targetAnchor: 0,
            type: 'cubic-vertical',
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
        {
            //  119 -> 事件结束
            id: 'c9bd0003',
            status: 0,
            source: '0f2d9c3d',
            sourceAnchor: 2,
            target: '18b36170',
            targetAnchor: 0,
            type: 'cubic-vertical',
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
        {
            // 120 -> 事件结束
            id: '9c477a6a',
            // status: "loop",
            source: '820ef87e',
            sourceAnchor: 2,
            target: '18b36170',
            type: 'cubic-vertical',
            style: {
                endArrow: {
                    path: G6.Arrow.triangle(8, 10, 2),
                    d: 7,
                    fill: '#ccc',
                },
            },
        },
    ],
};

const Index = () => {
    const ref = React.useRef(null);
    let graph = React.useRef(null);
    useEffect(() => {
        if (!graph.current) {
            graph.current = new G6.Graph({
                container: ReactDOM.findDOMNode(ref.current),
                width: ref.current.scrollWidth || 500,
                height: ref.current.scrollHeight || 500,
                // defaultNode,
                modes: {
                    default: ['zoom-canvas'],
                },
            });
        }
        graph.current.data(data);
        graph.current.render();
        graph.current.on('node:click', function (evt) {
            console.log(evt);
        });
    }, []);
    return (
        <div
            style={{
                position: 'absolute',
                left: '100px',
                top: '100px',
                transform: 'scale(1.2)',
            }}
        >
            <div ref={ref} style={{ border: '1px solid' }} />
        </div>
    );
};

export default Index;
