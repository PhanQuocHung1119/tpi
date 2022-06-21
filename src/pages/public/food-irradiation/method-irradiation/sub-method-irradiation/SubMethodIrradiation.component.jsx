import React from 'react';
import { SubMethodStep } from './sub-method-step';
import styles from './SubMethodIrradiation.module.scss';
import Image from 'next/image';

import method_image from '@assets/food-irradiation/method-image.png';

const SubMethodIrradiation = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content-left']}>
          <div className={styles['content-left__title']}>Phương án 1:</div>
          <div className={styles['content-left__step']}>
            <SubMethodStep number={1} fullLine={true} />
            <SubMethodStep number={2} fullLine={true} />
            <SubMethodStep number={3} fullLine={false} />
          </div>
        </div>
        <div className={styles['content-right']}>
          <div className={styles['content-right__image']}>
            <Image
              src={method_image}
              alt=''
              width={683}
              height={353}
              layout='responsive'
              objectFit='contain'
              placeholder='blur'
              quality={100}
            />
          </div>
          <div
            className={styles['content-right__desc']}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, feugiat morbi laoreet nisi, dictum. Purus tellus ut lectus quis mattis pretium luctus. Morbi faucibus libero pellentesque odio tincidunt lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, feugiat morbi laoreet nisi, dictum. Purus tellus ut lectus quis mattis pretium luctus. Morbi faucibus libero `}</div>
        </div>
      </div>
    </>
  );
};
export default SubMethodIrradiation;
