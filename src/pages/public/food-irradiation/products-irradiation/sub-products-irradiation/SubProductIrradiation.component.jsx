import React from 'react';
import styles from './SubProductIrradiation.module.scss';
import Image from 'next/image';
import pro1 from '@assets/food-irradiation/pro-1.png';

const SubProductIrradiation = ({ image = pro1, desc = 'Trái cây tươi' }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content']}>
          <div className={styles['image-wrapper']}></div>
          <div className={styles['image']}>
            <Image
              src={image}
              alt=''
              width={42}
              height={42}
              layout='responsive'
              objectFit='contain'
              placeholder='blur'
              quality={100}
            />
          </div>
        </div>
        <div className={styles['desc']}>{desc}</div>
      </div>
    </>
  );
};
export default SubProductIrradiation;
