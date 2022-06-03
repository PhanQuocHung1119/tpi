import React from 'react';
import styles from './SubNewsBlock.module.scss';
import Image from 'next/image';
import birth from '@assets/icons/birth.png';

const SubNewsBlock = ({ image, time, title, desc }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['main-image']}>
          <Image
            src={image}
            alt=''
            width={383}
            height={200}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
        <div className={styles['time']}>
          <div className={styles['time__image']}>
            <Image
              src={birth}
              alt=''
              width={29}
              height={29}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          {time}
        </div>
        <div className={styles['title']}>{title}</div>
        <div className={styles['desc']}>{desc}</div>
      </div>
    </>
  );
};
export default SubNewsBlock;
