import React from 'react';
import { NavLink } from 'umi';
import styles from './index.less';

const linkStyle = {
    style: {
        fontSize: '20px',
        marginRight: '20px',
    },
};
// 记住通过props.children渲染子路由
const index: React.FC<any> = (props: any): JSX.Element => {
    const {
        location: { pathname },
    } = props;

    return (
        <div>
            <div className={styles.nav}>
                <NavLink
                    exact
                    to="/home"
                    className={styles.navItem}
                    activeClassName={styles.navItemActive}
                >
                    home
                </NavLink>
                <NavLink
                    exact
                    to="/user"
                    className={styles.navItem}
                    activeClassName={styles.navItemActive}
                >
                    user
                </NavLink>
                <NavLink
                    exact
                    to="/sticky/basic"
                    className={styles.navItem}
                    activeClassName={styles.navItemActive}
                >
                    sticky
                </NavLink>
                <NavLink
                    exact
                    to="/calendar"
                    className={styles.navItem}
                    activeClassName={styles.navItemActive}
                >
                    calendar
                </NavLink>
                <NavLink
                    exact
                    to="/datePicker"
                    className={styles.navItem}
                    activeClassName={styles.navItemActive}
                >
                    datePicker
                </NavLink>
            </div>
            {pathname.includes('/sticky') ? (
                <div>
                    <NavLink exact to="/sticky/basic" {...linkStyle}>
                        basic
                    </NavLink>
                    <NavLink exact to="/sticky/relative" {...linkStyle}>
                        relative
                    </NavLink>
                    <NavLink exact to="/sticky/stacked" {...linkStyle}>
                        stacked
                    </NavLink>
                </div>
            ) : null}
            {props.children}
        </div>
    );
};
export default index;
