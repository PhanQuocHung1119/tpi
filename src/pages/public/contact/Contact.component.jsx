import React from 'react';
import styles from './Contact.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { NewsBlock } from 'components/own/news-block';
import { ContactAConsultant } from './contact-a-consultant';
import { breadcrumb } from '@constants/language-option';

const Contact = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.contact} />
        <ContactAConsultant />
         
      </div>
    </>
  );
};
export default React.memo(Contact);
