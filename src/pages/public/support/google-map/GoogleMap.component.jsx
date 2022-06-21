import React from 'react';
import styles from './GoogleMap.module.scss';
import Image from 'next/image';
import map from '@assets/support/google-map-image.png';
const GoogleMap = () => {
  return (
    <>
      <div className={styles['container']}>
        <Image
          src={map}
          alt=''
          width={1440}
          height={320}
          layout='responsive'
          objectFit='contain'
          placeholder='blur'
          quality={100}
        />
      </div>
    </>
  );
};
export default GoogleMap;
