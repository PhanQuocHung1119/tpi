import React from 'react';
import styles from './StarIcon.module.scss';
import Image from 'next/image';
import star_icon from '@assets/client-comment/Star.png';

const StarIcon = ({ name, title }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['star-icon']}>
          <Image
            src={star_icon}
            alt=''
            width={18}
            height={18}
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
            quality={100}
          />
        </div>
        <div className={styles['star-icon']}>
          <Image
            src={star_icon}
            alt=''
            width={18}
            height={18}
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
            quality={100}
          />
        </div>
        <div className={styles['star-icon']}>
          <Image
            src={star_icon}
            alt=''
            width={18}
            height={18}
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
            quality={100}
          />
        </div>
        <div className={styles['star-icon']}>
          <Image
            src={star_icon}
            alt=''
            width={18}
            height={18}
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
            quality={100}
          />
        </div>
        <div className={styles['star-icon']}>
          <Image
            src={star_icon}
            alt=''
            width={18}
            height={18}
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
            quality={100}
          />
        </div>
      </div>
    </>
  );
};
export default React.memo(StarIcon);
