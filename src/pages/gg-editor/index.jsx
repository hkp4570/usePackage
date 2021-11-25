import React from 'react';
import GGEditor, { Flow, EditableLabel, RegisterNode } from 'gg-editor';
import styles from './index.less';

const data = {
    nodes: [
        {
            id: '0',
            label: 'Node',
            shape: 'customNode',
            x: 50,
            y: 50,
        },
        {
            id: '1',
            shape: 'customNode',
            label: 'Node',
            x: 50,
            y: 200,
        },
    ],
    edges: [
        {
            label: 'Label',
            source: '0',
            sourceAnchor: 1,
            target: '1',
            targetAnchor: 2,
        },
    ],
};

const GGEditorApp = () => {
    return (
        <div>
            <GGEditor>
                <Flow
                    className={styles.graph}
                    data={data}
                    graphConfig={{
                        defaultNode: {
                            shape: 'bizFlowNode',
                        },
                        defaultEdge: {
                            // shape: "bizFlowEdge"
                        },
                    }}
                />
                <RegisterNode
                    name="customNode"
                    config={{
                        getCustomConfig(model) {
                            console.log(model, 'model');
                            return {
                                wrapperStyle: {
                                    background: '#0f0',
                                    fill: '#000000',
                                },
                            };
                        },
                        getAnchorPoints() {
                            return [
                                [0.5, 0],
                                [0.5, 1],
                            ];
                        },
                    }}
                    extend="rect"
                />
            </GGEditor>
        </div>
    );
};

export default GGEditorApp;
