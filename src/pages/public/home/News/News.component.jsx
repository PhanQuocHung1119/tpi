import React from 'react';
import styles from './News.module.scss';
import Image from 'next/image';
import { LatestNews } from './LatestNews';
import { SubNews } from './SubNews';
import news_2 from '@assets/news/News-2.png';
import news_3 from '@assets/news/News-3.png';
import news_4 from '@assets/news/News-4.png';

const News = () => {
  return (
    <>
      <div className={styles['container']}>
        <LatestNews />
        <div className={styles['sub-news']}>
          <SubNews image={news_2} />
          <SubNews image={news_3} />
          <SubNews image={news_4} />
        </div>
      </div>
    </>
  );
};
export default React.memo(News);
