import React from 'react';

const BasicLayout = (props: any) => {
    console.log(props);
    return (
        <div>
            <h1>BasicLayout</h1>
            {props.children}
        </div>
    );
};

export default BasicLayout;
