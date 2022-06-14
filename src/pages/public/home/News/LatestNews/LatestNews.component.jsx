import React, { useRef } from 'react';
import styles from './LatestNews.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import news_1 from '@assets/news/News-1.png';
import { ReadMoreBtn } from '../ReadMoreBtn';

const LatestNews = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['content']}>
          <div className={styles['content-left']}>
            <div className={styles['content-left__title']}>BEST PRACTICES</div>
            <div className={styles['content-left__desc']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              etiam facilisi porttitor nunc malesuada
            </div>
            <ReadMoreBtn />
          </div>
          <div className={styles['content-right']}>
            <Image
              src={news_1}
              alt=''
              width={485}
              height={285}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(LatestNews);
