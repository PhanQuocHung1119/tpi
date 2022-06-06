import React from 'react';
import styles from './ColdStorage.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { VideoTop } from 'components/own/video-top';
import { ColdStorageTopContent } from './cold-storage-top-content';
import { ColdStorageListImage } from './cold-storage-list-image';
import { NewsBlock } from 'components/own/news-block';

const path = [
  { path: '#', title: 'Lĩnh vực tiên phong' },
  { path: '#', title: 'Kho lạnh lưu trữ' },
];

const ColdStorage = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={path} />
        <VideoTop />
        <ColdStorageTopContent />
        <ColdStorageListImage />
        <NewsBlock />
      </div>
    </>
  );
};
export default ColdStorage;
