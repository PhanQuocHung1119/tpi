import React from 'react';
import styles from './ReadMoreBtn.module.scss';
import Image from 'next/image';
import arrow_right from '@assets/news/right-arrow-green.png';

const ReadMoreBtn = ({ readMore = 'Read More' }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>{readMore}</div>
        <div className={styles['arrow-icon']}>
          <Image
            src={arrow_right}
            alt=''
            width={12}
            height={9}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
      </div>
    </>
  );
};
export default React.memo(ReadMoreBtn);
