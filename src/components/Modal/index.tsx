import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { sleep } from '@/utils/helper';
import styles from './index.less';
interface IProps {
    visible: boolean;
    children?: React.ReactNode;
    maskCloseable?: boolean;
    onCancel?: () => void;
}
const Modal = ({
    visible = false,
    children,
    maskCloseable,
    onCancel,
}: IProps) => {
    const contentDownRef = useRef(false); // 鼠标是否在modal内容区域按钮
    const handleCloseModal = () => {
        !contentDownRef.current && maskCloseable && onCancel && onCancel();
    };
    const containerDown = () => {
        contentDownRef.current = true;
    };
    const containerUp = () => {
        sleep(1).then(() => {
            contentDownRef.current = false;
        });
    };
    const createModal = () => {
        return (
            <div className={styles.mask} onClick={handleCloseModal}>
                <div
                    className={styles.modalContainer}
                    onMouseDown={containerDown}
                    onMouseUp={containerUp}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                    <div>取消</div>
                    <div>确定</div>
                </div>
            </div>
        );
    };
    return (
        <>
            {visible
                ? ReactDOM.createPortal(createModal(), document.body)
                : null}
        </>
    );
};

export default Modal;
