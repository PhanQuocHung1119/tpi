import React from 'react';
import styles from './NumberGeneralInfo.module.scss';

const NumberGeneralInfo = ({ title, desc }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['desc']}>{desc}</div>
      </div>
    </>
  );
};
export default NumberGeneralInfo;
