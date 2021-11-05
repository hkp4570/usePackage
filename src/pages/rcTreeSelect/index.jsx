import React from 'react';
import TreeSelect from 'rc-tree-select';

const treeData = [
    { label: 'pNode 01', value: '0-0', key: '0-0' },
    { label: 'pNode 02', value: '0-1', key: '0-1' },
    { label: 'pNode 03', value: '0-2', key: '0-2', isLeaf: true },
];
const RcTreeSelect = () => {
    return <TreeSelect treeData={treeData} labelInValue allowClear />;
};

export default RcTreeSelect;
