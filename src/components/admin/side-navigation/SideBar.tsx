import React from 'react';
import classes from './index.module.scss'
import Link from 'next/link'
export const SideBar = () => {
    return (
        <div className={classes.main_container}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <img src="../icons/minimaks512.png" alt="Logo" width={100} />
            </div>

            <ul className={classes.list}>
                <li><Link href='/admin/products'><span>Products</span></Link></li>
                <li><Link href='/admin/categories'><span>Categories</span></Link></li>
                <li><span>Orders</span></li>
                <li><span>Account</span></li>
            </ul>
        </div>
    );
};
