import React from 'react';
import styles from './SubNews.module.scss';
import Image from 'next/image';
import { ReadMoreBtn } from '../ReadMoreBtn';

const SubNews = ({ image }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['image']}>
          <Image
            src={image}
            alt=''
            width={384}
            height={202}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
        <div className={styles['title']}>CASE STUDY</div>
        <div className={styles['desc']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <ReadMoreBtn />
      </div>
    </>
  );
};
export default React.memo(SubNews);
