import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';

interface IProps {
    children?: React.ReactNode;
    visible: boolean;
    title: React.ReactNode;
    placement?: 'left' | 'right' | 'top' | 'bottom';
    zIndex?: number;
}

const Tooltip: React.FC<IProps> = (props: IProps) => {
    const [positionStyle, setPositionStyle] = useState({ left: '', top: '' });
    const {
        children,
        visible = false,
        title,
        placement = 'top',
        zIndex = 369,
    } = props;
    const tooltipRef = useRef<null | HTMLDivElement>(null);
    useEffect(() => {
        if (tooltipRef.current) {
            const {
                width,
                height,
                top,
                left,
            } = tooltipRef.current?.getBoundingClientRect();

            if (placement === 'top') {
                setPositionStyle({
                    top: top - height + 'px',
                    left: left + width / 2 + 'px',
                });
            }
        }
    }, []);
    return (
        <div className={styles.tooltip}>
            <div className={styles.tooltip_wrapper} ref={tooltipRef}>
                {children}
            </div>
            {visible
                ? ReactDOM.createPortal(
                      <div
                          className={styles.tooltip_content}
                          style={{ ...positionStyle, zIndex }}
                      >
                          {title}
                      </div>,
                      document.body,
                  )
                : null}
        </div>
    );
};

export default Tooltip;
