import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from './calendar.less';

/**
 * activeStartDate（不能切换时间） defaultActiveStartDate（可以切换时间） ---> 默认显示开始的时间
 * defaultView view ---> 当前显示格式
 * @param props
 * @returns
 */
const componentName: React.FC<any> = (props: any) => {
    const [value, onChange] = useState<Date | Date[]>(new Date());
    return (
        <div className={styles.calendar}>
            <Calendar
                onChange={onChange}
                value={value}
                // activeStartDate={new Date(1996,0,1)}
                // defaultActiveStartDate={new Date(1996,0,1)}
                allowPartialRange
                // defaultValue={new Date(1970,0,1)}
                // defaultView={'month'}
                view={'month'}
            />
        </div>
    );
};

export default componentName;
