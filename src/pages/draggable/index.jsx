import React from 'react';
import Draggable from 'react-draggable';

function RDraggable() {
    return (
        <div style={{ height: '100%', position: 'relative' }}>
            <Draggable
                allowAnyClick={false}
                bounds="parent"
                axis="both"
                defaultPosition={{ x: 100, y: 100 }}
                handle={'.handle'}
                // grid={[200,200]}
            >
                <div style={{ width: 100, height: 100, border: '1px solid' }}>
                    <div
                        style={{ height: 30, background: 'red' }}
                        className="handle"
                    >
                        点这拖动
                    </div>
                    <a href="#">link</a>
                </div>
            </Draggable>
        </div>
    );
}

export default RDraggable;
