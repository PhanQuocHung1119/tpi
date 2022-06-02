import React from 'react';
import styles from './News.module.scss';
import Image from 'next/image';
import { LatestNews } from './LatestNews';
import { SubNews } from './SubNews';
import news_1 from '@assets/news/News-1.png';
import news_2 from '@assets/news/News-2.png';
import news_3 from '@assets/news/News-3.png';
import news_4 from '@assets/news/News-4.png';

const News = () => {
  return (
    <>
      <div className={styles['main-container']}>
        <div className={styles['title']}>Latest news</div>
        <div className={styles['container']}>
          <LatestNews />
          <div className={styles['sub-news']}>
            <SubNews image={news_1} />
            <SubNews image={news_2} />
            <SubNews image={news_3} />
            <SubNews image={news_4} />
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(News);
