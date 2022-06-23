import React from 'react';
import styles from './GoogleMap.module.scss';
import Script from 'next/script';
import Image from 'next/image';
import map from '@assets/support/google-map-image.png';

const GOOGLE_MAPS_API_KEY = `AIzaSyCZTFFKgF3K61I8cQ3CcS4mtezeP2U08CM`;
const source = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
const GoogleMap = () => {
  return (
    <>
      <div className={styles['container']}>
        <Script type='text/javascript' src={source} />
        {/* <Image
          src={map}
          alt=''
          width={1440}
          height={320}
          layout='responsive'
          objectFit='contain'
          quality={100}
        /> */}
      </div>
    </>
  );
};
export default GoogleMap;
