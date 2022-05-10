import React from 'react';
import styles from './SubBestServices.module.scss';

import Image from 'next/image';

const SubBestServices = ({ icon, number }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content']}>
          <div className={styles['content__icon-arrow-right']}>
            <Image
              src={icon}
              alt=''
              width={64}
              height={64}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          <div className={styles['content__title']}>Lorem ipsum</div>
          <div className={styles['content__desc']}>
            Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod
            tempor incididunt
          </div>
        </div>
        <div className={styles['number']}>{number}</div>
      </div>
    </>
  );
};
export default React.memo(SubBestServices);
