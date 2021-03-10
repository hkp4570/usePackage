import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

function relative() {
    return (
        <div>
            <StickyContainer
                style={{
                    height: '500px',
                    border: '1px solid',
                    overflowY: 'auto',
                }}
            >
                <div style={{ height: '900px' }}>
                    <div style={{ height: '200px' }}>start</div>
                    <div style={{ height: '200px' }}>
                        <Sticky relative bottomOffset={0}>
                            {({
                                style = { fontSize: '28px' },
                                isSticky,
                                wasSticky,
                                distanceFromTop,
                                distanceFromBottom,
                                calculatedHeight,
                            }) => <header style={style}>sticky</header>}
                        </Sticky>
                    </div>
                    <div style={{ height: '500px', border: '1px solid' }}>
                        <h2>StickyContainer</h2>
                    </div>
                </div>
            </StickyContainer>
        </div>
    );
}

export default relative;
