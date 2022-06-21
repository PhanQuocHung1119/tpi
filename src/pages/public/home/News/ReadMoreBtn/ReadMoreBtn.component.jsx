import React from 'react';
import styles from './ReadMoreBtn.module.scss';
import Image from 'next/image';
import arrow_right from '@assets/news/right-arrow-green.png';

const ReadMoreBtn = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Read More</div>
        <div className={styles['arrow-icon']}>
          <Image
            src={arrow_right}
            alt=''
            width={12}
            height={9}
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
export default React.memo(ReadMoreBtn);
