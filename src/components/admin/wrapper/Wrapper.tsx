import React, { Children, FunctionComponent } from 'react';
import { HeaderAdmin } from '../header/HeaderAdmin';
import { SideBar } from '../side-navigation/SideBar';
import styles from './Index.module.css';
type Props = {
  children: JSX.Element;
};
export const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.main_conatiner}>
      <div style={{ display: 'flex', margin: '0px', padding: '0px', width: '100%' }}>
        <SideBar />
        <div style={{ padding: '0', margin: '0', width: '100%' }}>
          <HeaderAdmin />
          {children}
        </div>
      </div>
    </div>
  );
};
