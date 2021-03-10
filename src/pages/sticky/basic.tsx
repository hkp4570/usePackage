import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

/**
 * topOffset  从上往下滑动
 * bottomOffset  从下往上滑动
 * @param props
 * @returns
 */
const sticky: React.FC<any> = (props: any) => {
    return (
        <div>
            <div style={{ height: '250px', background: '#fff' }}>
                content before the sticky
            </div>
            <StickyContainer style={{ height: '500px', border: '1px solid' }}>
                <Sticky bottomOffset={180}>
                    {({ style }) => <header style={style}>头部</header>}
                </Sticky>
                <h2>StickyContainer</h2>
            </StickyContainer>
            <div style={{ height: '1500px' }}>Content after the Sticky...</div>
        </div>
    );
};

export default sticky;
