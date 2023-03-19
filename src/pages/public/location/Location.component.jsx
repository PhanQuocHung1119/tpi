import React from 'react';
import styles from './Location.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { breadcrumb } from '@constants/language-option';
import { VideoTop } from 'components/own/video-top';
import { locationMap } from './location-map';
import { LocationMapListImage } from './location-map-list-image';

const Location = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.location} />
        <locationMap />
        <LocationMapListImage />
        <VideoTop />
      </div>
    </>
  );
};
export default Location;
