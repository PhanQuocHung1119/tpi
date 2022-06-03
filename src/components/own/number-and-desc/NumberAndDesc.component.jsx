import React from 'react';
import styles from './NumberAndDesc.module.scss';
import Image from 'next/image';
import num1 from '@assets/about-us/num1.png';

const NumberAndDesc = ({ number = num1, desc }) => {
  return (
    <>
      <div className={styles['number']}>
        <div className={styles['number__num-img']}>
          <Image
            src={number}
            alt=''
            width={88}
            height={121}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
        <div className={styles['number__desc']}>{desc}</div>
      </div>
    </>
  );
};
export default NumberAndDesc;
