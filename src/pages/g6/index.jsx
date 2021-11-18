import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// import {data} from './data';
import G6 from '@antv/g6';

const data = {
    nodes: [
        {
            id: '1',
            dataType: 'alps',
            name: 'alps_file1',
            conf: [
                {
                    label: 'conf',
                    value: 'pai_graph.conf',
                },
                {
                    label: 'dot',
                    value: 'pai_graph.dot',
                },
                {
                    label: 'init',
                    value: 'init.rc',
                },
            ],
        },
        {
            id: '2',
            dataType: 'alps',
            name: 'alps_file2',
            conf: [
                {
                    label: 'conf',
                    value: 'pai_graph.conf',
                },
                {
                    label: 'dot',
                    value: 'pai_graph.dot',
                },
                {
                    label: 'init',
                    value: 'init.rc',
                },
            ],
        },
        {
            id: '3',
            dataType: 'alps',
            name: 'alps_file3',
            conf: [
                {
                    label: 'conf',
                    value: 'pai_graph.conf',
                },
                {
                    label: 'dot',
                    value: 'pai_graph.dot',
                },
                {
                    label: 'init',
                    value: 'init.rc',
                },
            ],
        },
        {
            id: '4',
            dataType: 'sql',
            name: 'sql_file1',
            conf: [
                {
                    label: 'conf',
                    value: 'pai_graph.conf',
                },
                {
                    label: 'dot',
                    value: 'pai_graph.dot',
                },
                {
                    label: 'init',
                    value: 'init.rc',
                },
            ],
        },
        {
            id: '5',
            dataType: 'sql',
            name: 'sql_file2',
            conf: [
                {
                    label: 'conf',
                    value: 'pai_graph.conf',
                },
                {
                    label: 'dot',
                    value: 'pai_graph.dot',
                },
                {
                    label: 'init',
                    value: 'init.rc',
                },
            ],
        },
        {
            id: '6',
            dataType: 'feature_etl',
            name: 'feature_etl_1',
            conf: [
                {
                    label: 'conf',
                    value: 'pai_graph.conf',
                },
                {
                    label: 'dot',
                    value: 'pai_graph.dot',
                },
                {
                    label: 'init',
                    value: 'init.rc',
                },
            ],
        },
        {
            id: '7',
            dataType: 'feature_etl',
            name: 'feature_etl_1',
            conf: [
                {
                    label: 'conf',
                    value: 'pai_graph.conf',
                },
                {
                    label: 'dot',
                    value: 'pai_graph.dot',
                },
                {
                    label: 'init',
                    value: 'init.rc',
                },
            ],
        },
        {
            id: '8',
            dataType: 'feature_extractor',
            name: 'feature_extractor',
            conf: [
                {
                    label: 'conf',
                    value: 'pai_graph.conf',
                },
                {
                    label: 'dot',
                    value: 'pai_graph.dot',
                },
                {
                    label: 'init',
                    value: 'init.rc',
                },
            ],
        },
    ],
    edges: [
        {
            source: '1',
            target: '2',
        },
        {
            source: '1',
            target: '3',
        },
        {
            source: '2',
            target: '4',
        },
        {
            source: '3',
            target: '4',
        },
        {
            source: '4',
            target: '5',
        },
        {
            source: '5',
            target: '6',
        },
        {
            source: '6',
            target: '7',
        },
        {
            source: '6',
            target: '8',
        },
    ],
};
const Index = () => {
    const ref = React.useRef(null);
    let graph = null;
    useEffect(() => {
        if (!graph) {
            graph = new G6.Graph({
                container: ReactDOM.findDOMNode(ref.current),
                width: 1200,
                height: 800,
                layout: {
                    type: 'dagre',
                    nodesepFunc: (d) => {
                        if (d.id === '3') {
                            return 500;
                        }
                        return 50;
                    },
                    ranksep: 70,
                    controlPoints: true,
                },
            });
        }
        graph.data(data);
        graph.render();
    }, []);

    return <div ref={ref} />;
};

export default Index;
