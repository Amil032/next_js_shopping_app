import React from 'react';
import classes from './index.module.css'
export const SideBar = () => {
    return (
        <div className={classes.main_container}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="icons/minimaks512.png" alt="Logo" width={100} />
            </div>

            <ul className={classes.list}>
                <li>Products</li>
                <li>Categories</li>
                <li>Orders</li>
                <li>Account</li>
            </ul>
        </div>
    );
};
