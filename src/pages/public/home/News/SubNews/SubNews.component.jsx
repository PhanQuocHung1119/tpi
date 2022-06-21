import React, { useRef } from 'react';
import styles from './SubNews.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import { ReadMoreBtn } from '../ReadMoreBtn';

const SubNews = ({ image }) => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['image']}>
          <Image
            src={image}
            alt=''
            width={384}
            height={202}
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
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
