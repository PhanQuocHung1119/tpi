import React from 'react';
import styles from './Location.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { breadcrumb } from '@constants/language-option';
import { VideoTop } from 'components/own/video-top';

const Location = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.location} />
        <VideoTop />
      </div>
    </>
  );
};
export default Location;
