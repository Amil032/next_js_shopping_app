import React from 'react';
import classes from './index.module.css'
export const SideBar = () => {
    return (
        <div className={classes.main_container}>
            <ul>
                <li>Products</li>
                <li>Categories</li>
                <li>Orders</li>
                <li>Account</li>
            </ul>
        </div>
    );
};
