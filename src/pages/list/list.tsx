import React from 'react';
import { connect } from 'dva';
import { useEffect } from 'react';

function list(props: any) {
    const {
        dispatch,
        global: { test },
    } = props;
    useEffect(() => {
        dispatch({
            type: 'global/test',
        });
    }, []);
    return (
        <div>
            <Son data={test} />
        </div>
    );
}

function Son({ data }) {
    return (
        <div>
            {data.map((e) => (
                <p key={e}>{e}</p>
            ))}
        </div>
    );
}

export default connect(({ global }) => ({
    global,
}))(list);
