import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

function stacked() {
    return (
        <div>
            <StickyContainer style={{ height: '500px', border: '1px solid' }}>
                <Sticky topOffset={0}>
                    {({ style }) => <header style={style}>sticky1</header>}
                </Sticky>
                <h2>StickyContainer</h2>
            </StickyContainer>
            <StickyContainer style={{ height: '500px', border: '1px solid' }}>
                <Sticky topOffset={0}>
                    {({ style }) => <header style={style}>sticky2</header>}
                </Sticky>
                <h2>StickyContainer</h2>
            </StickyContainer>
            <StickyContainer style={{ height: '500px', border: '1px solid' }}>
                <Sticky topOffset={0}>
                    {({ style }) => <header style={style}>sticky3</header>}
                </Sticky>
                <h2>StickyContainer</h2>
            </StickyContainer>
            <StickyContainer style={{ height: '500px', border: '1px solid' }}>
                <Sticky topOffset={0}>
                    {({ style }) => <header style={style}>sticky4</header>}
                </Sticky>
                <h2>StickyContainer</h2>
            </StickyContainer>
            <StickyContainer style={{ height: '500px', border: '1px solid' }}>
                <Sticky topOffset={0}>
                    {({ style }) => <header style={style}>sticky5</header>}
                </Sticky>
                <h2>StickyContainer</h2>
            </StickyContainer>
        </div>
    );
}

export default stacked;
