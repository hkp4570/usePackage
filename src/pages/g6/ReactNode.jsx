import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import {
    Rect,
    Text,
    Circle,
    Image,
    Group,
    Ellipse,
    createNodeFromReact,
} from '@antv/g6-react-node';

const Tag = ({ text, color }) => (
    <Rect
        style={{
            fill: color,
            padding: [5, 10],
            width: 'auto',
            radius: [4],
            margin: [0, 8],
        }}
    >
        <Text style={{ fill: '#fff', fontSize: 10 }}>{text}</Text>
    </Rect>
);

const Card = ({ cfg }) => {
    const { collapsed = false } = cfg;

    return (
        <Group draggable>
            <Rect
                style={{
                    width: 400,
                    height: 'auto',
                    fill: '#fff',
                    stroke: '#ddd',
                    shadowColor: '#eee',
                    shadowBlur: 30,
                    radius: [8],
                    // justifyContent: 'center',
                    padding: [18, 0],
                }}
                draggable
            >
                <Text
                    style={{
                        fill: '#000',
                        //   margin: [0, 24],
                        //   fontSize: 16,
                        //   fontWeight: 'bold',
                    }}
                >
                    这是一个卡片
                </Text>
                <Text style={{ fill: '#ccc', fontSize: 12, margin: [12, 24] }}>
                    我是一段特别特别特别特别特别特别特别长的描述
                </Text>
                {collapsed && (
                    <Group>
                        <Image
                            style={{
                                img:
                                    'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                                width: 200,
                                height: 200,
                                margin: [24, 'auto'],
                            }}
                        />
                        <Rect
                            style={{
                                width: 'auto',
                                flexDirection: 'row',
                                padding: [4, 12],
                            }}
                        >
                            <Tag color="#66ccff" text="我是" />
                            <Tag color="#66ccff" text="很多个" />
                            <Tag color="#66ccff" text="很多个的" />
                            <Tag color="#66ccff" text="标签" />
                        </Rect>
                    </Group>
                )}
                <Circle
                    style={{
                        position: 'absolute',
                        x: 380,
                        y: 20,
                        r: 5,
                        fill: collapsed ? 'blue' : 'green',
                    }}
                >
                    <Text
                        style={{
                            fill: '#fff',
                            fontSize: 10,
                            margin: [-6, -3, 0],
                            cursor: 'pointer',
                        }}
                        onClick={(evt, node, shape, graph) => {
                            graph.updateItem(node, {
                                collapsed: !collapsed,
                            });
                        }}
                    >
                        {collapsed ? '-' : '+'}
                    </Text>
                </Circle>
            </Rect>
        </Group>
    );
};

/**
 * 可以使用flex布局实现文字位置调整 当时没有菱形
 * @param {*} param0
 * @returns
 */
const Card1 = ({ cfg }) => {
    const { size, style, labelCfg } = cfg;
    console.log(cfg, 'cfg');
    return (
        <Group>
            <Rect
                style={{
                    width: size[0],
                    height: size[1],
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    alignItems: 'end',
                    ...style,
                }}
            >
                <Text
                    style={{
                        fill: '#000',
                        ...labelCfg.style,
                    }}
                >
                    test1
                </Text>
            </Rect>
        </Group>
    );
};
G6.registerNode('test', createNodeFromReact(Card));
G6.registerNode('test1', createNodeFromReact(Card1));
const POINT = [
    [0.5, 0], // 上
    [1, 0.5], // 右
    [0.5, 1], // 下
    [0, 0.5], // 左
];
const data = {
    nodes: [
        {
            id: 'node1',
            label: '节点一',
            type: 'test',
            size: [80, 50],
            x: 100,
            y: 20,
            anchorPoints: POINT,
        },
        {
            id: 'node2',
            label: '节点二',
            type: 'test1',
            size: [80, 50],
            x: 100,
            y: 150,
            anchorPoints: POINT,
        },
        {
            id: 'node3',
            label: '节点三',
            type: 'rect',
            size: [80, 50],
            x: 100,
            y: 300,
            anchorPoints: POINT,
        },
        {
            id: 'node4',
            label: '节点四',
            type: 'rect',
            size: [80, 48],
            x: 500,
            y: 300,
            anchorPoints: POINT,
        },
        {
            id: 'node5',
            label: '节点五',
            type: 'rect',
            size: [80, 48],
            x: 300,
            y: 400,
            anchorPoints: POINT,
        },
    ],
    edges: [
        {
            source: 'node1',
            target: 'node2',
            sourceAnchor: 2,
            targetAnchor: 0,
        },
        {
            source: 'node2',
            target: 'node3',
            sourceAnchor: 2,
            targetAnchor: 0,
        },
        {
            source: 'node2',
            target: 'node4',
            sourceAnchor: 2,
            targetAnchor: 0,
        },
        {
            source: 'node3',
            target: 'node5',
            sourceAnchor: 2,
            targetAnchor: 0,
        },
        {
            source: 'node4',
            target: 'node5',
            sourceAnchor: 2,
            targetAnchor: 0,
        },
    ],
};
export default function ReactNode() {
    const ref = useRef(null);
    let graph = null;
    useEffect(() => {
        if (!graph) {
            graph = new G6.Graph({
                container: ReactDOM.findDOMNode(ref.current),
                width: 600,
                height: 500,
                defaultNode: {
                    style: {
                        fill: '#15181ECC',
                        stroke: 'red',
                        lineWidth: 2,
                        lineDash: [5],
                    },
                    labelCfg: {
                        style: {
                            fontSize: 20,
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        },
                    },
                },
            });
        }
        graph.data(data);
        graph.render();
    }, []);
    return (
        <div
            ref={ref}
            style={{
                width: 600,
                height: 500,
                position: 'relative',
                border: '1px solid',
            }}
        ></div>
    );
}
