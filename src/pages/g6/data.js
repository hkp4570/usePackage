export const data = {
    nodes: [
        {
            status: 0, //节点状态 用于更改颜色
            id: '5fd5ef0f', //节点id
            label: '是否报警', //节点名称
            shape: 'flow-rhombus', //节点形状类型
            size: '80*72', //节点大小
            type: 'node', //节点类型
            x: 463.515625, //
            y: 367, //节点位于画布位置
        },
        {
            status: 0,
            id: 'b5d33740',
            label: '属实',
            shape: 'flow-rect',
            size: '80*48',
            type: 'node',
            x: 219.015625,
            y: 483.5,
        },
        {
            status: 0,
            id: '8402b23d',
            label: '人工核实',
            shape: 'flow-rhombus',
            size: '80*72',
            type: 'node',
            x: 219.515625,
            y: 359,
        },
        {
            status: 0,
            id: '746dd7be',
            label: '报警',
            shape: 'flow-rect',
            size: '80*48',
            type: 'node',
            x: 464.015625,
            y: 489.5,
        },
        {
            status: 0,
            id: '8891eaf9',
            label: '启动',
            shape: 'flow-circle',
            size: '72*72',
            type: 'node',
            x: 457.015625,
            y: 117.5,
        },
        {
            status: 0,
            id: '48f92c7c',
            label: '触发火灾',
            shape: 'flow-rect',
            size: '80*48',
            type: 'node',
            x: 460.015625,
            y: 220,
        },
        {
            status: 0,
            id: '0f2d9c3d',
            label: '119',
            shape: 'flow-rect',
            size: '80*48',
            type: 'node',
            x: 325.515625,
            y: 584,
        },
        {
            status: 0,
            id: '820ef87e',
            label: '120',
            shape: 'flow-rect',
            size: '80*48',
            type: 'node',
            x: 584.515625,
            y: 586,
        },
        {
            status: 0,
            id: '18b36170',
            label: '事件结束',
            shape: 'flow-capsule',
            size: '80*48',
            type: 'node',
            x: 463.515625,
            y: 665,
        },
    ],
    edges: [
        {
            id: 'e0f5a4a8', //连接线id
            status: 0, //连接线状态 用于更改颜色
            source: '48f92c7c', //连接线上游节点id
            sourceAnchor: 2, //上游节点连线位置 每个节点有四个连接点顺时针对应 0、1、2、3
            target: '5fd5ef0f', //连接线目标节点id
            targetAnchor: 0, //上游节点连线位置
        },
        {
            id: '3f96e12c',
            status: 0,
            source: '48f92c7c',
            sourceAnchor: 3,
            target: '8402b23d',
            targetAnchor: 0,
        },
        {
            id: 'be492bff',
            status: 0,
            source: '8402b23d',
            sourceAnchor: 2,
            target: 'b5d33740',
            targetAnchor: 0,
        },
        {
            id: '812cf224',
            status: 0,
            source: 'b5d33740',
            sourceAnchor: 1,
            target: '746dd7be',
            targetAnchor: 3,
        },
        {
            id: '9ca6b433',
            status: 0,
            source: '5fd5ef0f',
            sourceAnchor: 2,
            target: '746dd7be',
            targetAnchor: 0,
        },
        {
            id: 'eac39a7e',
            status: 0,
            source: '8891eaf9',
            sourceAnchor: 2,
            target: '48f92c7c',
            targetAnchor: 0,
        },
        {
            id: 'eed085a7',
            status: 0,
            source: '746dd7be',
            sourceAnchor: 2,
            target: '0f2d9c3d',
            targetAnchor: 0,
        },
        {
            id: '0d938e74',
            status: 0,
            source: '746dd7be',
            sourceAnchor: 2,
            target: '820ef87e',
            targetAnchor: 0,
        },
        {
            id: 'c9bd0003',
            status: 0,
            source: '0f2d9c3d',
            sourceAnchor: 2,
            target: '18b36170',
            targetAnchor: 0,
        },
        {
            id: '9c477a6a',
            status: 0,
            source: '820ef87e',
            sourceAnchor: 2,
            target: '18b36170',
            targetAnchor: 0,
        },
    ],
};
