import React from 'react';
import styles from './Support.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { NewsBlock } from 'components/own/news-block';
import { SupportBanner } from './support-banner';
import { SupportContent } from './support-content';
import { GoogleMap } from './google-map';
import { SupportContact } from './support-contact';
import { breadcrumb } from '@constants/language-option';

const Support = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.support} />
        <SupportBanner />
        <SupportContent />
        <GoogleMap />
        <SupportContact />
        <NewsBlock />
      </div>
    </>
  );
};
export default React.memo(Support);
