import React from 'react';
import classes from './index.module.scss'
export const SideBar = () => {
    return (
        <div className={classes.main_container}>
            <div style={{ display: 'flex', justifyContent: 'center',marginTop:'40px' }}>
                <img src="icons/minimaks512.png" alt="Logo" width={100} />
            </div>

            <ul className={classes.list}>
                <li><span>Products</span></li>
                <li><span>Categories</span></li>
                <li><span>Orders</span></li>
                <li><span>Account</span></li>
            </ul>
        </div>
    );
};
