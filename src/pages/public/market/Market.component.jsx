import React from 'react';
import styles from './Market.module.scss';
import { SubMarket } from './sub-market';
import { TopNews } from './TopNews';
import { Breadcrumb } from 'components/own/breadcrumb';
import { breadcrumb } from '@constants/language-option';
import { topNewsCarousel } from './topnews-carousel';

const Market = ({ news }) => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.market} />
        <div>
          <topNewsCarousel />
        </div>
        <div className={styles['wrapperTopNews']}>
          {news.map((item, idy) => (
            <TopNews key={idy} news={item} />
          ))}
        </div>
        <div className={styles['wrapper']}>
          {news.map((item, idx) => (
            <SubMarket key={idx} news={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(Market);
