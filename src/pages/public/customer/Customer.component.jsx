import React from 'react';
import styles from './Customer.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { NewsBlock } from 'components/own/news-block';
import { ContactAConsultant } from './contact-a-consultant';

const path = [{ path: '#', title: 'Khách hàng' }];

const Customer = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={path} />
        <ContactAConsultant />
        <NewsBlock />
      </div>
    </>
  );
};
export default React.memo(Customer);
