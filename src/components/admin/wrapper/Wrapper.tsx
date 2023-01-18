import React, { Children, FunctionComponent } from 'react';
import { SideBar } from '../side-navigation/SideBar';
import styles from './Index.module.css'
type Props = {
    children: JSX.Element
}
export const Wrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.main_conatiner}>
            <SideBar />
            {children}
        </div>
    );
};

