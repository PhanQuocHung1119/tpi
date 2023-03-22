import React from 'react';
import styles from './ColdStorage.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { VideoTop } from 'components/own/video-top';
import { ColdStorageTopContent } from './cold-storage-top-content';
import { ColdStorageListImage } from './cold-storage-list-image';
import { NewsBlock } from 'components/own/news-block';
import { breadcrumb } from '@constants/language-option';

const ColdStorage = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.coldStorage} />
        <VideoTop />
        <ColdStorageTopContent />
        <ColdStorageListImage />
         
      </div>
    </>
  );
};
export default React.memo(ColdStorage);
