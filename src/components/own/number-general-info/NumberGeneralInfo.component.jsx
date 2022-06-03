import React from 'react';
import styles from './NumberGeneralInfo.module.scss';
import Image from 'next/image';
import { NumberIcon } from 'components/own/number-icon';

const NumberGeneralInfo = ({ number, title, desc }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['icon-number']}>
          <NumberIcon number={number} />
        </div>
        <div className={styles['title']}>{title}</div>
        <div className={styles['desc']}>{desc}</div>
      </div>
    </>
  );
};
export default NumberGeneralInfo;
