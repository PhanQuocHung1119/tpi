import React from 'react';
import styles from './NumberIcon.module.scss';
import Image from 'next/image';
import number_1 from '@assets/number/number-1.png';

const NumberIcon = ({ number = number_1 }) => {
  return (
    <>
      <div className={styles['icon-number']}>
        <Image
          src={number}
          alt=''
          width={77}
          height={77}
          layout='responsive'
          objectFit='contain'
          placeholder='blur'
          quality={100}
        />
      </div>
    </>
  );
};
export default NumberIcon;
