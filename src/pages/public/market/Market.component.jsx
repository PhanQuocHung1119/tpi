import React from 'react';
import styles from './Market.module.scss';
import { SubMarket } from './sub-market';
import { Breadcrumb } from 'components/own/breadcrumb';
import { breadcrumb } from '@constants/language-option';

const Market = ({ news }) => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.market} />
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
